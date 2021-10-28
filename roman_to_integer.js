let romanToInt = function(s) {
    let symbolsMap = new Map();
    let sum = 0;
    let i = 0;
    symbolsMap.set('I', 1);
    symbolsMap.set('V', 5);
    symbolsMap.set('X', 10);
    symbolsMap.set('L', 50);
    symbolsMap.set('C', 100);
    symbolsMap.set('D', 500);
    symbolsMap.set('M', 1000);

    while (i < s.length ) {
        let current = symbolsMap.get(s[i]);
        if ( i == s.length - 1){
            sum = sum + current
            i++;
        } 
        else {
            let next = symbolsMap.get(s[i+1]);
            if (current >= next) {
                sum = sum + current;
                i++;
            } else {
                sum = sum + (next - current);
                i = i + 2;
            }
        }  
    }

    return sum;
};

// https://leetcode.com/problems/roman-to-integer/