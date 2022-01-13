// 希尔排序
// 缩小增量排序
// 是插入排序的一种更高效的改进版本
// 平均时间复杂度o(nlog(n))
// 最好情况o(nlog(n))
// 最坏情况o(n^2)
// 空间复杂度o(log(n))
// 稳定

const shellSort = arr => {
  if (
    !Array.isArray(arr) ||
    (Array.isArray(arr) && arr.length === 1)
  ) {
    return arr
  }

  let len = arr.length
  let grap = Math.floor(len / 2)

  let preIndex = -1
  let current = -1
  while (grap >= 1) {
    for (let i = grap; i < len; i++) {
      current = arr[i]
      preIndex = i - grap
      while (preIndex >= 0 && arr[preIndex] > current) {
        arr[preIndex + grap] = arr[preIndex]
        preIndex -= grap
      }
      arr[preIndex + grap] = current
    }

    grap = Math.floor(grap / 2)
  }

  return arr
}

module.exports = {
  shellSort
}