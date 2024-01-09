import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

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
    const token = await this.jwtService.signAsync(payload);

    // Update the user with the new token
    const updatedUser = await this.prisma.users.update({
      where: { id: user.id },
      data: {
        token: token,
        lastLoggedInAt: new Date(),
      },
    });

    // Return user without sensitive information
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, resetCode, ...userWithoutSensitive } = updatedUser;

    return { ...userWithoutSensitive };
  }
}
