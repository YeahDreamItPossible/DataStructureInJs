// 归并排序
// 分治思想
// 平均时间复杂度o(nlog(n))
// 最好情况o(nlog(n))
// 最坏情况o(nlog(n))
// 空间复杂度o(1)
// 稳定

const merge = (left, right) => {
  let result = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while (left.length) {
    result.push(left.shift())
  }

  while (right.length) {
    result.push(right.shift())
  }

  return result
}

const mergeSort = arr => {
  if (
    !Array.isArray(arr) ||
    (Array.isArray(arr) && arr.length === 1)
  ) {
    return arr
  }

  let middle = Math.floor(arr.length / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

module.exports = {
  mergeSort
}