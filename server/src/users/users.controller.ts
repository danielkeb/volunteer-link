import { Controller, Get, Req } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private userService: UsersService) {}

  @Get('me')
  @ApiOkResponse({ description: 'Return the current user profile.' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiNotFoundResponse({ description: 'User profile cannot be found' })
  async getMe(@Req() req: any) {
    const id = req.user.sub;
    const user = await this.userService.findById(id);
    return this.userService.sanitizeUserData(user);
  }
}
