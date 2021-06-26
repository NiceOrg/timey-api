import { model, Schema, Document } from 'mongoose'
import { Parameters } from '../parameters.model'
import { Tag } from '../tag.model'
import { Task } from '../task.model'

export interface IUser extends Document {
  _id: string;
  email: string;
  password: string;
  repeatPassword?: string;
  tasks: Task[];
  tags: Tag[];
  parameters: Parameters;
}

export const UserSchema = new Schema({
  _id: { type: String },
  email: { type: String },
  password: { type: String },
  repeatPassword: { type: String },
  tasks: [{ type: Schema.Types.Mixed }],
  tags: [{ type: Schema.Types.Mixed }],
  parameters: { type: Schema.Types.Mixed },
})

export const User = model<IUser>('User', UserSchema)
