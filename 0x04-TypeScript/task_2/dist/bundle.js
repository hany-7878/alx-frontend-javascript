/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

// -----------------------------
// Advanced types - Part 1
// -----------------------------
// 3️⃣ Director Class implementing DirectorInterface
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
// 4️⃣ Teacher Class implementing TeacherInterface
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
// 5️⃣ Function createEmployee
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
// 6️⃣ Example test logs
console.log(createEmployee(200).constructor.name); // Teacher
console.log(createEmployee(1000).constructor.name); // Director
console.log(createEmployee('$500').constructor.name); // Director
// -----------------------------
// Task 6: Creating functions specific to employees
// -----------------------------
// Type predicate to check if an employee is a Director
function isDirector(employee) {
    return employee instanceof Director;
}
// Function to execute work based on employee type
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
// Example usage
console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks
// Function to teach a class
function teachClass(todayClass) {
    return "Teaching ".concat(todayClass);
}
// Example usage
console.log(teachClass('Math')); // Teaching Math
console.log(teachClass('History')); // Teaching History

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdDQUFnQztBQUNoQywwQkFBMEI7QUFDMUIsZ0NBQWdDO0FBZ0JoQyxvREFBb0Q7QUFDcEQ7SUFBQTtJQVlBLENBQUM7SUFYQywrQkFBWSxHQUFaO1FBQ0UsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBRUQsaUNBQWMsR0FBZDtRQUNFLE9BQU8sd0JBQXdCLENBQUM7SUFDbEMsQ0FBQztJQUVELG9DQUFpQixHQUFqQjtRQUNFLE9BQU8sMkJBQTJCLENBQUM7SUFDckMsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDO0FBRUQsa0RBQWtEO0FBQ2xEO0lBQUE7SUFZQSxDQUFDO0lBWEMsOEJBQVksR0FBWjtRQUNFLE9BQU8sdUJBQXVCLENBQUM7SUFDakMsQ0FBQztJQUVELGdDQUFjLEdBQWQ7UUFDRSxPQUFPLHFCQUFxQixDQUFDO0lBQy9CLENBQUM7SUFFRCxrQ0FBZ0IsR0FBaEI7UUFDRSxPQUFPLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQztBQUVELDhCQUE4QjtBQUM5QixTQUFTLGNBQWMsQ0FBQyxNQUF1QjtJQUM3QyxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDL0MsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7U0FBTSxDQUFDO1FBQ04sT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBQ3hCLENBQUM7QUFDSCxDQUFDO0FBRUQsd0JBQXdCO0FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFHLFVBQVU7QUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUUsV0FBVztBQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXO0FBRWpFLGdDQUFnQztBQUNoQyxtREFBbUQ7QUFDbkQsZ0NBQWdDO0FBRWhDLHVEQUF1RDtBQUN2RCxTQUFTLFVBQVUsQ0FBQyxRQUE0QjtJQUM5QyxPQUFPLFFBQVEsWUFBWSxRQUFRLENBQUM7QUFDdEMsQ0FBQztBQUVELGtEQUFrRDtBQUNsRCxTQUFTLFdBQVcsQ0FBQyxRQUE0QjtJQUMvQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQ3pCLE9BQU8sUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDdEMsQ0FBQztTQUFNLENBQUM7UUFDTixPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3JDLENBQUM7QUFDSCxDQUFDO0FBRUQsZ0JBQWdCO0FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRyxrQkFBa0I7QUFDbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLDRCQUE0QjtBQVM3RSw0QkFBNEI7QUFDNUIsU0FBUyxVQUFVLENBQUMsVUFBb0I7SUFDdEMsT0FBTyxtQkFBWSxVQUFVLENBQUUsQ0FBQztBQUNsQyxDQUFDO0FBRUQsZ0JBQWdCO0FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBSSxnQkFBZ0I7QUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBBZHZhbmNlZCB0eXBlcyAtIFBhcnQgMVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gMe+4j+KDoyBEaXJlY3RvciBJbnRlcmZhY2VcclxuaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNlIHtcclxuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xyXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcclxuICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIDLvuI/ig6MgVGVhY2hlciBJbnRlcmZhY2VcclxuaW50ZXJmYWNlIFRlYWNoZXJJbnRlcmZhY2Uge1xyXG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XHJcbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xyXG4gIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nO1xyXG59XHJcblxyXG4vLyAz77iP4oOjIERpcmVjdG9yIENsYXNzIGltcGxlbWVudGluZyBEaXJlY3RvckludGVyZmFjZVxyXG5jbGFzcyBEaXJlY3RvciBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlIHtcclxuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnV29ya2luZyBmcm9tIGhvbWUnO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnR2V0dGluZyBhIGNvZmZlZSBicmVhayc7XHJcbiAgfVxyXG5cclxuICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzJztcclxuICB9XHJcbn1cclxuXHJcbi8vIDTvuI/ig6MgVGVhY2hlciBDbGFzcyBpbXBsZW1lbnRpbmcgVGVhY2hlckludGVyZmFjZVxyXG5jbGFzcyBUZWFjaGVyIGltcGxlbWVudHMgVGVhY2hlckludGVyZmFjZSB7XHJcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gJ0Nhbm5vdCB3b3JrIGZyb20gaG9tZSc7XHJcbiAgfVxyXG5cclxuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICdDYW5ub3QgaGF2ZSBhIGJyZWFrJztcclxuICB9XHJcblxyXG4gIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAnR2V0dGluZyB0byB3b3JrJztcclxuICB9XHJcbn1cclxuXHJcbi8vIDXvuI/ig6MgRnVuY3Rpb24gY3JlYXRlRW1wbG95ZWVcclxuZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoc2FsYXJ5OiBudW1iZXIgfCBzdHJpbmcpOiBEaXJlY3RvciB8IFRlYWNoZXIge1xyXG4gIGlmICh0eXBlb2Ygc2FsYXJ5ID09PSAnbnVtYmVyJyAmJiBzYWxhcnkgPCA1MDApIHtcclxuICAgIHJldHVybiBuZXcgVGVhY2hlcigpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbmV3IERpcmVjdG9yKCk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyA277iP4oOjIEV4YW1wbGUgdGVzdCBsb2dzXHJcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDIwMCkuY29uc3RydWN0b3IubmFtZSk7ICAgLy8gVGVhY2hlclxyXG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgxMDAwKS5jb25zdHJ1Y3Rvci5uYW1lKTsgIC8vIERpcmVjdG9yXHJcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKCckNTAwJykuY29uc3RydWN0b3IubmFtZSk7IC8vIERpcmVjdG9yXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBUYXNrIDY6IENyZWF0aW5nIGZ1bmN0aW9ucyBzcGVjaWZpYyB0byBlbXBsb3llZXNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIFR5cGUgcHJlZGljYXRlIHRvIGNoZWNrIGlmIGFuIGVtcGxveWVlIGlzIGEgRGlyZWN0b3JcclxuZnVuY3Rpb24gaXNEaXJlY3RvcihlbXBsb3llZTogRGlyZWN0b3IgfCBUZWFjaGVyKTogZW1wbG95ZWUgaXMgRGlyZWN0b3Ige1xyXG4gIHJldHVybiBlbXBsb3llZSBpbnN0YW5jZW9mIERpcmVjdG9yO1xyXG59XHJcblxyXG4vLyBGdW5jdGlvbiB0byBleGVjdXRlIHdvcmsgYmFzZWQgb24gZW1wbG95ZWUgdHlwZVxyXG5mdW5jdGlvbiBleGVjdXRlV29yayhlbXBsb3llZTogRGlyZWN0b3IgfCBUZWFjaGVyKTogc3RyaW5nIHtcclxuICBpZiAoaXNEaXJlY3RvcihlbXBsb3llZSkpIHtcclxuICAgIHJldHVybiBlbXBsb3llZS53b3JrRGlyZWN0b3JUYXNrcygpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZW1wbG95ZWUud29ya1RlYWNoZXJUYXNrcygpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gRXhhbXBsZSB1c2FnZVxyXG5jb25zb2xlLmxvZyhleGVjdXRlV29yayhjcmVhdGVFbXBsb3llZSgyMDApKSk7ICAgLy8gR2V0dGluZyB0byB3b3JrXHJcbmNvbnNvbGUubG9nKGV4ZWN1dGVXb3JrKGNyZWF0ZUVtcGxveWVlKDEwMDApKSk7ICAvLyBHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBUYXNrIDc6IFN0cmluZyBsaXRlcmFsIHR5cGVzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBTdHJpbmcgbGl0ZXJhbCB0eXBlIGZvciBzdWJqZWN0c1xyXG50eXBlIFN1YmplY3RzID0gJ01hdGgnIHwgJ0hpc3RvcnknO1xyXG5cclxuLy8gRnVuY3Rpb24gdG8gdGVhY2ggYSBjbGFzc1xyXG5mdW5jdGlvbiB0ZWFjaENsYXNzKHRvZGF5Q2xhc3M6IFN1YmplY3RzKTogc3RyaW5nIHtcclxuICByZXR1cm4gYFRlYWNoaW5nICR7dG9kYXlDbGFzc31gO1xyXG59XHJcblxyXG4vLyBFeGFtcGxlIHVzYWdlXHJcbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoJ01hdGgnKSk7ICAgIC8vIFRlYWNoaW5nIE1hdGhcclxuY29uc29sZS5sb2codGVhY2hDbGFzcygnSGlzdG9yeScpKTsgLy8gVGVhY2hpbmcgSGlzdG9yeVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=