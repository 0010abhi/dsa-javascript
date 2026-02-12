/**
 * @param {number[][]} grid
 * @return {number}
 * My Solution
 */
var equalPairs = function(grid) {
    let rowSet = new Map();
    let colArr = Array(grid.length).fill(new Set());
    
    for(let i = 0; i < grid.length; i++) {
        rowSet.set(i , JSON.stringify(grid[i]));
        for(let j = 0; j < grid.length; j++) {
            console.log(grid[i][j]);
            // colArr[j] = [...colArr[j], grid[i][j]];
            colArr[j] = [...colArr[j], grid[i][j]];
        }
    }
    console.log(colArr, rowSet);
    
    let count = 0
    for(let i = 0; i < colArr.length; i++) {
        let target = JSON.stringify(colArr[i])
        for (const value of rowSet.values()) {
            if (value === target) count++;
        }
    }
    return count;
};

// optmised - understand this
/**
 * Optimized Version vs. Your Solution Feature Your SolutionOptimized 
 

 * 
 * 
 * 
 * @param {*} grid 
 * @returns 
 */
var equalPairs = function(grid) {
    const n = grid.length;
    const rowMap = new Map();
    let count = 0;

    // Build frequency map of rows: O(N^2)
    for (let i = 0; i < n; i++) {
        const rowStr = grid[i].join(','); 
        rowMap.set(rowStr, (rowMap.get(rowStr) || 0) + 1);
    }

    // Extract columns and check Map: O(N^2)
    for (let j = 0; j < n; j++) {
        let colStr = "";
        for (let i = 0; i < n; i++) {
            colStr += (i === 0 ? "" : ",") + grid[i][j];
        }
        
        if (rowMap.has(colStr)) {
            count += rowMap.get(colStr);
        }
    }

    return count;
};

/**
 * Dry run
 * 
Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
Output: 1
Explanation: There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]

Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Output: 3
Explanation: There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]

 */