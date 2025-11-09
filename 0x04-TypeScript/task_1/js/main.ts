// -----------------------------
// Task 1: Teacher Interface
// -----------------------------

// Define the Teacher interface
interface Teacher {
  readonly firstName: string; // Only modifiable when initialized
  readonly lastName: string;  // Only modifiable when initialized
  fullTimeEmployee: boolean;  // Always defined
  yearsOfExperience?: number; // Optional
  location: string;           // Always defined
  [key: string]: any;         // Allow any other properties
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

// -----------------------------
// Task 2: Directors Interface
// -----------------------------

// Interface Directors extending Teacher
interface Directors extends Teacher {
  numberOfReports: number; // Required attribute
}

// Example usage
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// -----------------------------
// Task 3: printTeacher Function
// -----------------------------

// Define an interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// -----------------------------
// Task 4: StudentClass
// -----------------------------

// Interface describing constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface describing the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the class
class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student1 = new StudentClass("Hana", "Tesfaye");
console.log(student1.displayName()); // Hana
console.log(student1.workOnHomework()); // Currently working
