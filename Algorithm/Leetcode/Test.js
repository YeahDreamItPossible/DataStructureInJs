const initArr = len => {
  let arr = new Array(len)
  let sub = new Array(len)

  for (let i = 0; i < len; i++) {
    sub[i] = false
    arr[i] = ''
  }

  for (let i = 0; i < len; i++) {
    arr[i] = [ ...sub ]
  }

  return arr
}

const longestPalindrome = function (s) {
  if (s.length <= 1) {
    return s;
  }

  let maxlength = 1;
  let str = s[0];

  let len = s.length;
  let dp = initArr(len)

  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (s[i] !== s[j]) {
        dp[j][i] = false;
      } else {
        if (i - j >= 3) {
          dp[j][i] = dp[j + 1][i - 1];
        } else {
          dp[j][i] = true;
        }
      }

      while (dp[j][i] && i + 1 - j > maxlength) {
        maxlength = i + 1 - j;
        str = s.slice(j, i + 1);
      }
    }
  }

  console.log(maxlength)
  console.log(str)
  // console.log(dp)

  return str;
};

// const str = "aacabdkacaa"
const str = "cbabc"
longestPalindrome(str)
