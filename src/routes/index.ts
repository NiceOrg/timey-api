import { RouteOptions } from 'fastify'
import fp from 'fastify-plugin'
import { userRoutes } from './user.route'

export const routes = fp(async (server) => {
  for (const route of userRoutes) {
    server.route(route as RouteOptions)
  }
})
