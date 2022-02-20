// 二叉搜索树
const Node = require('./Node.js')

class BinarySearchTree {
  constructor () {
    this.root = null
    this.size = 0
  }

  // 存在
  has (value) {
    let currentNode = this.root
    let node = new Node(value)

    let exist = false

    if (!currentNode) {
      return exist
    }
    while (currentNode && !exist) {
      if (currentNode.compare(node) === 1) {
        currentNode = currentNode.left
      }
      else if (currentNode.compare(node) === -1) {
        currentNode = currentNode.right
      }
      else {
        exist = true
      }
    }
    return exist
  }

  // 插入Node
  insert (value) {
    const node = new Node(value)

    if (this.root === null) {
      this.root = node
      this.size += 1
    } else {
      this._insert(this.root, node)
    }

    return node
  }

  // 递归插入Node
  _insert (parent, child) {
    if (parent.compare(child) > 0) {
      if (parent.left) {
        this._insert(parent.left, child)
      } else {
        parent.left = child
        this.size += 1
      }
    }
    else {
      if (parent.right) {
        this._insert(parent.right, child)
      } else {
        parent.right = child
        this.size += 1
      }
    }
  }

  // 删除Node
  remove (value) {
    let currentNode = this.root
    let node = new Node(value)

    if (
      !currentNode ||
      (currentNode && currentNode.compare(node) === 0)
    ) {
      this.root = null
      this.size = 0
      return true
    }

    let parent = null
    let pos = ''

    while (currentNode) {
      if (currentNode.compare(node) === 1) {
        parent = currentNode
        pos = 'left'
        currentNode = currentNode.left
      }
      else if (currentNode.compare(node) === -1) {
        parent = currentNode
        pos = 'right'
        currentNode = currentNode.right
      } else {
        if (currentNode.left && currentNode.right) {

        }
        else if (currentNode.left) {
          parent[pos] = currentNode.left
        }
        else if (currentNode.right) {
          parent[pos] = currentNode.right
        }
        else {
          parent[pos] = null
        }
      }
    }
  }

  // 先序遍历(递归实现)
  preOrder () {
    let result = []
    this._preOreder(this.root, result)
    return result
  }

  _preOreder (node, result) {
    if (node) {
      result.push(node.value)
      if (node.left) this._preOreder(node.left, result)
      if (node.right) this._preOreder(node.right, result)
    }
  }

  // 中序遍历(递归实现)
  inOrder () {
    let result = []
    this._inOrder(this.root, result)
    return result
  }

  _inOrder (node, result) {
    if (node) {
      if (node.left) this._inOrder(node.left, result)
      result.push(node.value)
      if (node.right) this._inOrder(node.right, result)
    }
  }

  // 后序遍历
  postOrder () {
    let result = []
    this._postOrder(this.root, result)
    return result
  }

  _postOrder (node, result) {
    if (node) {
      if (node.left) this._postOrder(node.left, result)
      if (node.right) this._postOrder(node.right, result)
      result.push(node.value)
    }
  }

  // 层序遍历
  levelOrder () {
    let result = []

    return result
  }

  // 层序遍历
  levelOrderByStack () {
    let result = []
    if (!this.root) {
      return result
    }

    // 队列
    let nodes = [ this.root ]
    let currentNode = null
    while (nodes.length) {
      currentNode = nodes[0]
      result.push(currentNode.value)
      nodes = nodes.slice(1)
      if (currentNode.left) nodes.push(currentNode.left)
      if (currentNode.right) nodes.push(currentNode.right)
    }

    return result
  }

  // 先序遍历
  preOrderByStack () {
    let result = []
    if (!this.root) {
      return result
    }

    let nodes = [ this.root ]
    let currentNode = null

    while (nodes.length) {
      // 出栈
      currentNode = nodes[0]
      result.push(currentNode.value)
      nodes = nodes.slice(1)
      // 入栈
      if (currentNode.right) nodes.unshift(currentNode.right)
      if (currentNode.left) nodes.unshift(currentNode.left)
    }

    return result
  }

  // 中序遍历
  // TODO: 暂时没想好用Stack 或 Queue来实现 操作流程也没想好 OhMyGod
  inOrderByStack () {
    let result = []
    let nodes = []
    let currentNode = null

    if (this.root) {
      if (this.root.right) nodes.push(this.root.right)
      nodes.push(this.root)
      if (this.root.left) nodes.push(this.root.left)      
    }

    while (nodes.length) {
      currentNode = nodes[nodes.length - 1]
      result.push(currentNode.value)
      nodes = nodes.slice(1)
      if (currentNode.right) nodes.push(currentNode.right)
      nodes.push(currentNode)
      if (currentNode.left) nodes.push(currentNode.left)
    }

    console.log(result)

    // nodes.forEach(node => result.push(node.value))
    return result
  }

  getSize () {
    return this.size
  }
}

module.exports = BinarySearchTree