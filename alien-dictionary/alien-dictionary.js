/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    const adjList = new Map();
    const indegree = new Map();
    for(const w of words) {
        for(const c of w) {
            adjList.set(c, []);
            indegree.set(c, 0);
        }
    }
    
    for(let i = 0; i < words.length-1; i++) {
        const word1 = words[i];
        const word2 = words[i+1];
        const minLen = Math.min(word1.length, word2.length);
        for(let j = 0; j < minLen; j++) {
            let c1 = word1[j], c2 = word2[j];
            if(c1 !== c2) {
                adjList.get(c1).push(c2);
                indegree.set(c2, indegree.get(c2)+1);
                break;
            }
            if(j===minLen-1 && word1.length > word2.length) return '';
        }
    } 
    const queue = [];
    for(const [c, ins] of indegree) {
        if(ins === 0) queue.push(c);    
    }
    let res = '';
    while(queue.length) {
        const c = queue.shift();
        res += c;
        adjList.get(c).forEach((n)=> {
            indegree.set(n, indegree.get(n)-1);
            if(indegree.get(n) === 0) {
                queue.push(n);
            }
        });
    }
    if(res.length === adjList.size) return res;
    return '';
};