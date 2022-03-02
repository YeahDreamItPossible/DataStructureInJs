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
    let nodes = []
    this._preOreder(this.root, nodes)
    return nodes
  }

  _preOreder (node, nodes) {
    if (node) {
      nodes.push(node.value)
      if (node.left) this._preOreder(node.left, nodes)
      if (node.right) this._preOreder(node.right, nodes)
    }
  }

  // 中序遍历(递归实现)
  inOrder () {
    let nodes = []
    this._inOrder(this.root, nodes)
    return nodes
  }

  _inOrder (node, nodes) {
    if (node) {
      if (node.left) this._inOrder(node.left, nodes)
      nodes.push(node.value)
      if (node.right) this._inOrder(node.right, nodes)
    }
  }

  // 后序遍历(递归实现)
  postOrder () {
    let nodes = []
    this._postOrder(this.root, nodes)
    return nodes
  }

  _postOrder (node, nodes) {
    if (node) {
      if (node.left) this._postOrder(node.left, nodes)
      if (node.right) this._postOrder(node.right, nodes)
      nodes.push(node.value)
    }
  }

  // 层序遍历
  levelOrder () {
    let nodes = []

    return nodes
  }

  // 层序遍历(Stack)
  levelOrderByStack () {
    let nodes = []
    if (!this.root) {
      return nodes
    }

    let stack = []
    // 入栈
    stack.unshift(this.root)
    let level = []
    let currentNode = null
    while (stack.length) {
      level = stack.slice()
      nodes = nodes.concat(level.map(node => node.value))
      level = level.reverse()
      stack = []
      while (level.length) {
        // 出栈
        currentNode = level.shift()
        // 入栈
        if (currentNode.right) stack.unshift(currentNode.right)
        if (currentNode.left) stack.unshift(currentNode.left)
      }
    }

    return nodes
  }

  // 层序遍历(Queue)
  levelOrderByQueue () {
    let nodes = []
    if (!this.root) {
      return nodes
    }

    // 队列
    let queue = []
    // 入队
    queue.push(this.root)
    let level = []
    let currentNode = null
    while (queue.length) {
      level = queue.slice()
      queue = []
      while (level.length) {
        // 出队
        currentNode = level.shift()
        // 入队
        if (currentNode) nodes.push(currentNode.value)
        if (currentNode && currentNode.left) queue.push(currentNode.left)
        if (currentNode && currentNode.right) queue.push(currentNode.right)
      }
    }

    return nodes
  }

  // 先序遍历(Stack)
  preOrderByStack () {
    let nodes = []
    if (!this.root) {
      return nodes
    }

    let stack = [ this.root ]
    let currentNode = null

    while (stack.length) {
      // 出栈
      currentNode = stack.shift()
      nodes.push(currentNode.value)
      // 入栈
      if (currentNode.right) stack.unshift(currentNode.right)
      if (currentNode.left) stack.unshift(currentNode.left)
    }

    return nodes
  }

  // 中序遍历(Stack)
  inOrderByStack () {
    let nodes = []

    if (!this.root) {
      return nodes
    }

    let stack = []
    // 入栈
    if (this.root.right) stack.unshift(this.root.right)
    stack.unshift(this.root)
    if (this.root.left) stack.unshift(this.root.left)      

    let currentNode = null
    while (stack.length) {
      // 出栈
      currentNode = stack.shift()
      nodes.push(currentNode.value)
      // 入栈
      if (currentNode.right) stack.unshift(currentNode.right)
      stack.unshift(currentNode)
      if (currentNode.left) stack.unshift(currentNode.left)
    }

    console.log(nodes)
    return nodes
  }

  getSize () {
    return this.size
  }
}

module.exports = BinarySearchTree