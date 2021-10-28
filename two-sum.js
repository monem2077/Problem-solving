let twoSum = function(nums, target) {
    let map = new Map();

    nums.forEach((element, index) => {
        if (map.has(element)) return [ map.get(element), index];
        map.set(target-element, index);
    });

    return [];
};

// https://leetcode.com/problems/two-sum/