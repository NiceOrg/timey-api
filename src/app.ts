import fastify from 'fastify'
import fastifyCors from 'fastify-cors'
import fastifySwagger from 'fastify-swagger'
import mongoose from 'mongoose'
import {options} from '../swagger'
import {environment} from './environments'
import {routes} from './routes'

const server = fastify({logger: true})
void server.register(fastifyCors, {})
void server.register(fastifySwagger, options)
void server.register(routes)

const start = async () => {
  server.listen(environment.port, '0.0.0.0')
    .then(() => server.swagger())
    .catch((error: Error) => {
      server.log.error(error.message)
      throw new Error('Server error')
    })
}

mongoose.connect(environment.dbUri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('connected to DB')
  })
  .catch((error: Error) => {
    console.error(error.message)
    throw new Error('database error')
  })

void start()
