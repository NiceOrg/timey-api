export class UserUpdate {
  _id = ''
  actualPassword = ''
  newPassword = ''
  repeatPassword = ''
  actualEmail = ''
  newEmail = ''

  constructor (data: Partial<UserUpdate>) {
    Object.assign(this, data)
  }
}
