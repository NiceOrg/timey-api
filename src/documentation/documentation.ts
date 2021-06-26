export const Documentation = {
  addUserSchema: {
    description: 'add a new user to database',
    tags: ['user'],
    summary: 'add new user',
    params: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          description: 'user email',
        },
        password: {
          type: 'string',
          description: 'user password',
        },
        repeatPassword: {
          type: 'string',
          description: 'user password repeated on account creation',
        },
        tasks: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                description: 'task id',
              },
              name: {
                type: 'string',
                description: 'task name',
              },
              seconds: {
                type: 'integer',
                description: 'task seconds',
              },
            },
          },
          description: 'user tasks',
        },
        tags: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                description: 'tag id',
              },
              name: {
                type: 'string',
                description: 'tag name',
              },
              color: {
                type: 'string',
                description: 'tag color in hex',
              },
            },
          },
          description: 'user tags',
        },
      },
    },
  },
  authenticateUserSchema: {
    description: 'return user if authentication succeeds',
    tags: ['user'],
    summary: 'authenticate user',
    params: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          description: 'user email',
        },
        password: {
          type: 'string',
          description: 'user password',
        },
      },
    },
  },
  updateUserSchema: {
    description: 'update user',
    tags: ['user'],
    summary: 'update user',
    params: {
      type: 'object',
      properties: {
        _id: {
          type: 'string',
          description: 'user id',
        },
        tasks: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                description: 'task id',
              },
              name: {
                type: 'string',
                description: 'task name',
              },
              seconds: {
                type: 'integer',
                description: 'task seconds',
              },
            },
          },
          description: 'user tasks',
        },
        tags: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                description: 'tag id',
              },
              name: {
                type: 'string',
                description: 'tag name',
              },
              color: {
                type: 'string',
                description: 'tag color in hex',
              },
            },
          },
          description: 'user tags',
        },
      },
    },
  },
}
