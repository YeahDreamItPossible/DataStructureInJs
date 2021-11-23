// 双向链表
import Node from './node'

class DoublyLinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.size = 0
  }

  // add a node at the beginning of the list
  insertFirst (value) {
    const node = new Node(value)

    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      this.head.setPrev(node)
      node.setNext(this.head)
      this.head = node
    }

    this.size += 1
    return node
  }

  // add a node at the end of the list
  insertLast (value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      node.setPrev(this.tail)
      this.tail.setNext(node)
      this.tail = node
    }

    this.size += 1
    return node
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

    if (position === this.size) {
      return this.insertLast(value)
    }

    let current = this.head
    let currentIndex = 1
    while (currentIndex < position) {
      currentIndex += 1
      current = current.getNext()
    }

    const node = new Node(value)
    node.setNext(current.getNext())
    node.setPrev(current)
    node.getPrev().setNext(node)
    node.getNext().setPrev(node)
    this.size += 1
    return node
  }

  // remove the head one
  removeFirst () {
    if (this.isEmpty()) {
      return null
    }

    const removedNode = this.head
    if (removedNode.hasNext()) {
      this.head = removedNode.getNext()
      this.head.setPrev(null)
    } else {
      this.head = null
      this.tail = null
    }
    this.size -= 1
    return removedNode
  }

  // remove the tail node
  removeLast () {
    if (this.isEmpty()) {
      return null
    }
    const removedNode = this.tail
    if (removedNode.hasNext()) {
      this.tail = removedNode.getPrev()
      this.tail.setNext(null)
    } else {
      this.head = null
      this.tail = null
    }

    this.size -= 1
    return removedNode
  }

  // remove a node in a specific position
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

    if (position === this.size - 1) {
      return this.removeLast()
    }

    let current = this.head.getNext()
    let currentIndex = 1
    while (currentIndex < position) {
      currentIndex += 1
      current = current.getNext()
    }

    return this.remove(node)
  }

  // remove a node from the list by its referenc
  remove (node) {
    if (!node) {
      return null
    }
    if (node && !(node instanceof Node)) {
      throw new Error('expect the node is the instance of Node but not')
    }

    if (!node.hasPrev()) {
      return this.removeFirst()
    }

    if (!node.hasNext()) {
      return this.removeLast()
    }

    node.getPrev().setNext(node.getNext())
    node.getNext().setPrev(node.getPrev())
    this.size -= 1
    return node.setPrev(null).setNext(null)
  }

  // traverses the list from the begin to end
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

  // converts the doubly linked list into a array
  toArray () {
    let array = []
  }

  // returns the head node
  head () {
    return this.head
  }

  // returns the tail node
  tail () {
    return this.tail
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
    this.tail = null
    this.size = 0
  }
}