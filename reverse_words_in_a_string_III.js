var reverseWords = function(s) {
    s = s.split(' ').map(word => word.split('').reverse().join('')).join(' ')

    return s;
};

// https://leetcode.com/problems/reverse-words-in-a-string-iii/