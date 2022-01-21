const initArr = (m, n, obstacleGrid) => {
  let arr = []
  
  for (let i = 0; i < m; i++) {
      arr[i] = []
      for (let j = 0; j < n; j++) {
          if (i === m - 1) {
              if (obstacleGrid[i][j] === 1) {
                arr[i][j] = 0
                for (let k = 0; k < j; k++) {
                    arr[i][k] = 0
                }
              } else {
                arr[i][j] = 1
              }
          }
          else if (j === n - 1) {
              if (obstacleGrid[i][j] === 1) {
                arr[i][j] = 0
                for (let k = 0; k < i; k++) {
                    arr[k][j] = 0
                }
              } else {
                arr[i][j] = 1
              }
          }
          else {
              arr[i][j] = 0
          }
      }
  }

  return arr
}


var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length
  let n = obstacleGrid[0].length

  let dp = initArr(m, n)

  let i = m - 2
  let j = n - 2

  while (i >= 0) {
      j = n - 2
      while (j >= 0) {
          if(obstacleGrid[i][j] === 1) {
              dp[i][j] = 0
          } else {
              dp[i][j] = dp[i][j + 1] + dp[i + 1][j]
          }
          j--
      }
      i--
  }

  return dp[0][0]
}

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))


