import fp from 'fastify-plugin'
import userRoutes from './user.route'

const routeList = [...userRoutes]

export const routes = fp(async (server: any) => {
  for (const route of routeList) {
    server.route(route)
  }
})
