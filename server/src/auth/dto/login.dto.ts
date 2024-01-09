import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class LoginDto {
  @ApiPropertyOptional({
    description: 'User email',
    type: String,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User email',
    minLength: 8,
    maxLength: 20,
  })
  @IsString()
  @MinLength(8, {
    message: 'Password must be at least 8 characters long',
  })
  @MaxLength(20, {
    message: 'Password cannot be longer than 20 characters',
  })
  password: string;
}
