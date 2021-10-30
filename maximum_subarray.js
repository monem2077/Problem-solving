var maxSubArray = function(nums) {
    let i = 0;
    let max_current = nums[0];
    let max_global = max_current;


    while (i < nums.length) {
        if (i > 0) {
            max_current = Math.max(nums[i], max_current + nums[i]);
        }
        if (max_current > max_global) max_global = max_current;
        i++;
    }

    return max_global;
};

//https://leetcode.com/problems/maximum-subarray/