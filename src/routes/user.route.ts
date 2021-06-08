import { UserController } from '../controllers/user.controller'
import { Documentation } from '../documentation/documentation'
import { environment } from '../environments'

const userUrl = environment.apiUrl + '/users'
export =[
  {
    method: 'POST',
    url: userUrl,
    handler: UserController.add,
    schema: Documentation.addUserSchema
  },
  {
    method: 'POST',
    url: userUrl + '/authenticate',
    handler: UserController.authenticate,
    schema: Documentation.authenticateUserSchema
  },
  {
    method: 'PUT',
    url: userUrl + '/:id',
    handler: UserController.update,
    schema: Documentation.updateUserSchema
  }
]

