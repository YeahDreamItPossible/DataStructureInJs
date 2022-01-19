// 无重复字符的最长子串
// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

// 思路:
// 滑动窗口
const lengthOfLongestSubstring = s => {
  if (s.length <= 1) {
    return s.length
  }

  let len = s.length
  let map = {}
  let max = 1
  let rightIndex = -1
  for (let i = 0; i < len; i++) {
    if (i !== 0) {
      delete map[s[i - 1]]
    }

    while (rightIndex + 1 < len && !map[s[rightIndex + 1]]) {
      map[s[rightIndex + 1]] = true
      rightIndex++
    }

    max = Math.max(max, rightIndex - i + 1)
  }

  return max
}