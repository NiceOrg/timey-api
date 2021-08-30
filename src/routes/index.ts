import { RouteOptions } from 'fastify'
import fp from 'fastify-plugin'
import { userRoutes } from './user.route'
import { feedbackRoutes } from './feedback.route'

export const routes = fp(async (server) => {
  for (const route of [...userRoutes, ...feedbackRoutes]) {
    server.route(route as RouteOptions)
  }
})
