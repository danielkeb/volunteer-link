import { Body, Controller, Delete, Get, Patch, Req } from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'Fetch current user (own) profile' })
  @Get('me')
  @ApiOkResponse({ description: 'Return the current user profile.' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiNotFoundResponse({ description: 'User profile cannot be found' })
  async getMe(@Req() req: any) {
    const id = req.user.sub;
    const user = await this.userService.findById(id);
    return this.userService.sanitizeUserData(user);
  }

  @ApiOperation({ summary: 'Update current user (own) profile' })
  @ApiOkResponse({ description: 'Profile update successfully' })
  @ApiConflictResponse({
    description: 'User provided invalid username and/or email',
  })
  @ApiInternalServerErrorResponse({
    description: 'The server is experiencing an error. ',
  })
  @Patch('me/update')
  async update(@Req() req, @Body() updateUserDto: UpdateUserDto) {
    const id = req.user.sub;
    console.log(updateUserDto);

    return this.userService.updateUser(id, updateUserDto);
  }

  @ApiOperation({ summary: 'Delete current user (own) account' })
  @ApiOkResponse({ description: 'Profile deleted successfully' })
  @ApiNotFoundResponse({ description: 'User not found' })
  @ApiInternalServerErrorResponse({
    description: 'The server is experiencing an error. ',
  })
  @Delete('me/delete')
  async delete(@Req() req) {
    const id = req.user.sub;
    return this.userService.deleteUser(id);
  }
}
