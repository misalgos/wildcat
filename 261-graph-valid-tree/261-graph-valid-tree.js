/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */

class UnionFind {
  constructor(size) {
    this.graph = new Array(size).fill(0).map((_,i)=> i);
    this.rank = new Array(size).fill(1);
  }
  find(x) {
    let root = x;
    while(root !== this.graph[root]) root = this.graph[root];
    while(root !== x) {
      let next = this.graph[x];
      this.graph[x] = root;
      x = next;
    }
    return root;
  }
  union(x,y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if(rootX !== rootY) {
      if(this.rank[rootX] < this.rank[rootY]) {
        this.graph[rootX] = rootY;
      } else if(this.rank[rootX] > this.rank[rootY]) {
        this.graph[rootY] = rootX;
      } else {
        this.graph[rootY] = rootX;
        this.rank[rootX]++;
      }
      return true;
    } else {
      return false;
    }
  }
}

var validTree = function(n, edges) {
  if(edges.length !== n-1) return false;
  if(!edges.length) return true;
  const uf = new UnionFind(n);
  for(const [a,b] of edges) {
    if(!uf.union(a,b)) return false;
  }
  return true;
};