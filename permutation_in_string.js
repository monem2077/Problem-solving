var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }
  
    // loopp thru s1 to get all the count of letters
    for(i = 0; i < s1.length; i++) {
        combos.set(s1[i], (combos.get(s1[i]) || 0) + 1)
    }
    
    // loop thru s2 until I find some matching letters and if the order breaks check length and restart
   
    let order = new Map()
    let cp = new Map(combos)
    let word = ''
    
    let startingIndex
    for (i = 0; i < s2.length; i++) {
        if(combos.get(s2[i])) {
            word += s2[i]
            if(startingIndex === undefined) startingIndex = i
            
            if(word.length === s1.length) return true
            
            combos.set(s2[i], combos.get(s2[i]) - 1)
            
           order.get(s2[i]) ? order.get(s2[i]).push(i) : order.set(s2[i], [i])
          
        } else if(combos.get(s2[i]) === 0) {
            let b = s2[i]
            let oldest = order.get(s2[i]).shift()
            let moved = i - oldest
            
            if(oldest < startingIndex) {
                word += s2[i]
                if(word.length === s1.length) return true
                
                order.get(s2[i]).push(i) 
            } else if (moved === 1) {
                combos = new Map(cp)
                combos.set(s2[i], combos.get(s2[i]) - 1)
                order.clear()
                order.set(s2[i], [i])
                word = ""
                word += s2[i]
                
            } else {
                startingIndex = oldest
                word = s2.slice(oldest + 1, i + 1)
                if(word.length === s1.length) return true
                order.get(s2[i]).push(i) 
            }
        } else {
            lowestIndex = undefined
            combos = new Map(cp)
            word = ""
            order.clear()
        }
    }
    return false
};

console.log(checkInclusion('hello', 'ooolleoooleh'));