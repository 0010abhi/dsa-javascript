function maxSubarraySum(arr) {
    
    // Stores the result (maximum sum found so far)    
    let res = arr[0];
    
    // Maximum sum of subarray ending at current position
    let maxEnding = arr[0];

    for (let i = 1; i < arr.length; i++) {
        
        // Either extend the previous subarray or start 
        // new from current element
        maxEnding = Math.max(maxEnding + arr[i], arr[i]);
        
        // Update result if the new subarray sum is larger
        res = Math.max(res, maxEnding);

        console.log('>>>', i, maxEnding, res);
    }
    return res;
}

const arr = [2, 3, -8, 7, -1, 2, 3];
console.log(maxSubarraySum(arr));