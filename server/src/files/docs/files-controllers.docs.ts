import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { applyCustomDecorators } from 'src/lib/applyCustomDecorators';

export const ApiProfilePicUpdateEndpoint = () => {
  return applyCustomDecorators([
    ApiOperation({ summary: 'Update user profile picture' }),
    ApiResponse({
      status: 201,
      description: 'User profile picture updated successfully',
    }),
    ApiResponse({
      status: 401,
      description: 'Unauthorized',
    }),
    ApiResponse({
      status: 404,
      description: 'User with specified email does not exist',
    }),
    ApiResponse({
      status: 500,
      description:
        'Failed to update user profile image. Please try again later.',
    }),
    ApiParam({ name: 'file', type: 'string', format: 'binary' }),
  ]);
};
