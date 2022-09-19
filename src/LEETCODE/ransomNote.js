export function canConstruct(ransom, magazine) {
    
    const hash = {};

    for (let i = 0; i < magazine.length; i++) {
         const m = magazine[i];
        if (m in hash) {
            hash[m] = hash[m] + 1;
        } else {
            hash[m] = 1;
        }
    }

    for (let i = 0; i < ransom.length; i++) {
        const r = ransom[i];
 
        const currentCount = hash[r] === undefined ? 0 : hash[r];
        if (currentCount === 0) {
            return false;
        } 
        
        if (r in hash) {
            hash[r] = hash[r] - 1;
        }
    }
    
    return true;
}
