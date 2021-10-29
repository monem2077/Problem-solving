isBadVersion = function(version) {
    if (version >= 4) return true;
    else return false;
};

let first_bad_version = function(n, low = 1, high = n) {
    if (high - low <= 1) {
        return isBadVersion(low) ? low : high;
    } 
    let pivot = Math.round((low + high) / 2);


    if (isBadVersion(pivot)) return  first_bad_version(n, low, pivot);
    else return first_bad_version(n, pivot, high);
}

// https://leetcode.com/problems/first-bad-version/