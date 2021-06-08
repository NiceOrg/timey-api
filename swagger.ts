import {environment} from './src/environments'

export const options = {
  routePrefix: environment.apiUrl + '/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Timey API',
      description: 'Timey REST API with Node.js, MongoDB, Fastify and Swagger',
      version: '1.0.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    host: 'cloud.mongodb',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
}
