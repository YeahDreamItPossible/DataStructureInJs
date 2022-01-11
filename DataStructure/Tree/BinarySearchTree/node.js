class Node {
  constructor (key, value) {
    this.setKey(key)
    this.setValue(value)
    this.setLeft(null)
    this.setRight(null)
    this.setParent(null)
  }

  setKey (key = '') {
    this.key = key
    return this
  }

  getKey () {
    return this.key
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
      throw new Error('expect the left is the instance of Node but noe')
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
      throw new Error('expect the right is the instance of Node but noe')
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

  setParent (parent) {
    if (parent && !(parent instanceof Node)) {
      throw new Error('expect the right is the instance of Node but noe')
    }
    this.parent = parent || null
    return this
  }

  getParent () {
    return this.parent
  }

  hasParent () {
    return this.parent instanceof Node
  }

  isRoot () {
    return !!this.parent
  }

  isLeaf () {
    return !this.hasLeft && !this.hasRight()
  }
}

export default Node