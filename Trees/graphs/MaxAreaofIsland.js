// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

var maxAreaOfIsland = function(grid) {
    if(grid===null || grid.length === 0){
        return 0
    }
    function dfs(grid,i,j){
        if(i<0 || i>=grid.length || j<0||j>=grid[0].length || grid[i][j] === '0' )return 0 ;
        grid[i][j] = 0;
        let area = 1;
        area += dfs(grid, i + 1, j);
        area += dfs(grid, i - 1, j);
        area += dfs(grid, i, j - 1);
        area += dfs(grid, i, j + 1);
        return area;
    }
    let maxArea = 0
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]===1){
                let currentArea = dfs(grid, i, j);
                 maxArea = Math.max(maxArea, currentArea)
            }
            
        }
    }


    return maxArea;
};

var maxAreaOfIsland = function(grid) {
    if (grid === null || grid.length === 0) {
        return 0;
    }
    
    function dfs(grid, i, j) {
        // Base case: out of bounds or at a water cell (0)
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) return 0;

        // Mark the cell as visited by setting it to 0
        grid[i][j] = 0;

        // Start counting area with the current cell
        let area = 1;

        // Explore all four directions and accumulate the area
        area += dfs(grid, i + 1, j); // Down
        area += dfs(grid, i - 1, j); // Up
        area += dfs(grid, i, j - 1); // Left
        area += dfs(grid, i, j + 1); // Right

        return area; // Return the total area found
    }

    let maxArea = 0;

    // Loop through each cell in the grid
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            // Only start DFS if the cell is land (1)
            if (grid[i][j] === 1) {
                let currentArea = dfs(grid, i, j);
                maxArea = Math.max(maxArea, currentArea); // Update max area if needed
            }
        }
    }

    return maxArea; // Return the maximum area found
};

// Test the function with your grid
let grid = [
    [0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]
];

console.log(maxAreaOfIsland(grid)); // Should output 6

