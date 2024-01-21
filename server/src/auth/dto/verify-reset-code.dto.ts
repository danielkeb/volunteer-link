import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class VerifyResetCodeDto {
  @IsString()
  @ApiProperty({
    description: 'Reset code sent to the user by email for password reset',
  })
  resetCode: string;

  @IsEmail()
  @ApiProperty({
    description: 'Email address of the user for password reset',
  })
  email: string;
}
