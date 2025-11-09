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
  [key: string]: any;         // Allow any additional property
}

// Example Teachers
const teacher1: Teacher = {
  firstName: "Hana",
  lastName: "Tesfaye",
  fullTimeEmployee: true,
  location: "Dembi Dolo",
  yearsOfExperience: 2,
};

const teacher2: Teacher = {
  firstName: "Abebe",
  lastName: "Kebede",
  fullTimeEmployee: false,
  location: "Addis Ababa",
};

const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

console.log(teacher3);

// -----------------------------
// Task 2: Directors Interface
// -----------------------------

interface Directors extends Teacher {
  numberOfReports: number; // Required
}

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// -----------------------------
// Extra (Table Rendering Example)
// -----------------------------

const teachersList: Teacher[] = [teacher1, teacher2, teacher3];

// Create table
const table: HTMLTableElement = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.width = "50%";
table.style.marginTop = "20px";

// Create header
const headerRow = document.createElement("tr");
const nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";
nameHeader.style.border = "1px solid black";
nameHeader.style.padding = "8px";

const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
locationHeader.style.border = "1px solid black";
locationHeader.style.padding = "8px";

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Add teacher rows
teachersList.forEach((teacher) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = teacher.firstName;
  nameCell.style.border = "1px solid black";
  nameCell.style.padding = "8px";

  const locationCell = document.createElement("td");
  locationCell.textContent = teacher.location;
  locationCell.style.border = "1px solid black";
  locationCell.style.padding = "8px";

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);

// -----------------------------
// Task 3: printTeacher Function
// -----------------------------

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) =>
  `${firstName.charAt(0)}. ${lastName}`;

console.log(printTeacher("John", "Doe"));     // J. Doe
console.log(printTeacher("Hana", "Tesfaye")); // H. Tesfaye

// -----------------------------
// Task 4: Student Class
// -----------------------------

// Interface for constructor arguments
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface describing the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the class
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass({ firstName: "Hana", lastName: "Tesfaye" });
console.log(student.displayName());   // Hana
console.log(student.workOnHomework()); // Currently working
