var reverseString = function(s) {
    return reverse(s)
};

const reverse = function(s, low = 0, high = s.length - 1) {

    if (low >= high) return s;
    let tmp = s[low];
    s[low] = s[high];
    s[high] = tmp;
    low++;
    high--;
    return reverse(s, low ,high);
}

reverseString(["h","e","l","l","o"]);

// https://leetcode.com/problems/reverse-string/.