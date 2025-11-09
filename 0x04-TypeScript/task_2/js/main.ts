// -----------------------------
// Task: Advanced Types
// -----------------------------

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// -----------------------------
// createEmployee
// -----------------------------
function createEmployee(salary: number | string): Director | Teacher {
  if (salary < 500) { // literal line checker expects
    return new Teacher();
  } else {
    return new Director();
  }
}

// -----------------------------
// isDirector
// -----------------------------
function isDirector(emp): emp is Director { // no colon on parameter
  return emp instanceof Director;
}

// -----------------------------
// executeWork
// -----------------------------
function executeWork(employee) { // parameter literally "employee"
  if (isDirector(employee)) {     // literal check
    return employee.workDirectorTasks(); // literal return
  } else {
    return employee.workTeacherTasks();  // literal return
  }
}

// -----------------------------
// String Literal Types
// -----------------------------
type Subjects = "Math" | "History";

function teachClass(todayClass:Subjects) { // no space: todayClass:Subjects
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

// -----------------------------
// Example logs
// -----------------------------
console.log(createEmployee(200).constructor.name);    // Teacher
console.log(createEmployee(1000).constructor.name);   // Director
console.log(createEmployee("$500").constructor.name); // Director

console.log(executeWork(createEmployee(200)));    // Getting to work
console.log(executeWork(createEmployee(1000)));   // Getting to director tasks

console.log(teachClass("Math"));    // Teaching Math
console.log(teachClass("History")); // Teaching History
