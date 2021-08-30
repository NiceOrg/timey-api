import { model, Schema, Document } from 'mongoose'

export interface IFeedback extends Document {
  _id: string;
  feedback: string;
}

export const FeedbackSchema = new Schema({
  _id: { type: String },
  feedback: { type: String },
})

export const Feedback = model<IFeedback>('Feedback', FeedbackSchema)
