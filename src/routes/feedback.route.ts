import { FeedbackController } from '../controllers/feedback.controller'
import { environment } from '../environments'

const feedbackUrl = environment.apiUrl + '/feedback'
export const feedbackRoutes = [
  {
    method: 'POST',
    url: feedbackUrl + '/add',
    handler: FeedbackController.add,
  },
]

