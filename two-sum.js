let twoSum = function(nums, target) {
    let map = new Map();
    let result = [];

    nums.forEach((element, index) => {
        if (map.has(element)) result = [ map.get(element), index];
        map.set(target-element, index);
    });

    return result;
};

// https://leetcode.com/problems/two-sum/