import { TimeSlots } from './time-slots.model'

export class Parameters {
  timeSlot = new TimeSlots({})

  constructor(data: Partial<Parameters>) {
    Object.assign(this, data)
  }
}
