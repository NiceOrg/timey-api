import { FastifyReply } from 'fastify'
import { User } from '../models/users/user.model'
import { UserService } from '../services/user.service'

interface FastifyRequest {
  body: string
  params: {
    id: string
  }
}

export const UserController = {
  add: async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    const user = new User(JSON.parse(request.body))
    UserService.add(user)
      .then(userReturned => {
        return reply.type('application/json').code(200).send({ user: userReturned })
      })
      .catch(error => {
        return reply.type('application/json').code(401).send({ errorMessage: error.message })
      })
  },

  authenticate: async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    const userSent = new User(JSON.parse(request.body))
    UserService.validateAuthentication(userSent)
      .then(user => {
        return reply.type('application/json').code(200).send({ user })
      })
      .catch(error => {
        return reply.type('application/json').code(401).send({ errorMessage: error.message })
      })
  },

  update: async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    const userUpdate = new User(JSON.parse(request.body))
    userUpdate._id = (request.params).id
    UserService.update(userUpdate)
      .then(userReturned => {
        return reply.type('application/json').code(200).send({ user: userReturned })
      })
      .catch(error => {
        return reply.type('application/json').code(401).send({ errorMessage: error.message })
      })
  },
}
