import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findById(id: string) {
    return await this.prisma.users.findUnique({
      where: {
        id: id,
      },
    });
  }

  async findByEmail(email: string) {
    return await this.prisma.users.findUnique({
      where: {
        email: email,
      },
    });
  }

  async findByUsername(username: string) {
    return await this.prisma.users.findUnique({
      where: {
        username: username,
      },
    });
  }
}
