const BinarySearchTree = require('./index.js')

const binarySearchTree = new BinarySearchTree()

binarySearchTree.insert(8)
binarySearchTree.insert(4)
binarySearchTree.insert(12)
binarySearchTree.insert(2)
binarySearchTree.insert(6)
binarySearchTree.insert(10)
binarySearchTree.insert(14)
binarySearchTree.insert(1)
binarySearchTree.insert(3)
binarySearchTree.insert(5)
binarySearchTree.insert(7)
binarySearchTree.insert(9)
binarySearchTree.insert(11)
binarySearchTree.insert(13)
binarySearchTree.insert(15)

//         8
//    4        12
//  2   6   10   14
// 1 3 5 7 9 11 13  15

// 先序遍历
const resultInPreOrder = [8, 4, 2, 1, 3, 6, 5, 7, 12, 10, 9, 11, 14, 13, 15]

// 中序遍历
const resultInInOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// 后序遍历
const resultInPostOrder = [1, 3, 2, 5, 7, 6, 4, 9, 11, 10, 13, 15, 14, 12, 8]

// 层序遍历
const resultInLevelOrder = [8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15]

const isSame = (a, b) => {
  if (a.length !== b.length) {
    return false
  }

  let same = true
  a.forEach((item, index) => {
    if (item !== b[index]) {
      same = false
    }
  })
  return same
}

console.log('递归遍历')
console.log('先序遍历: ', isSame(binarySearchTree.preOrder(), resultInPreOrder))
console.log('中序遍历: ', isSame(binarySearchTree.inOrder(), resultInInOrder))
console.log('后序遍历: ', isSame(binarySearchTree.postOrder(), resultInPostOrder))

console.log('Stack辅助遍历')
console.log('先序遍历: ', isSame(binarySearchTree.preOrderByStack(), resultInPreOrder))
// console.log('中序遍历: ', isSame(binarySearchTree.inOrderByStack(), resultInPreOrder))
console.log('层序遍历: ', isSame(binarySearchTree.levelOrderByStack(), resultInLevelOrder))
console.log('层序遍历: ', isSame(binarySearchTree.levelOrderByQueue(), resultInLevelOrder))