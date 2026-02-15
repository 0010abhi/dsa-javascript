
characterReplacement(s, k) {
    // Your code goes here
    let maxLen = 0;
    for (let i = 0; i < s.length; i++) {
        let j = i + 1; let count = 0;

        while (j < s.length) {
            if (s[i] === s[j]) {
                j++;
            } else {
                count++;
                j++;
            }
            if (count === 2) {
                break;
            }
        }

        maxLen = Math.max(maxLen, j - i);
    }
    return maxLen;
}

//s: ABAB,    k: 2

// s: AABABBA,    k: 1 
// Here we can replace the one 'A' in the middle with 'B' and get a longest repeating substring of 'BBBB'. So the answer is 4.
// where this approach fails so apply sliding window approach

function characterReplacement(s, k) {
    let maxLen = 0;
    let left = 0; let right = 0; let maxCount = 0;
    const countMap = new Map();

    while (right < s.length) {
        const char = s[right];
        countMap.set(char, (countMap.get(char) || 0) + 1);
        maxCount = Math.max(maxCount, countMap.get(char));

        if (right - left + 1 - maxCount > k) {
            const leftChar = s[left];
            countMap.set(leftChar, countMap.get(leftChar) - 1);
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
        right++;
    }

    return maxLen;
}

console.log(characterReplacement("ABAB", 2)); // 4
console.log(characterReplacement("AABABBA", 1)); // 4
