// 基数排序
// 平均时间复杂度o(n^2)
// 最好情况o(n^2)
// 最坏情况o(n^2)
// 空间复杂度o(1)
// 不稳定

const foreach = (arr, iterator) => {
  arr.forEach((item, index) => iterator(item, index))
}

const findMValue = arr => {
  let min = arr[0]
  let max = arr[0]
  
  foreach(arr, item => {
    if (item > max) max = item
    if (item < min) min = item
  })

  return [min, max]
}

const countSort = arr => {
  if (
    !Array.isArray(arr) ||
    (Array.isArray(arr) && arr.length === 1)
  ) {
    return arr
  }

  
  let len = arr.length
  let [min, max] = findMValue(arr)
  
  const maxlength = max
  let result = []
  let bucket = new Array(maxlength).fill(0)
  
  foreach(arr, (item) => {
    if (bucket[item]) {
      bucket[item] += 1
    } else {
      bucket[item] = 1
    }
  })

  foreach(bucket, (item, index) => {
    while (bucket[index] > 0) {
      result.push(index)
      bucket[index] -= 1
    }
  })

  
  return result
}

module.exports = {
  countSort
}