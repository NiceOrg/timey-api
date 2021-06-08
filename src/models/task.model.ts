import {Tag} from './tag.model'
import {TaskStatus} from './task-status.enum'

export class Task {
  id: number
  name: string
  started: TaskStatus
  seconds: number
  tags: Tag[]
  estimation: number

  constructor(id = -1, name = '', seconds = 0, started = TaskStatus.stopped, tags = [] as Tag[], estimation = 0) {
    this.id = id
    this.name = name
    this.seconds = seconds
    this.started = started
    this.tags = tags
    this.estimation = estimation
  }
}
