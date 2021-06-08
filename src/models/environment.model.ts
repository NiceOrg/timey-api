export class Environment {
  production = true
  dbUri = 'mongodb+srv://root:root@cluster0.bymnq.mongodb.net/Timey'
  apiUrl = '/timey'
  port = '3000'

  constructor(data: Partial<Environment>) {
    Object.assign(this, data)
  }
}
