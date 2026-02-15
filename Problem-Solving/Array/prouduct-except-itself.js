// My Solution
var productExceptSelf = function (nums) {
    let productArr = Array(nums.length).fill(1);
    let product = 1;
    let zeroIndex = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            product *= nums[i];
        } else {
            zeroIndex.push(i);
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (zeroIndex.length > 0) {
            if (zeroIndex.length === 1) {
                if (zeroIndex.indexOf(i) > -1) {
                    productArr[i] = product;
                } else {
                    productArr[i] = 0;
                }
            } else {
                productArr[i] = 0;
            }
        } else {
            productArr[i] = Math.floor(product / nums[i]);
        }
    }

    return productArr;

};


// optimised for O(1) space
var productExceptSelf = function (nums) {
    const n = nums.length;
    const productArr = Array(n).fill(1);

    // Step 1: Prefix products
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        productArr[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // Step 2: Suffix products
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        productArr[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return productArr;
};

/**
 * Dry Run
 * Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Input: nums = [-1,1,0,-3,0, 3]
Output: [0,0,0,0,0,0]

Input: nums = [1, 2, 0, 4]
Output: [0,0,8,0]
 */
