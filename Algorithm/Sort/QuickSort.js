// 快速排序
// 平均时间复杂度o(nlog(n))
// 最好情况o(nlog(n))
// 最坏情况o(n^2)
// 空间复杂度o(log(n))
// 不稳定

const quickSort = arr => {
  if (
    !Array.isArray(arr) ||
    (Array.isArray(arr) && arr.length <= 1)
  ) {
    return arr
  }

  let left = []
  let right = []
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat([pivot], quickSort(right))
}

module.exports = {
  quickSort
}