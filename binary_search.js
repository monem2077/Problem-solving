let binary_search = function (nums, target, low = 0, high = nums.length - 1) {
    if (low > high) return -1;

    let pivot = Math.round((low + high) / 2);

    if (nums[pivot] == target) return pivot;
    else if (nums[pivot] < target) return binary_search(nums, target, pivot + 1, high);
    else return binary_search(nums, target, low, pivot - 1);
}

console.log(binary_search([1,3,5,9,12], 0))