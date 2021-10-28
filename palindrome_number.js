let isPalindrome = function(x) {
   x = x.toString();
   let i = 0;
   let j = x.length - 1;
   let result = true;

   while ( i < j) {
       if (x[i] != x[j]) {
           result = false;
           break;
       } 
       i++;
       j--;
   }

   return result;
};

// https://leetcode.com/problems/palindrome-number/