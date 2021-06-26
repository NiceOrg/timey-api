export class Tag {
  id: number
  name: string
  color: string

  constructor (id = -1, name = '', color = '#ccc') {
    this.id = id
    this.name = name
    this.color = color
  }
}
