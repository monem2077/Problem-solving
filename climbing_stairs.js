var climbStairs = function(n) {
    if (n < 3) return n;

    let first = 1
    let second = 2;

    for (i = 2; i < n; i++) {
        let current = first + second;
        first = second;
        second = current
    }

    return second;
};

// https://leetcode.com/problems/climbing-stairs/