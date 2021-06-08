import {Environment} from '../models/environment.model'
import {devEnv} from './environment.dev'

let env = new Environment({})

if (process.platform === 'win32') {
  env = devEnv
}

export const environment = env
