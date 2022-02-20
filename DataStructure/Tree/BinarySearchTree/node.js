class Node {
  constructor (value) {
    this.setValue(value)
    this.setLeft(null)
    this.setRight(null)
  }

  setValue (value) {
    this.value = value
    return this
  }

  getValue () {
    return this.value
  }

  setLeft (left = null) {
    if (left && !(left instanceof Node)) {
      throw new Error('expect the left is the instance of Node but not')
    }
    this.left = left || null
    return this
  }

  getLeft () {
    return this.left
  }

  hasLeft () {
    return this.left instanceof Node
  }

  setRight (right) {
    if (right && !(right instanceof Node)) {
      throw new Error('expect the right is the instance of Node but not')
    }
    this.right = right || null
    return this
  }

  getRight () {
    return this.right
  }

  hasRight () {
    return this.right instanceof Node
  }

  compare (a) {
    if (!a instanceof Node) {
      throw new Error('expect the compared node is the instance of Node but not')
    }
    if (this.value > a.value) {
      return 1
    }
    else if (this.value < a.value) {
      return -1
    } else {
      return 0
    }
  }
}

module.exports = Node