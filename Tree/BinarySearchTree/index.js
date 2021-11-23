// 二叉搜索树
import Node from './node'

class BinarySearchTree {
  constructor () {
    this.root = null
    this.size = 0
  }

  // inserts a node into the three
  insert (key, value) {
    const node = new Node(key, value)

    if (this.root === null) {
      this.root = node
      this.size += 1
    } else {
      this._insert(this.root, node)
    }

    return node
  }

  // recursive insert 
  _insert (parent, child) {

  }

  remove (key) {}

  has (key) {
  }

  find (key) {}

  getSize () {
    return this.size
  }
}