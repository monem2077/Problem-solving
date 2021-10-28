var isValid = function(s) {
    let stack = [];
    for (let ch of s) {
        if (ch == '(' || ch == '[' || ch == '{') {
            stack.push(ch)
            
        }
        else {
            let tmp = stack.pop()
            switch(ch) {
                case ')':
                    if (tmp != '(')
                        return false
                    break
                case ']':
                    if (tmp != '[')
                        return false
                    break
                case '}':
                    if (tmp != '{')
                        return false
                    break
                default:
                    return false
            }
        }
    }
    return stack.length == 0
};

// https://leetcode.com/problems/valid-parentheses/