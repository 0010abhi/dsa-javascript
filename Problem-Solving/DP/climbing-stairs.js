/**
 * Problem - You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */
// Brute Force Solution - O(2^n) time complexity
function climbStairs(n) {
    if((n<=1)) {
        return 1;
    }

    return climbStairs(n-1) + climbStairs(n-2);
}

console.log(climbStairs(3)); // 3 - 1,1,1 | 1,2 | 2,1
console.log(climbStairs(4)); // 5 - 1,1,1,1 | 1,1,2 | 1,2,1 | 2,1,1 | 2,2

// Memoization Solution - O(n) time complexity - Top Down Approach
function climbStairsMemo(n, memo = {}) {
    if((n<=1)) {
        return 1;
    }

    if(memo[n]) {
        return memo[n];
    }

    memo[n] = climbStairsMemo(n-1, memo) + climbStairsMemo(n-2, memo);
    return memo[n];
}

console.log(climbStairsMemo(3)); // 3 - 1,1,1 | 1,2 | 2,1
console.log(climbStairsMemo(4)); // 5 - 1,1,1,1 | 1,1,2 | 1,2,1 | 2,1,1 | 2,2

// Memoization Solution - O(n) time complexity - Top Down Approach using Map
function climbStairsMemoMap(n, memo = new Map()) {
    if((n<=1)) {
        return 1;
    }

    if(memo.has(n)) {
        return memo.get(n);
    }

    const result = climbStairsMemoMap(n-1, memo) + climbStairsMemoMap(n-2, memo);
    memo.set(n, result);
    return result;
}

console.log(climbStairsMemoMap(3)); // 3 - 1,1,1 | 1,2 | 2,1
console.log(climbStairsMemoMap(4)); // 5 - 1,1,1,1 | 1,1,2 | 1,2,1 | 2,1,1 | 2,2

// Tabulation Solution - O(n) time complexity - Bottom Up Approach
function climbStairsTab(n) {
    const dp = new Array(n+1).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    for(let i=2; i<=n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n];
}

console.log(climbStairsTab(3)); // 3 - 1,1,1 | 1,2 | 2,1
console.log(climbStairsTab(4)); // 5 - 1,1,1,1 | 1,1,2 | 1,2,1 | 2,1,1 | 2,2