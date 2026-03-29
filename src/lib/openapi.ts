export const openApiSpec = {
  openapi: '3.0.3',
  info: {
    title: 'VitalAI API',
    version: '1.0.0',
    description: 'API documentation for VitalAI backend',
  },
  servers: [
    {
      url: '/api',
      description: 'Current environment',
    },
  ],
  components: {
    securitySchemes: {
      BearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      ApiResponse: {
        type: 'object',
        properties: {
          success: { type: 'boolean' },
          message: { type: 'string' },
        },
      },
    },
  },
  paths: {
    '/auth/register': {
      post: {
        tags: ['Auth'],
        summary: 'Register user',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['email', 'password', 'name'],
                properties: {
                  email: { type: 'string', format: 'email' },
                  password: { type: 'string', minLength: 6 },
                  name: { type: 'string' },
                },
              },
            },
          },
        },
        responses: {
          '201': { description: 'Created' },
          '400': { description: 'Validation error' },
        },
      },
    },
    '/auth/login': {
      post: {
        tags: ['Auth'],
        summary: 'Login user',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['email', 'password'],
                properties: {
                  email: { type: 'string', format: 'email' },
                  password: { type: 'string' },
                },
              },
            },
          },
        },
        responses: {
          '200': { description: 'OK' },
          '401': { description: 'Unauthorized' },
        },
      },
    },
    '/users/profile': {
      get: {
        tags: ['Users'],
        summary: 'Get profile',
        security: [{ BearerAuth: [] }],
        responses: {
          '200': { description: 'OK' },
          '401': { description: 'Unauthorized' },
        },
      },
      put: {
        tags: ['Users'],
        summary: 'Update profile',
        security: [{ BearerAuth: [] }],
        responses: {
          '200': { description: 'Updated' },
          '401': { description: 'Unauthorized' },
        },
      },
    },
    '/workouts': {
      get: {
        tags: ['Workouts'],
        summary: 'List workouts',
        security: [{ BearerAuth: [] }],
        responses: {
          '200': { description: 'OK' },
        },
      },
      post: {
        tags: ['Workouts'],
        summary: 'Create workout',
        security: [{ BearerAuth: [] }],
        responses: {
          '201': { description: 'Created' },
        },
      },
    },
    '/workouts/{id}': {
      get: {
        tags: ['Workouts'],
        summary: 'Get workout by id',
        security: [{ BearerAuth: [] }],
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'string' } },
        ],
        responses: {
          '200': { description: 'OK' },
          '404': { description: 'Not found' },
        },
      },
      put: {
        tags: ['Workouts'],
        summary: 'Update workout',
        security: [{ BearerAuth: [] }],
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'string' } },
        ],
        responses: {
          '200': { description: 'Updated' },
        },
      },
      delete: {
        tags: ['Workouts'],
        summary: 'Delete workout',
        security: [{ BearerAuth: [] }],
        parameters: [
          { name: 'id', in: 'path', required: true, schema: { type: 'string' } },
        ],
        responses: {
          '200': { description: 'Deleted' },
        },
      },
    },
    '/nutrition': {
      get: {
        tags: ['Nutrition'],
        summary: 'List nutrition logs',
        security: [{ BearerAuth: [] }],
        responses: { '200': { description: 'OK' } },
      },
      post: {
        tags: ['Nutrition'],
        summary: 'Create nutrition log',
        security: [{ BearerAuth: [] }],
        responses: { '201': { description: 'Created' } },
      },
    },
    '/progress': {
      get: {
        tags: ['Progress'],
        summary: 'List progress logs',
        security: [{ BearerAuth: [] }],
        responses: { '200': { description: 'OK' } },
      },
      post: {
        tags: ['Progress'],
        summary: 'Create progress log',
        security: [{ BearerAuth: [] }],
        responses: { '201': { description: 'Created' } },
      },
    },
    '/blog': {
      get: {
        tags: ['Blog'],
        summary: 'List posts',
        responses: { '200': { description: 'OK' } },
      },
      post: {
        tags: ['Blog'],
        summary: 'Create post',
        security: [{ BearerAuth: [] }],
        responses: { '201': { description: 'Created' } },
      },
    },
  },
};
