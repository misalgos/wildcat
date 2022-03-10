/**
 * @param {string} homepage
 */
class BrowserHistory {
    constructor(homepage) {
        this.stack = [homepage]
        this.index = 0
    }
    visit(url) {
        this.stack = this.stack.slice(0,this.index+1)
        this.stack.push(url);
        this.index++
    }
    back(steps) {
        if(steps > this.index){
            this.index=0
            return this.stack[this.index];
        }
        this.index -= steps
        return this.stack[this.index];
    }
    forward(steps) {
        if(steps > this.stack.length-1-this.index){
            this.index = this.stack.length-1
            return this.stack[this.stack.length-1]
        }
        this.index += steps
        return this.stack[this.index]
    }
}

/** 
 * @param {string} url
 * @return {void}
 */


/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */