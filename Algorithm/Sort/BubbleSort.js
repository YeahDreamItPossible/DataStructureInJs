// 冒泡排序
// 平均时间复杂度o(n^2)
// 最好情况o(n)
// 最坏情况o(n^2)
// 空间复杂度o(1)
// 稳定
const bubbleSort = arr => {
  if (
    !Array.isArray(arr) ||
    (Array.isArray(arr) && arr.length === 1)
  ) {
    return arr
  }

  let len = arr.length
  let temp = -1
  for (let i = 0; i < len - 1; i++) {
    for (let j = 1; j < len - i; j++) {
      if (arr[j - 1] > arr[j]) {
        temp = arr[j - 1]
        arr[j - 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

module.exports = {
  bubbleSort
}