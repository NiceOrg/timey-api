import {IUser, User} from '../models/users/user.model'

export const UserAdapter = {
  adapt(user: IUser) {
    const userMini = new User({_id: user._id, tasks: user.tasks, tags: user.tags, parameters: user.parameters})
    return userMini
  }
}
