var lengthOfLastWord = function(s) {
    s = s.split(" ");
    let count = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] != "") {
            count = s[i].length
            break
        } 
    }

    return count
};

 // https://leetcode.com/problems/length-of-last-word/