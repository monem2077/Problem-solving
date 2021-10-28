let longestCommonPrefix = function(strs) {
    let result = '';
    strs = strs.sort();
    for(let i = 0; i < strs[0].length; i++) {
        if (strs[0][i] == strs[strs.length - 1][i]) result = result + strs[0][i];
        else break;
    }

    return result;
};

// https://leetcode.com/problems/longest-common-prefix/