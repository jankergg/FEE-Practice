/**
CountWaystoDivide( n , k ) = CountWaystoDivide( n-k , k ) + CountWaystoDivide( n-1 , k-1 )
Explanation:
Divide CountWaystoDivide( n , k ) into two parts where

If first element is 1 then the rest form a total  of n-1 divide into k-1 so CountWaystoDivide( n-1 , k-1 )
If first element is greater than 1 then, we can subtract 1 from every element and get a valid partition of n-k into k parts, hence CountWaystoDivide( n-1 , k-1 ).
Mathematical Explanation of DP:

As each group must have at least one person, so, give each group one person, then we are left with n-k persons, which can we divided into 1,2,3..or k groups. Thus our dp will be: dp[n][k] = dp[n-k][1] + dp[n-k][2] + dp[n-k][3] + …. + dp[n-k][k].
At first look, the previous might give O(N3) vibes, but with a little manipulation we can optimize it:
dp[n][k] = dp[(n-1)-(k-1)][1] + dp[(n-1)-(k-1)][2] + … + dp[(n-1)-(k-1)][k-1] + dp[(n-1)-(k-1)][k]
From the recurrence, we can write:
dp[n][k] = dp[n-1][k-1] + dp[n-k][k]

============================================================
other solutions:
public static int nToKGroups(int n, int k) {
  if(n < k) {
   return 0;
  }
  int[][] dp = new int[k+1][n+1];
  for(int i = 1; i <= k; i++) {
   for(int j = i; j <= n; j++) {
                if(i==j) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = dp[i-1][j-1] + dp[i][j-i];
                }
   }
  }
  return dp[k][n];
 }
 */
function countWaystoDivide(n, k) {
  if (n < k) return 0; // When n is less than k, No way to divide
  // into groups
  let dp = Array(n + 1)
    .fill(0)
    .map(() => Array(k + 1).fill(0));

  for (let i = 1; i <= n; i++) dp[i][1] = 1; // exact one way to divide n to 1 group
  dp[0][0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 2; j <= k; j++) {
      if (i >= j) dp[i][j] = dp[i - j][j] + dp[i - 1][j - 1];
      else dp[i][j] = dp[i - 1][j - 1]; // i<j so dp[i-j][j] = 0;
    }
  }
  console.log("dp:", dp);
  return dp[n][k]; // returning number of ways to divide N in k groups
}

console.log(countWaystoDivide(7, 3));
