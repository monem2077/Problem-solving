var merge = function(nums1, m, nums2, n) {
    if (m === 0) nums1 = nums2;
    else {
        let index = 0
        for (let i = m; i < nums1.length; i++){
            nums1[i] = nums2[index];
            index++;
        }
        
         let i = 0
    let j = m;
    while(j < nums1.length && i < m) {
        if (nums1[i] <= nums1[j]) i++;
        else {
            tmp = nums1[i];
            nums1[i] = nums1[j];
            nums1[j] = tmp;
            j++;
            i++;
        }
    }
    }

    return nums1;
};

// https://leetcode.com/problems/merge-sorted-array/