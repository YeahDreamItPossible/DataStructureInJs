// 中心扩散法
const longestPalindrome = function (s) {
  if (s.length <= 1) {
    return s;
  }

  let maxlength = 1;
  let str = s[0];

  let len = s.length;

  let left, right
  for (let i = 1; i < len; i++) {
    left = right = i
    while (left >= 0 && s[left] === s[i]) {
      left--
    }
    while (right < len && s[right] === s[i]) {
      right++
    }
    
    left -= 1
    right += 1

    while (left >= 0 && right < len && s[left] === s[right]) {
      left -= 1
      right += 1
    }

    if (right - left - 1 > maxlength) {
      maxlength = right - left - 1
      str = s.slice(left++, right--)
    }
  }

  console.log(maxlength)
  console.log(str)
  // console.log(dp)

  return str;
};

// const str = "aacabdkacaa"
// const str = "cbabc"
const str = "babad"
longestPalindrome(str)
