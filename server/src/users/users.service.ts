import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { LocationPreference, TimePreference } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(newUser: {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    locationId: string;
  }) {
    // Check for `username` and ```email``` uniqueness
    const existingUser = await this.prisma.users.findFirst({
      where: {
        OR: [{ username: newUser.username }, { email: newUser.email }],
      },
    });

    if (existingUser) {
      throw new ConflictException(
        'Please enter a unique username and email address',
      );
    }

    const checkLocation = await this.prisma.locations.findUnique({
      where: {
        id: newUser.locationId,
      },
    });

    if (!checkLocation) {
      throw new NotFoundException('Specified location does not exist');
    }

    const volunteerRole = await this.prisma.roles.findFirst({
      where: {
        name: 'Volunteer',
      },
    });

    // Encrypt the password
    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashedPassword;

    return this.prisma.users.create({
      data: { ...newUser, roleId: volunteerRole.id },
    });
  }

  async findById(id: string) {
    const user = await this.prisma.users.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) throw new NotFoundException();
    else return user;
  }

  async findByEmail(email: string) {
    const user = await this.prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) throw new NotFoundException();
    else return user;
  }

  async findByUsername(username: string) {
    const user = await this.prisma.users.findUnique({
      where: {
        username: username,
      },
    });

    if (!user) throw new NotFoundException();
    else return user;
  }

  async me(id: string) {
    const user = await this.prisma.users.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) throw new NotFoundException();
    else return user;
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    // Check if username and email already exists
    if (updateUserDto.username || updateUserDto.email) {
      const existingUser = await this.prisma.users.findFirst({
        where: {
          OR: [
            { username: updateUserDto.username },
            { email: updateUserDto.email },
          ],
        },
      });

      if (existingUser && existingUser.id !== id) {
        throw new ConflictException(
          'Please enter a unique username and email address',
        );
      }
    }

    const user = await this.prisma.users.update({
      where: {
        id: id,
      },
      data: {
        ...updateUserDto,
        timePreference: updateUserDto.timePreference as TimePreference,
        locationPreference:
          updateUserDto.locationPreference as LocationPreference,
      },
    });

    return this.sanitizeUserData(user);
  }

  async deleteUser(id: string) {
    try {
      await this.prisma.users.delete({
        where: {
          id: id,
        },
      });

      return {
        message: 'Account deleted successfully',
      };
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  // Helper function to remove sensitive information from user data
  sanitizeUserData(user: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, verificationCode, resetCode, ...userWithoutSensitive } =
      user;
    const sanitizedUser = { ...userWithoutSensitive };
    return sanitizedUser;
  }
}
