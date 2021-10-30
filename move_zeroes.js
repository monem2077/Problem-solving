var moveZeroes = function(nums) {
    let i = 0;
    let j = 0;
    while(j < nums.length) {
        if (nums[j] == 0){
            j++;
        } 
        else if (nums[i] == 0) {
            nums[i] = nums[j];
            nums[j] = 0;
            i++;
            j++;
        } else {
            i++;
            j++;
        }
    }
    

    return nums;
};

console.log(moveZeroes([0]))