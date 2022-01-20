// 中心扩散法
const longestPalindrome = function (s) {
  if (s.length <= 1) {
    return s.length
  }

  let len = s.length
  let arm = 1
  let maxlength = 1
  let map = new Map()
  map.set(s[0], true)

  for (let i = 0; i < len; i++) {
    while (!map.has(s[i + arm]) && arm + i < len) {
      map.set(s[i + arm], true)
      maxlength = Math.max(maxlength, arm + 1)
      arm += 1
    }

    if (i + arm === len) {
      break
    }

    map.delete(s[i])
  }

  console.log(maxlength)

  return maxlength
};

// const str = "aacabdkacaa"
// const str = "cbabc"
const str = "abcabcbb"
longestPalindrome(str)
