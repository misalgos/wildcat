/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
  const adjList = {};
  let center;
  for(const [u,v] of edges) {
    if(!adjList[v]) adjList[v] = [];
    if(!adjList[u]) adjList[u] = [];
    adjList[u].push(v);
    adjList[v].push(u);
  }
  let max = 0;
  for(const node in adjList) {
    if(adjList[node].length > max) {
      max = node.length; 
      center = node;
    }
  }
  return center;
};