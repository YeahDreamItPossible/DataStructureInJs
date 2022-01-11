import { generateUID } from '../shared'

class Node {
  constructor (value, next) {
    this.uid = generateUID()
    this.setValue(value)
    this.setNext(next)
  }

  setValue (value = '') {
    this.value(value)
    return this
  }

  getValue () {
    return this.value
  }

  setNext (next = null) {
    if (next && !(next instanceof Node)) {
      throw new Error('expect the next is the instance of Node but not')
    }
    this.next = next
    return this
  }

  getNext () {
    return this.next
  }

  hasNext () {
    return this.next === null
  }

  compareTo (unknow) {
    if (unknow instanceof Node) {
      return this.compare(this, unknow)
    }
    return false
  }

  compare (arg0, arg1) {
    if (
      arg0 instanceof Node &&
      arg1 instanceof Node
    ) {
      return arg0.uid === arg1.uid
    }
    return false
  }
}

export default Node