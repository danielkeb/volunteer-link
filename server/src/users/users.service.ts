import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

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

    const volunteerRole = await this.prisma.roles.findFirst({
      where: {
        name: 'Volunteer',
      },
    });

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

  // Helper function to remove sensitive information from user data
  sanitizeUserData(user: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, verificationCode, resetCode, ...userWithoutSensitive } =
      user;
    const sanitizedUser = { ...userWithoutSensitive };
    return sanitizedUser;
  }
}
