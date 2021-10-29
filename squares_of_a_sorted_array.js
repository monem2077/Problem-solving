var sortedSquares = function(nums) {
    let i = 0;
    let j = nums.length - 1;
    const res = [];

    while (i <= j) {
        if (Math.abs(nums[j] > Math.abs(nums[i]))) {
            res.push(nums[j] * nums[j])
            j--;
        } else {
            res.push(nums[i] * nums[i])
            i++;
        }
    }

    return res.reverse();
};

// https://leetcode.com/problems/squares-of-a-sorted-array/