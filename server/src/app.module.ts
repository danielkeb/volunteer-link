import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { EmailModule } from './email/email.module';
import { FilesModule } from './files/files.module';
import { LocationsModule } from './locations/locations.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { SkillCategoriesModule } from './skillsAndCategories/skill-categories/skill-categories.module';
import { SkillsModule } from './skillsAndCategories/skills/skills.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { StatsModule } from './misc/stats/stats.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    EmailModule,
    LocationsModule,
    FilesModule,
    SkillsModule,
    SkillCategoriesModule,
    StatsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, UsersService],
})
export class AppModule {}
