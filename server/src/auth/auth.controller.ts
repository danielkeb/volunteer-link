import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiConflictResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { SignInDto } from './dto/sign-in.dto';
import { VerifyResetCodeDto } from './dto/verify-reset-code.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('register')
  @ApiOkResponse({ description: 'User successfully registered.' })
  @ApiConflictResponse({
    description: 'A user with this username or email already exists',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error occurred. Please try again later.',
  })
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @Public()
  @Post('signIn')
  @ApiOkResponse({ description: 'User successfully logged in.' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error occurred. Please try again later.',
  })
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @Public()
  @Post('forgotPassword')
  @ApiOperation({ summary: 'Initiate password reset' })
  @ApiBody({ type: ForgotPasswordDto }) // Documenting the request body
  @ApiResponse({
    status: 200,
    description: 'Password reset initiated successfully.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    return this.authService.forgotPassword(forgotPasswordDto);
  }

  @Public()
  @Get('verifyResetCode')
  @ApiOperation({ summary: 'Verify password reset code' })
  @ApiQuery({
    name: 'resetCode',
    type: String,
    description: 'Reset code sent to the user for password reset',
  })
  @ApiQuery({
    name: 'email',
    type: String,
    description: 'Email address of the user for password reset',
  })
  @ApiResponse({
    status: 200,
    description: 'Password reset code verified successfully.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  verifyResetCode(@Body() verifyResetCodeDto: VerifyResetCodeDto) {
    return this.authService.verifyResetCode(verifyResetCodeDto);
  }

  @Post('resetPassword')
  @ApiOperation({ summary: 'Reset user password' })
  @ApiBody({ type: ResetPasswordDto }) // Documenting the request body
  @ApiResponse({ status: 200, description: 'Password reset successfully.' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return this.authService.resetPassword(
      resetPasswordDto.email,
      resetPasswordDto.newPassword,
    );
  }
}
