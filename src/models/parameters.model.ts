import {Languages} from './languages.enum'
import {TimeSlots} from './time-slots.model'

export class Parameters {
  timeSlot = new TimeSlots({})
  language = Languages.fr

  constructor(data: Partial<Parameters>) {
    Object.assign(this, data)
  }
}
