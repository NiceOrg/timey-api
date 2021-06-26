import { UserController } from '../controllers/user.controller'
import { Documentation } from '../documentation/documentation'
import { environment } from '../environments'

const userUrl = environment.apiUrl + '/users'
export const userRoutes = [
  {
    method: 'POST',
    url: userUrl,
    handler: UserController.add,
    schema: Documentation.addUserSchema,
  },
  {
    method: 'POST',
    url: userUrl + '/authenticate',
    handler: UserController.authenticate,
    schema: Documentation.authenticateUserSchema,
  },
  {
    method: 'PUT',
    url: userUrl + '/:id',
    handler: UserController.update,
    schema: Documentation.updateUserSchema,
  },
  {
    method: 'PUT',
    url: userUrl + '/changeEmail/:id',
    handler: UserController.updateEmail,
    schema: Documentation.updateUserSchema,
  },
  {
    method: 'PUT',
    url: userUrl + '/changePassword/:id',
    handler: UserController.updatePassword,
    schema: Documentation.updateUserSchema,
  },
  {
    method: 'DELETE',
    url: userUrl + '/deleteAccount/:id',
    handler: UserController.deleteAccount,
    schema: Documentation.updateUserSchema,
  },
]

