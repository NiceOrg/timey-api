import { compare, genSaltSync, hashSync } from 'bcrypt'
import mongoose from 'mongoose'
import { UserAdapter } from '../adapters/user-adapter'
import { Parameters } from '../models/parameters.model'
import { IUser, User } from '../models/users/user.model'

export const UserService = {
  async add (user: IUser): Promise<IUser> {
    const userList = await User.find()
    if (user.email === '') {
      throw new Error('Veuillez entrer votre adresse mail.')
    }
    if (user.password === '') {
      throw new Error('Veuillez entrer un mot de passe.')
    }
    if (user.repeatPassword === '') {
      throw new Error('Veuillez confirmer votre mot de passe.')
    }
    if (user.password !== user.repeatPassword) {
      throw new Error('Les mots de passes ne correspondent pas.')
    }
    if (userList.some((u: IUser) => user.email === u.email)) {
      throw new Error('L\'email existe déjà.')
    }
    const savedUser = new User({ _id: new mongoose.mongo.ObjectId(), email: user.email.toLowerCase(), password: this.hashPassword(user.password), tasks: user.tasks, tags: user.tags, parameters: new Parameters({ timeSlot: user.parameters.timeSlot, language: user.parameters.language }) })
    void savedUser.save()
    return UserAdapter.adapt(savedUser)
  },

  async validateAuthentication (user: IUser): Promise<IUser> {
    const matchUser = await User.find({ email: user.email.toLowerCase() })
    if (matchUser.length !== 1) {
      throw new Error('L\'email n\'existe pas.')
    }
    const matchPassword = await compare(user.password, matchUser[0].password)
    if (!matchPassword) {
      throw new Error('L\'adresse mail et le mot de passe ne correspondent pas.')
    }
    return matchUser[0]
  },

  async update (user: IUser): Promise<IUser | null> {
    return User.findByIdAndUpdate(user._id, { tags: user.tags, tasks: user.tasks, parameters: user.parameters }, { new: true })
  },

  // TODO : make method async
  hashPassword (password: string): string {
    const saltRounds = 10
    const salt = genSaltSync(saltRounds)
    const hash = hashSync(password, salt)
    return hash
  },

}
