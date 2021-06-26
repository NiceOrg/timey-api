import { compare, genSaltSync, hashSync } from 'bcrypt'
import mongoose from 'mongoose'
import { UserAdapter } from '../adapters/user-adapter'
import { Parameters } from '../models/parameters.model'
import { IUser, User } from '../models/users/user.model'
import { UserUpdate } from '../models/users/user-update.model'

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

  async updateEmail (user: UserUpdate): Promise<IUser | null> {
    const userList = await User.find()

    if (user.actualEmail === user.newEmail) {
      throw new Error('Merci de rentrer une nouvelle adresse mail.')
    }
    if (userList.some((u: IUser) => user.newEmail === u.email)) {
      throw new Error('L\'email existe déjà.')
    }

    const userToUpdate = userList.find((u: IUser) => user._id === u._id)
    if (!userToUpdate) {
      throw new Error('Une erreur interne est survenue.')
    }

    const matchPassword = await compare(user.actualPassword, userToUpdate.password)

    if (!matchPassword) {
      throw new Error('Le mot de passe ne correspond pas.')
    }

    return User.findByIdAndUpdate(user._id, { email: user.newEmail }, { new: true })
  },

  async updatePassword (user: UserUpdate): Promise<IUser | null> {
    const userList = await User.find()

    if (user.actualPassword === '') {
      throw new Error('Veuillez entrer votre mot de passe.')
    }
    if (user.newPassword === '') {
      throw new Error('Veuillez entrer un nouveau mot de passe.')
    }
    if (user.repeatPassword === '') {
      throw new Error('Veuillez confirmer votre mot de passe.')
    }
    if (user.newPassword !== user.repeatPassword) {
      throw new Error('Les mots de passes ne correspondent pas.')
    }

    const userToUpdate = userList.find((u: IUser) => user._id === u._id)

    if (!userToUpdate) {
      throw new Error('Une erreur interne est survenue.')
    }
    const matchPassword = await compare(user.actualPassword, userToUpdate.password)
    if (!matchPassword) {
      throw new Error('Votre mot de passe actuel est incorrect.')
    }

    return User.findByIdAndUpdate(user._id, { password: this.hashPassword(user.newPassword) }, { new: true })
  },

  async deleteAccount (user: UserUpdate): Promise<IUser | null> {
    const userList = await User.find()

    const userToDelete = userList.find((u: IUser) => user._id === u._id)

    if (!userToDelete) {
      throw new Error('Une erreur interne est survenue.')
    }

    const matchPassword = await compare(user.actualPassword, userToDelete.password)

    if (!matchPassword) {
      throw new Error('Votre mot de passe actuel est incorrect.')
    }

    return User.findByIdAndDelete(user._id)
  },

}
