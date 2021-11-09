var threeSum = function(nums) {
    nums.sort((a,b) => a-b);
    let set = new Set(), res = [];
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i])
        if (nums[i] == nums[i-1]) continue; // avoid duplicate triplets
        let m = new Map();
        for (let j = i+1; j < nums.length; j++) {
            let sum = nums[i] + nums[j];
            if (m.has(-sum)) {
                set.add(`${nums[i]}#${-sum}#${nums[j]}`);
            }
            m.set(nums[j], j);
        }
    }

    for (let key of set) {
        res.push(key.split("#"));
    }
    return res;
};

console.log(threeSum([-1,0,1,2,-1,-4]));