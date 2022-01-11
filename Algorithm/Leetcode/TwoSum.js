// 两数之和

const twoSum = (nums, target) => {
  const valueToIndex = {}
  let len = nums.length
  let result = []
  let num
  for (let i = 0; i < len; i++) {
      num = nums[i]
      if ((target - num) in valueToIndex) {
          result = [valueToIndex[target - num], i]
          break
      } else {
          valueToIndex[num] = i
      }
  }
  return result
}