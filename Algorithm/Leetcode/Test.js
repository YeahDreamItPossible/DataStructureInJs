const initArr = (m, n) => {
  let arr = []
  
  for (let i = 0; i < m; i++) {
      arr[i] = []
      for (let j = 0; j < n; j++) {
          if (
              i === m - 1 ||
              j === n -1
          ) {
              arr[i][j] = 1
          }
          else {
              arr[i][j] = 0
          }
      }
  }

  return arr
}


var uniquePaths = function(m, n) {
  if (m === 1 || n === 1) {
      return 1
  }

  let dp = initArr(m, n)

  let i = m - 2
  
  while (i >= 0) {
    let j = n - 2
    while (j >= 0) {
      dp[i][j] = dp[i + 1][j] + dp[i][j + 1]
      j--
    }
    i--
  }

  console.log(dp)
  return dp[0][0]
}

console.log(uniquePaths(3, 7))


