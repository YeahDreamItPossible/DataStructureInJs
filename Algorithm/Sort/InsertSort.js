// 插入排序
const insertSort = arr => {
  if (
    !Array.isArray(arr) ||
    (Array.isArray(arr) && arr.length === 1)
  ) {
    return arr
  }

  let len = arr.length
  let current = -1
  let prevIndex = -1
  for (let i = 1; i < len; i++) {
    current = arr[i]
    prevIndex = i - 1
    while (prevIndex >= 0 && current < arr[prevIndex]) {
      arr[prevIndex + 1] = arr[prevIndex]
      prevIndex--
    }
    arr[prevIndex + 1] = current
  }
  return arr
}

module.exports = {
  insertSort
}