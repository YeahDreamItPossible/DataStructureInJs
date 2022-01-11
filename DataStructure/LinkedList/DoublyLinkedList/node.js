import { generateUID } from '../shared'

class Node {
  constructor (value, prev = null, next = null) {
    this.uid = generateUID()
    this.setValue(value)
    this.setPrev(prev)
    this.setNext(next)
  }

  setValue (value = '') {
    this.value = value
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
    return this.next instanceof Node
  }

  setPrev (prev = null) {
    if (prev && !(prev instanceof Node)) {
      throw new Error('expect the prev is the instance of Node but not')
    }
    this.prev = prev
    return this
  }
  
  getPrev () {
    return this.prev
  }
  
  hasPrev () {
    if (this.prev) {
      return this.prev instanceof Node
    }
    return false
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