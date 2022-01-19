# [最长回文字符串](https://leetcode-cn.com/problems/longest-palindromic-substring/)

## 暴力破解
```js
const equal = (s, begin, end) => {
  let flag = true
  while (begin < end && flag) {
    if (s[begin] === s[end]) {
      begin += 1
      end -= 1
    } else {
      flag = false
    }
  }

  return flag && s[begin] === s[end]
}

const longestPalindrome = s => {
  if (s.length <= 1) {
    return s
  }

  let max = 1
  let str = s[0]

  let len = s.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (equal(s, i, j)) {
        if (j + 1 - i > max) {
          max = j + 1 - i
          str = s.slice(i, j + 1)
        }
      }
    }
  }

  return str
}
```


## 动态规划
```js
// 状态转移方式
```