/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0);
  for(const [course, prereq] of prerequisites) {
    inDegree[course]++;
  } 
  const stack = [];
  for(let i = 0; i < inDegree.length; i++) {
    if(inDegree[i] === 0) stack.push(i)
  }
  let count = 0; 
  while(stack.length) {
    const currentCourse = stack.pop();
    count++;
    for(const [course, prereq] of prerequisites) {
      if(currentCourse === prereq) {
        inDegree[course]--;
        if(inDegree[course] === 0) stack.push(course);
      }
    }
  }
  return count === numCourses;
}; 
