var searchInsert = function(nums, target) {
    return binary_search(nums, target)
};

var binary_search = function(nums, target, low = 0, high = nums.length - 1) {
   if (low > high) return low;

    let pivot = Math.round((low + high) / 2);

    if (nums[pivot] == target) return pivot;
    else if (nums[pivot] < target) return binary_search(nums, target, pivot + 1, high);
    else return binary_search(nums, target, low, pivot - 1);
};

// https://leetcode.com/problems/search-insert-position/