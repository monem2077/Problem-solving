var lengthOfLongestSubstring = function(s) {
    let i = 0;
    let map = new Map();
    let ans = 0
    for (let j = 0; j < s.length; j++) {
        if (map.get(s[j]) != undefined) {
            i = Math.max(i, map.get(s[j]));
            map.delete(s[j])
        } 

        ans = Math.max(ans, j - i + 1);
        map.set(s[j], j + 1)

    }

    return ans;
};

// https://leetcode.com/problems/longest-substring-without-repeating-characters/.