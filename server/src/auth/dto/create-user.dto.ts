import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({ description: 'First name of the user', example: 'John' })
  firstName: string;

  @IsString()
  @ApiProperty({ description: 'Last name of the user', example: 'Doe' })
  lastName: string;

  @IsString()
  @ApiProperty({ description: 'Username of the user', example: 'john_doe' })
  username: string;

  @IsString()
  @ApiProperty({
    description: 'Email address of the user',
    example: 'john.doe@example.com',
  })
  email: string;

  @IsString()
  @ApiProperty({ description: 'User password', example: 'securePassword123' })
  @MinLength(8, {
    message: 'Password must be at least 8 characters long',
  })
  @MaxLength(20, {
    message: 'Password cannot be longer than 20 characters',
  })
  password: string;

  @IsString()
  @ApiProperty({ description: "ID of the user's location" })
  locationId: string;
}
