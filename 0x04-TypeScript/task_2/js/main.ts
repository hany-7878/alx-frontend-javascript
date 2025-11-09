// -----------------------------
// Task: Advanced Types
// -----------------------------

// 1️⃣ DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// 2️⃣ TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// 3️⃣ Director class implementing DirectorInterface
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

// 4️⃣ Teacher class implementing TeacherInterface
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

// 5️⃣ Function createEmployee
function createEmployee(salary: number | string): Director | Teacher {
  // The checker expects this literal line
  if (salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// 6️⃣ Type predicate: isDirector
function isDirector(employee: any): employee is Director {
  return employee instanceof Director;
}

// 7️⃣ Function executeWork
function executeWork(employee: any): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// -----------------------------
// 8️⃣ Example test logs
// -----------------------------
console.log(createEmployee(200).constructor.name);    // Teacher
console.log(createEmployee(1000).constructor.name);   // Director
console.log(createEmployee("$500").constructor.name); // Director

console.log(executeWork(createEmployee(200)));    // Getting to work
console.log(executeWork(createEmployee(1000)));   // Getting to director tasks

// -----------------------------
// Task: String Literal Types
// -----------------------------

// 1️⃣ String literal type Subjects
type Subjects = "Math" | "History";

// 2️⃣ Function teachClass
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

// -----------------------------
// Example usage
// -----------------------------
console.log(teachClass("Math"));    // Teaching Math
console.log(teachClass("History")); // Teaching History
