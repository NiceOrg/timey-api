import mongoose from 'mongoose'
import { Feedback, IFeedback } from '../models/feedback.model'

export const FeedbackService = {
  async add (feedback: IFeedback): Promise<IFeedback> {
    const savedFeedback = new Feedback({ _id: new mongoose.mongo.ObjectId(), feedback: feedback.feedback })
    return savedFeedback.save()
  },
}
