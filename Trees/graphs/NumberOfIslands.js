// Given a 2D grid grid where '1' represents land and '0' represents water, count and return the number of islands.

// An island is formed by connecting adjacent lands horizontally or vertically and is surrounded by water. You may assume water is surrounding the grid (i.e., all the edges are water).

class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if(grid===null || grid.length===0) return 0

        let numberofislands = 0;
        function dfs(grid, i, j){
            if(i<0 || i>=grid.length|| j<0|| j>=grid[0].length || grid[i][j] === '0')return;

            grid[i][j] = '0';

            dfs(grid, i-1, j)
            dfs(grid, i+1, j)
            dfs(grid, i, j-1)
            dfs(grid, i, j+1)
        }

        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[0].length;j++){
                if(grid[i][j]==='1'){
                    numberofislands++;
                    dfs(grid, i, j)
                }
            }
        }
        
        return numberofislands;
    }
}

//Approach:
/*
1. grid[0][0] is '1', so this is part of an island.

2. Increment island_count to 1.

3. Perform DFS to mark all connected 1s as 0.*/