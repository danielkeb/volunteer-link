import { ApiCreatedResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';

const applyDecorators =
  (decorators) =>
  (target: any, key: string, descriptor: PropertyDescriptor) => {
    decorators.forEach((decorator) => decorator(target, key, descriptor));
  };

export const ApiCreateLocationEndpoint = () => {
  return applyDecorators([
    ApiOperation({ summary: 'Create a new location' }),
    ApiCreatedResponse({ description: 'Location created successfully.' }),
    ApiResponse({
      status: 409,
      description: 'Conflict - Location already exists.',
    }),
    ApiResponse({
      status: 500,
      description: 'Internal Server Error - Failed to create location.',
    }),
  ]);
};

export const ApiGetLocationEndpoint = () => {
  return applyDecorators([
    ApiOperation({ summary: 'Get all locations' }),
    ApiResponse({
      status: 200,
      description: 'Locations found successfully.',
    }),
    ApiResponse({
      status: 500,
      description:
        'Internal Server Error - Failed to retrieve locations. Please try again later.',
    }),
  ]);
};

export const ApiFindOneByIdEndpoint = () => {
  return applyDecorators([
    ApiOperation({ summary: 'Get a location by ID' }),
    ApiResponse({
      status: 200,
      description: 'Location found successfully.',
    }),
    ApiResponse({
      status: 404,
      description:
        'Not Found - Location with the specified ID cannot be found.',
    }),
    ApiResponse({
      status: 500,
      description:
        'Internal Server Error - Failed to retrieve locations. Please try again later.',
    }),
  ]);
};

export const ApiFindOneByNameEndpoint = () => {
  return applyDecorators([
    ApiOperation({ summary: 'Get a location by name' }),
    ApiResponse({
      status: 200,
      description: 'Location found successfully.',
    }),
    ApiResponse({
      status: 404,
      description:
        'Not Found - Location with the specified name cannot be found.',
    }),
    ApiResponse({
      status: 500,
      description:
        'Internal Server Error - Failed to retrieve locations. Please try again later.',
    }),
  ]);
};

export const ApiFindOneByShortCodeEndpoint = () => {
  return applyDecorators([
    ApiOperation({ summary: 'Get a location by short code' }),
    ApiResponse({
      status: 200,
      description: 'Location found successfully.',
    }),
    ApiResponse({
      status: 404,
      description:
        'Not Found - Location with the specified short code cannot be found.',
    }),
    ApiResponse({
      status: 500,
      description:
        'Internal Server Error - Failed to retrieve locations. Please try again later.',
    }),
  ]);
};

export const ApiUpdateLocationEndpoint = () => {
  return applyDecorators([
    ApiOperation({ summary: 'Update a location' }),
    ApiResponse({
      status: 200,
      description: 'Location updated successfully.',
    }),
    ApiResponse({
      status: 404,
      description:
        'Not Found - Location with the specified ID cannot be found.',
    }),
    ApiResponse({
      status: 500,
      description:
        'Internal Server Error - Failed to update location. Please try again later.',
    }),
  ]);
};

export const ApiDeleteLocationEndpoint = () => {
  return applyDecorators([
    ApiOperation({ summary: 'Delete a location' }),
    ApiResponse({ status: 200, description: 'Location successfully deleted.' }),
    ApiResponse({
      status: 404,
      description:
        'Not Found - Location with the specified ID cannot be found.',
    }),
    ApiResponse({
      status: 500,
      description:
        'Internal Server Error - Failed to delete location. Please try again later.',
    }),
  ]);
};
