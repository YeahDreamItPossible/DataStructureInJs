//         1
//      2     3
//   4    5 6    7
//     8 9    0

const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      right: {
        value: 8
      }
    },
    right: {
      value: 5,
      left: {
        value: 9
      }
    }
  },
  right: {
    value: 3,
    left: {
      value: 6,
      right: {
        value: 0
      }
    },
    right: {
      value: 7
    }
  }
}

// 先序遍历
const resultInPreOrder = [1, 2, 4, 8, 5, 9, 3, 6, 0, 7]
// 中序遍历
const resultInInOrder = [4, 8, 2, 9, 5, 1, 6, 0, 3, 7]
// 后序遍历
const resultInPostOrder = [8, 4, 9, 5, 2, 0, 6, 7, 3, 1]
// 层序遍历
const resultInLevelOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const isEqual = (a, b) => {
  if (a.length != b.length) {
    return false
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      continue
    } else {
      return false
    }
  }
  return true
}

const preOrder = root => {
  let result = []
  _preOrder(root, result)
  console.log(result)
  return result
}

const _preOrder = (node, result) => {
  if (!node) {
    return
  }
  result.push(node.value)
  _preOrder(node.left, result)
  _preOrder(node.right, result)
}

const inOrder = root => {
  let result = []
  _inOrder(root, result)
  console.log(result)
  return result
}

const _inOrder = (node, result) => {
  if (!node) {
    return
  }
  _inOrder(node.left, result)
  result.push(node.value)
  _inOrder(node.right, result)
}

const postOrder = root => {
  let result = []
  _postOrder(root, result)
  console.log(result)
  return result
}

const _postOrder = (node, result) => {
  if (!node) {
    return
  }
  _postOrder(node.left, result)
  _postOrder(node.right, result)
  result.push(node.value)
}

const preOrderByStack = root => {
  let stack = []
  let node = root

  let result = []
  while (stack.length || node) {
    while (node) {
      stack.push(node)
      result.push(node.value)
      node = node.left
    }
    node = stack.pop()
    node = node.right || null
  }

  // let nodes = [root]

  // while (nodes.length) {
  //   node = nodes.pop()
  //   result.push(node.value)
  //   if (node.right) {
  //     nodes.push(node.right)
  //   }
  //   if (node.left) {
  //     nodes.push(node.left)
  //   }
  // }
  console.log(result)
  return result
}

const inOrderByStack = root => {
  let stack = []
  let node = root

  let result = []
  while (stack.length || node) {
    while (node) {
      stack.push(node)
      node = node.left
    }

    node = stack.pop()
    result.push(node.value)
    node = node.right
  }
  console.log(result)
  return result
}

const postOrderByStack = root => {
  let stack = [ root ]

  let result = []

  let node = null
  while (stack.length) {
    node = stack.pop()
    result.push(node)
    if (node.left) {
      stack.push(node.left)
    }
    if (node.right) {
      stack.push(node.right)
    }
  }
  result = result.reverse().map(item => item.value)
  console.log(result)
  return result
}

const levelOrder = root => {
  let stack = [root]

  let result = []
  let node = null
  while (stack.length) {
    let node = stack.shift()
    result.push(node.value)
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }

  console.log(result)
  return result
}

// const same = isEqual(resultInPreOrder, preOrder(tree))
// const same = isEqual(resultInInOrder, inOrder(tree))
// const same = isEqual(resultInPostOrder, postOrder(tree))
// const same = isEqual(resultInPreOrder, preOrderByStack(tree))
// const same = isEqual(resultInInOrder, inOrderByStack(tree))
// const same = isEqual(resultInPostOrder, postOrderByStack(tree))
const same = isEqual(resultInLevelOrder, levelOrder(tree))
console.log(same)