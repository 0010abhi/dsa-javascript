// https://leetcode.com/problems/k-radius-subarray-averages/description/

/**
 * Test Case Explanation
 * Input: nums = [7,4,3,9,1,8,5,2,6], k = 3
    Output: [-1,-1,-1,5,4,4,-1,-1,-1]
    Explanation:
    - avg[0], avg[1], and avg[2] are -1 because there are less than k elements before each index.
    - The sum of the subarray centered at index 3 with radius 3 is: 7 + 4 + 3 + 9 + 1 + 8 + 5 = 37.
    Using integer division, avg[3] = 37 / 7 = 5.
    - For the subarray centered at index 4, avg[4] = (4 + 3 + 9 + 1 + 8 + 5 + 2) / 7 = 4.
    - For the subarray centered at index 5, avg[5] = (3 + 9 + 1 + 8 + 5 + 2 + 6) / 7 = 4.
    - avg[6], avg[7], and avg[8] are -1 because there are less than k elements after each index.
    Example 2:

    Input: nums = [100000], k = 0
    Output: [100000]
    Explanation:
    - The sum of the subarray centered at index 0 with radius 0 is: 100000.
    avg[0] = 100000 / 1 = 100000.
    Example 3:

    Input: nums = [8], k = 100000
    Output: [-1]
    Explanation: 
    - avg[0] is -1 because there are less than k elements before and after index 0.
 */



// My Approach
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function (nums, k) {
    let output = [];
    let currSum = 0;
    let i = 0; leftPointer = 0;
    while (i < nums.length) {
        if (i - k >= 0 && i + k < nums.length) {
            let tempSum = 0;
            let avgSum = 0;
            currSum += nums[i];
            for (let j = i + 1; j <= i + k; j++) {
                tempSum += nums[j]
            }
            // console.log('>>>', currSum, tempSum);
            avgSum = Math.floor((currSum + tempSum) / (2 * k + 1))
            // console.log('>>>', avgSum);
            output.push(avgSum);
            currSum -= nums[leftPointer];
            leftPointer++;
        } else {
            output.push(-1);
            currSum += nums[i];
        }
        i++;
    }

    // console.log('>>> output', output);
    return output;
};

// Optimised approach
var getAverages = function (nums, k) {
    const n = nums.length;
    const windowSize = 2 * k + 1;
    const result = new Array(n).fill(-1);

    // If the window size is larger than the array, return all -1s
    if (windowSize > n) return result;

    let windowSum = 0;

    // 1. Calculate the sum of the first window
    for (let i = 0; i < windowSize; i++) {
        windowSum += nums[i];
    }

    // 2. The first average sits at index 'k'
    result[k] = Math.floor(windowSum / windowSize);

    // 3. Slide the window across the rest of the array
    for (let i = windowSize; i < n; i++) {
        // Subtract the element that is no longer in the window (nums[i - windowSize])
        // Add the new element (nums[i])
        windowSum = windowSum - nums[i - windowSize] + nums[i];

        // The center of the current window is always i - k
        result[i - k] = Math.floor(windowSum / windowSize);
    }

    return result;
};
