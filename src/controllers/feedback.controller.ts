import { Feedback } from '../models/feedback.model'
import { FeedbackService } from '../services/feedback.service'

interface FastifyRequest {
  body: string;
  params: {
    id: string;
  };
}

export const FeedbackController = {
  add: async (request: FastifyRequest): Promise<void> => {
    const feedback = new Feedback(JSON.parse(request.body))
    FeedbackService.add(feedback)
  },
}
