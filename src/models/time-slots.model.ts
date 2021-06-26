export class TimeSlots {
  name = 'Plage horaire'
  isActive = false
  pause = [] as number[]
  resume = [] as number[]

  constructor (data: Partial<TimeSlots>) {
    Object.assign(this, data)
  }
}
