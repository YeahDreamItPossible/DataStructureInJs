const { bubbleSort } = require('./BubbleSort')
const { selectionSort } = require('./SelectionSort')
const { insertSort } = require('./InsertSort')
const { shellSort } = require('./ShellSort')
const { quickSort } = require('./QuickSort')
const { mergeSort } = require('./MergeSort')
const { countSort } = require('./CountSort')

const getRandom = max => Math.round(Math.random() * max)

const initArray = (length = 10, max = 100) => {
  return new Array(length).fill(0).map(_ => getRandom(max))
}

const isAscending = arr => {
  let flag = true
  let len = arr.length
  for (let i = 0; i < len; i++) {
    if (arr[i + 1] < arr[i]) {
      flag = false
      break
    }
  }
  return flag
}

const sorter = (arr, sort) => sort(arr)

const arr = initArray()
console.log('before: ', arr)
// const sortedArr = sorter(arr, bubbleSort)
// const sortedArr = sorter(arr, selectionSort)
// const sortedArr = sorter(arr, insertSort)
// const sortedArr = sorter(arr, quickSort)
// const sortedArr = sorter(arr, mergeSort)
// const sortedArr = sorter(arr, shellSort)
const sortedArr = sorter(arr, countSort)
console.log('after: ', sortedArr)
console.log('是否升序: ' + isAscending(sortedArr))