/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const DIRS = [[1,0], [0,1], [-1, 0], [0,-1]];
    let count = 0;
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[0].length; col++) {
            if(grid[row][col] === '1') {
                const queue  = [[row,col]];
                grid[row][col] = '0';
                count++;
                while(queue.length) {
                    const [r,c] = queue.shift();
                    for(const [y,x] of DIRS) {
                        const nr = r + y;
                        const nc = c + x;
                        if(nr >= 0 && nr < grid.length && nc >= 0 && nc < grid[0].length) {
                            if(grid[nr][nc] === '1') {
                                grid[nr][nc] = '0'
                                queue.push([nr, nc]);
                            }
                        }
                    }
                }
                
            }
        }
    }
    return count;
};