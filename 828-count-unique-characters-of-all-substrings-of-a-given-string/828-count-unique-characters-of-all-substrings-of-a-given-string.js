/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function(s) {
    let currUniques = 0;
    let lastSeen = new Map();
    let contributions = new Map();
    let answer = 0;
    for (let x = 0; x < s.length; x++) {
        const char = s[x];
        const prevContributions = contributions.has(char) ? contributions.get(char) : 0;
        const newContributions = x + 1 - (lastSeen.has(char) ? lastSeen.get(char) + 1 : 0);
        
        currUniques = currUniques - prevContributions + newContributions;
        
        contributions.set(char, newContributions);
        lastSeen.set(char, x);
        
        answer += currUniques;
    }
    return answer;
};