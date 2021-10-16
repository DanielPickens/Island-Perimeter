//Iterative approach 

const islandPerimeter = function(grid) {
    let p = 0;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == 0) continue;
                
                if(i - 1 < 0 || grid[i - 1][j] == 0) {
                    p++;
                }
                
                if(j - 1 < 0 || grid[i][j - 1] == 0) {
                    p++;
                }

                if(i + 1 > grid.length - 1 || grid[i + 1][j] == 0) {
                    p++;
                }

                if(j + 1 > grid[i].length - 1 || grid[i][j + 1] == 0) {
                    p++;
                }
            }
            
        }
        return p;
    }


/*
Runtime: 164 ms, faster than 89.04% of JavaScript online submissions for Island Perimeter.
Memory Usage: 48 MB, less than 75.24% of JavaScript online submissions for Island Perimeter.
*/
