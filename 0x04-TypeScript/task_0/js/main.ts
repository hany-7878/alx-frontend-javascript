// Define the Student interface
interface Student {
firstName: string;
lastName: string;
age: number;
location: string;
}

// Create two students
const student1: Student = {
firstName: "Hana",
lastName: "Tesfaye",
age: 24,
location: "Dembi Dolo"
};

const student2: Student = {
firstName: "Abebe",
lastName: "Kebede",
age: 45,
location: "Addis Ababa"
};

// Array of students
const studentsList: Student[] = [student1, student2];

// Render a table in the browser
const table: HTMLTableElement = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.width = "50%";
table.style.marginTop = "20px";

// Add table header
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

// Add student rows
studentsList.forEach((student) => {
const row = document.createElement("tr");

const nameCell = document.createElement("td");
nameCell.textContent = student.firstName;
nameCell.style.border = "1px solid black";
nameCell.style.padding = "8px";

const locationCell = document.createElement("td");
locationCell.textContent = student.location;
locationCell.style.border = "1px solid black";
locationCell.style.padding = "8px";

row.appendChild(nameCell);
row.appendChild(locationCell);
table.appendChild(row);
});

// Append table to the body
document.body.appendChild(table);


