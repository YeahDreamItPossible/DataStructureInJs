// 选择排序
// 平均时间复杂度o(n^2)
// 最好情况o(n^2)
// 最坏情况o(n^2)
// 空间复杂度o(1)
// 不稳定
const selectionSort = arr => {
  if (
    !Array.isArray(arr) ||
    (Array.isArray(arr) && arr.length === 1)
  ) {
    return arr
  }

  let len = arr.length
  let minIndex = -1
  let temp = -1
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (i !== minIndex) {
      temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp
    }
  }

  return arr
}

module.exports = {
  selectionSort
}