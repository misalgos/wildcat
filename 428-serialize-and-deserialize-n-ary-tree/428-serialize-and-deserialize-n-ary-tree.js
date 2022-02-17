/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Codec {
  	constructor() {
        
    }
    
    /** 
     * @param {Node|null} root
     * @return {string}
     */
    // Encodes a tree to a single string.
    serialize(root) {
        if(!root) return [];
        const data = [];
        const queue = [root, null];
        while(queue.length) {
            const node = queue.shift();
            if(node === null) {
                data.push(node);
                continue;
            }
            data.push(Number(node.val));
            node.children.forEach((child)=> {
                queue.push(child);
            });
            queue.push(null);
        }   
        return data;
    };
	
    /** 
     * @param {string} data 
     * @return {Node|null}
     */
    // Decodes your encoded data to tree.
    deserialize(data) {
        if(!data.length) return null;
        const root = new Node(Number(data[0]), []);
        const queue = [root];
        let parent = null;
        for(let i = 1; i < data.length; i++) {
            if(data[i] === null) {
                parent = queue.shift();
                if(parent === null) break;
                continue;
            }
            const node = new Node(data[i], []);
            queue.push(node);
            parent.children.push(node);
  
        }
        return root;
    };
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));