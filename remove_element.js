var removeElement = function(nums, val) {
    nums.forEach((element, index) => {
        if (element == val) nums[index] = '_';
    });

    let j = 0;
    let i = 0;
    while(j < nums.length) {
        if (nums[j] == '_') j++;
        else if (nums[i] == '_') {
            nums[i] = nums[j];
            nums[j] = '_';
            i++;
            j++
        }
        else {
            i++;
            j++;
        }
    }

    return countArray(nums);

    
};


const countArray = function(nums) {
    let count = 0;
    for (let i = 0 ; i < nums.length ; i++) {
        if (nums[i] != '_') count++;
    }

    return count;
}

console.log(removeElement([3,2,2,3], 3))