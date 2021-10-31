var mySqrt = function(x) {
    let target = 0
    if (x == 1) return 1;
    if (x == 2) return 1;
    for (let i = 1; i <= Math.round(x/2); i++) {
        if (i * i == x) {
            target = i;
            break;
        }
        else if (i * i > x && i-1 * i-1 < x) {
            target = i-1;
            break;
        }
        
    }


    return target;

};

// https://leetcode.com/problems/sqrtx/