var rotate = function(nums, k) {
   k %= nums.length; // keep k in bound of the array.
   reverse(nums, 0, nums.length - 1)
   reverse(nums, 0, k - 1)
   reverse(nums, k, nums.length - 1)
   return nums;
};

const reverse = function(nums, from, to) {
    let i = from;
    let j = to;

    while (i < j) {
        let tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
        j--;
        i++;
    }

    return nums;
}

// https://leetcode.com/problems/rotate-array/