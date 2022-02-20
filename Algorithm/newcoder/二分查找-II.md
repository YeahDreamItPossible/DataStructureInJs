# [二分查找-II](https://www.nowcoder.com/practice/4f470d1d3b734f8aaf2afb014185b395?tpId=188&tqId=38588&rp=1&ru=/exam/oj&qru=/exam/oj&sourceUrl=%2Fexam%2Foj%3Ftab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D188%26page%3D1%26difficulty%3D3&difficulty=3&judgeStatus=undefined&tags=&title=)


二分查找

注意 索引问题 就好

```js
function search( nums ,  target ) {
  let index = -1
  
  let start = 0
  let end = nums.length - 1
  let mid = start
  
  let circle = true
  while (start < end && circle) {
    if (end - start === 1) {
      // 解决索引逼近问题
      if (nums[end] === target) {
        index = end
      }
      if (nums[start] === target) {
        index  = start
      }
      circle = false
    }
    
    mid = start + Math.ceil((end - start) / 2)
    
    if (nums[mid] === target) {
      index = mid
      circle = false
    } else {
      if (nums[mid] > target) {
        end = mid
      } else {
        start = mid
      }
    }
  }
  
  while (index > 0 && nums[index - 1] === target) {
    index -= 1
  }
  
  return index
}
```