var plusOne = function(digits) {
  let carry = 0;

  if (digits[digits.length - 1] < 9) digits[digits.length - 1] += 1;
  else {
    digits[digits.length - 1] = 0
    carry = 1
    console.log(digits)
    for (let i = digits.length - 2; i >= 0; i--) {
        if (digits[i] < 9) {
            carry = 0
            digits[i] += 1
            break;
        } else {
            digits[i] = 0
        }
    }
  }

  if (carry > 0) digits.unshift(1)

  return digits;
};

// https://leetcode.com/problems/plus-one/