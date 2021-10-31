var addBinary = function(a, b) {
    aLength = a.length - 1;
    bLength = b.length-1;
    if (aLength > bLength) {
        for (let i = 0; i < (aLength - bLength); i++) {
            b = 0 + b   
        }
    } else if (a.length < b.length) {
        for (let i = 0; i < (bLength - aLength); i++) {
            a = 0 + a   
        }
    }

    let i = a.length - 1;
    let j = b.length - 1;
    let result = '';
    let carry = 0;

    while( i >= 0 && j >= 0) {
        if (parseInt(a[i]) + parseInt(b[j]) == 2) {
            if (carry == 0 ) {
                result = 0 + result
                carry = 1
            } else {
                result = 1 + result
            }
        } else if (parseInt(a[i]) + parseInt(b[j]) == 1) {
            if (carry == 0 ) {
                result = 1 + result
            } else {
                result = 0 + result
            }
        } else if (parseInt(a[i]) + parseInt(b[j]) == 0) {
            if (carry == 0 ) {
                result = 0 + result
            } else {
                result = 1 + result
                carry = 0
            }
        }

        i--;
        j--;
    }


    if (carry != 0) {
        result = 1 + result;
    }

    return result;
};


// https://leetcode.com/problems/add-binary/