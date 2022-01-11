// 单向链表

import Node from './node'

class SinglyLinkedList {
  constructor () {
    this.head = null
    this.size = 0
  }

  // add a node at the beginning of the list
  insertFirst (value) {
    this.head = new Node(value, this.head)
    this.size += 1
    return this.head
  }

  // add a node at the end of the list
  insertLast (value) {
    if (this.isEmpty()) {
      return this.insertFirst(value)
    }

    let current = this.head
    while (current && current.hasNext()) {
      current = current.getNext()
    }

    current.setNext(new Node(value, null))
    this.size += 1
    return current.getNext()
  }

  // add a node at a specific position
  insertAt (position, value) {
    if (
      position < 0 ||
      position > this.size
    ) {
      throw new Error('IllegalIndexError: ' + 'index is out of bounds')
    }

    if (position === 0) {
      return this.insertFirst(value)
    }

    let current = this.head
    let currentIndex = 1
    while (currentIndex < position) {
      currentIndex += 1
      current = current.getNext()
    }

    current.setNext(new Node(value, null))
    this.size += 1
    return current.getNext()
  }

  // remove the head node
  removeFirst () {
    if (this.isEmpty()) {
      return null
    }
    const head = this.head
    this.head = head.getNext()
    head.setNext(null)
    this.size -= 1
    return head
  }

  // remove the last node in the list
  removeLast () {
    if (this.isEmpty()) {
      return null
    }

    let prev = null
    let current = this.head
    while (current && current.hasNext()) {
      prev = current
      current = current.getNext()
    }

    // the list only has one node
    if (prev === null) {
      return this.removeFirst()
    }

    prev.setNext(null)
    this.size -= 1
    return current
  }

  // remove a node at a specific position
  removeAt (position) {
    if (
      position < 0 ||
      position > this.size
    ) {
      return null
    }
    
    if (position === 0) {
      return this.removeFirst()
    }

    let current = this.head
    let currentIndex = 1
    while (currentIndex < position) {
      currentIndex += 1
      current = current.getNext()
    }

    const removedNode = current.getNext()
    current.setNext(removedNode.getNext())
    this.size -= 1
    return removedNode.setNext(null)
  }

  // find the one in a specific position
  findAt (position) {
    if (
      position < 0 ||
      position >= this.size
    ) {
      return null
    }

    let currentIndex = 0
    let current = this.head
    while (currentIndex < position) {
      currentIndex += 1
      current = current.getNext()
    }

    return current
  }

  // traverse 遍历
  // traverses the list from beginning to end
  forEach (cb) {
    if (!cb || typeof cb !== 'function') {
      throw new Error('InvalidArgsError: ' + 'the type of cb is invalid in forEach function')
    }

    let current = this.head
    let currentIndex = 0

    while (current) {
      cb(current, currentIndex)
      currentIndex += 1
      current = current.getNext()
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