// 中心扩散法
const longestPalindrome = function (s) {
  if (s.length <= 1) {
    return s
  }

  let maxlength = 1
  let str = s[0]

  let len = s.length

  let left, right, flag = false
  for (let i = 1; i < len; i++) {
    left = right = i
    while (left >= 0 && s[left] === s[i]) {
      flag = true
      left--
    }

    while (right < len && s[right] === s[i]) {
      flag = true
      right++
    }

    console.log(i, left, right, s[left], s[right])
    while (
      left >= 0 &&
      right < len &&
      left !== right &&
      s[left] === s[right]
    ) {
      flag = true
      left--
      right++
    }

    if (flag) {
      right--
      left++
    }

    if (right - left + 1 > maxlength) {
      maxlength = right - left + 1
      str = s.slice(left, right + 1)
      console.log(left, right, i, str)
    }
  }

  console.log(str)

  return str
};

// const str = "aacabdkacaa"
// const str = "cbabc"
const str = "cbbd"
longestPalindrome(str)
