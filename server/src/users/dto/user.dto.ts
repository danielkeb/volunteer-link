import { ApiProperty } from '@nestjs/swagger';
import { LocationPreference, TimePreference } from '@prisma/client';
import { IsEmail, IsEnum, IsString } from 'class-validator';

export class UserDto {
  @ApiProperty({ description: 'First name of the user' })
  @IsString()
  firstName: string;

  @ApiProperty({ description: 'Last name of the user' })
  @IsString()
  lastName: string;

  @ApiProperty({ description: 'Username of the user' })
  @IsString()
  username: string;

  @ApiProperty({ description: 'Email address of the user' })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Bio text of the user',
  })
  @IsString()
  bio: string;

  @ApiProperty({ description: "ID of the user's location" })
  @IsString()
  locationId: string;

  @ApiProperty({
    description: 'Location preference of the user',
    enum: LocationPreference,
  })
  @IsEnum(LocationPreference)
  locationPreference: string;

  @ApiProperty({
    description: 'Time preference of the user',
    enum: TimePreference,
  })
  @IsEnum(TimePreference)
  timePreference: string;

  @IsString()
  token: string;

  @IsString()
  resetCode: string;
}
