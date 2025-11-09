// -----------------------------
// Advanced types - Part 1
// -----------------------------

// 1️⃣ Director Interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// 2️⃣ Teacher Interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// 3️⃣ Director Class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// 4️⃣ Teacher Class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// 5️⃣ Function createEmployee
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// 6️⃣ Example test logs
console.log(createEmployee(200).constructor.name);   // Teacher
console.log(createEmployee(1000).constructor.name);  // Director
console.log(createEmployee('$500').constructor.name); // Director

// -----------------------------
// Task 6: Creating functions specific to employees
// -----------------------------

// Type predicate to check if an employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Function to execute work based on employee type
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Example usage
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks

// -----------------------------
// Task 7: String literal types
// -----------------------------

// String literal type for subjects
type Subjects = 'Math' | 'History';

// Function to teach a class
function teachClass(todayClass: Subjects): string {
  return `Teaching ${todayClass}`;
}

// Example usage
console.log(teachClass('Math'));    // Teaching Math
console.log(teachClass('History')); // Teaching History
