// 循环链表
import Node from './node'

class CircularLinkedList {
  constructor () {
    this.head = null
    this.count = 0
  }

  // add a node at the beginning of the list
  insertFirst (value) {
  }

  // add a node at the end of the list
  insertLast (value) {
  }

  // add a node at a specific position
  insertAt (position, value) {
  }

  // remove the head node
  removeFirst () {
  }

  // remove the last node in the list
  removeLast () {
  }

  // remove a node at a specific position
  removeAt (position) {
  }

  // find the one in a specific position
  findAt (position) {
  }

  // traverse 遍历
  // traverses the list from beginning to end
  forEach (cb) {
    if (!cb || typeof cb !== 'function') {
      throw new Error('InvalidArgsError: ' + 'the type of cb is invalid in forEach function')
    }
  }

  // converts the linked list into an array
  toArray () {
    let array = []
    this.forEach((node) => array.push(node.getValue()))
    return array
  }

  // returns the head node
  head () {
    return this.head
  }

  // return the nodes size in the list
  size () {
    return this.size
  }

  // checks if the list is empty
  isEmpty () {
    return this.head === null
  }

  // clears the list
  clear () {
    this.head = null
    this.size = 0
  }
}
