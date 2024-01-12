import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const newUser = await this.usersService.createUser(createUserDto);

    return this.generateTokenAndUpdateUser(
      {
        sub: newUser.id,
        email: newUser.email,
      },
      newUser.id,
    );
  }

  async signIn(email: string, pass: string): Promise<any> {
    // Find the user with the given email
    const user = await this.usersService.findByEmail(email);

    // Validate if the user exists and if passwords match using bcrypt
    if (!user || !bcrypt.compare(pass, user.password)) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Generate the JWT token with minimal user information
    const payload = {
      sub: user.id,
      email: user.email,
    };

    return this.generateTokenAndUpdateUser(payload, user.id); //
  }

  // A helper function to generate a JWT token and update user information
  // the function returns user data without sensitive information
  async generateTokenAndUpdateUser(
    payload: { sub: string; email: string },
    id: string,
  ) {
    const token = await this.jwtService.signAsync(payload);

    const updatedUser = await this.prisma.users.update({
      where: { id: id },
      data: {
        token: token,
        lastLoggedInAt: new Date(),
      },
    });

    const userWithoutSensitive =
      this.usersService.sanitizeUserData(updatedUser);

    return { ...userWithoutSensitive };
  }
}
