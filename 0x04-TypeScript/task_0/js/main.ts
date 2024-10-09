interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}


const student1: Student = { firstName: "Moaz", lastName: "Sayed", age: 25, location: "Cairo" };
const student2: Student = { firstName: "Rehab", lastName: "Emad", age: 22, location: "Alexandria" };

const studentsList: Student[] = [student1, student2];


const table = document.createElement("table");
const tableHeader = document.createElement("tr");
const headerFirstName = document.createElement("th");
headerFirstName.textContent = "First Name";
tableHeader.appendChild(headerFirstName);

const headerLocation = document.createElement("th");
headerLocation.textContent = "Location";
tableHeader.appendChild(headerLocation);

table.appendChild(tableHeader);

studentsList.forEach(student => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  table.appendChild(row);
});
document.body.appendChild(table);
