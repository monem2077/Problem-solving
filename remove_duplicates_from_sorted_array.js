var removeDuplicates = function(nums) {
    let tmp = nums[0]
    for (let i = 0 ; i < nums.length ; i++) {
        if (i != 0 ) {
           if (tmp == nums[i]){
               nums[i] = '_'
           } else {
               tmp = nums[i];
           }

        }
    }

    let i = 1;
    let j = 1;


    while( j < nums.length) {
        if (nums[j] == '_'){
            j++;
        } 
        else if (nums[i] == "_"){
            nums[i] = nums[j];
            nums[j] = '_'
            j++;
            i++;
        } else {
            j++;
            i++;
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

// https://leetcode.com/problems/remove-duplicates-from-sorted-array/