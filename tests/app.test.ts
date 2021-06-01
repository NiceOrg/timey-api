import {add} from '../src/app'
import {strictEqual as equal} from 'assert'

describe('test', () => {
  it('add', () => {
    equal(add(1, 1), 2)
  })
})
