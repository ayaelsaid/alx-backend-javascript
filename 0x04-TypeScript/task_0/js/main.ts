// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Define two students
const student1: Student = {
  firstName: "Kokoy",
  lastName: "Eslam",
  age: 20,
  location: "Cairo"
};

const student2: Student = {
  firstName: "Mona",
  lastName: "Ahmed",
  age: 22,
  location: "Giza"
};

// Array of students
const studentsList: Student[] = [student1, student2];

// Function to create and render the table
function renderTable(): void {
  // Create table element
  const table: HTMLTableElement = document.createElement('table');
  table.style.width = '100%';
  table.style.border = '1px solid gray'; // Border style for the entire table
  table.style.borderCollapse = 'collapse'; // Collapse behavior for borders

  // Create table header (thead)
  const thead: HTMLTableSectionElement = document.createElement('thead');
  const headerRow: HTMLTableRowElement = document.createElement('tr');

  // Create and append table headers (th)
  ['First Name', 'Location'].forEach(headerText => {
    const th: HTMLTableHeaderCellElement = document.createElement('th');
    th.textContent = headerText;
    th.style.backgroundColor = 'lightgray';
    th.style.border = '1px solid gray'; // Adjusted border style for headers
    th.style.padding = '8px'; // Adjusted padding for headers
    headerRow.appendChild(th);
  });

  // Append the header row to thead
  thead.appendChild(headerRow);

  // Append thead to table
  table.appendChild(thead);

  // Create table body (tbody)
  const tbody: HTMLTableSectionElement = document.createElement('tbody');

  // Populate table rows and cells for each student
  studentsList.forEach(student => {
    const row: HTMLTableRowElement = document.createElement('tr');

    // Create and append cells (td)
    const firstNameCell: HTMLTableCellElement = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = '1px solid gray'; // Adjusted border style for cells
    firstNameCell.style.padding = '.5rem'; // Adjusted padding for cells
    row.appendChild(firstNameCell);

    const locationCell: HTMLTableCellElement = document.createElement('td');
    locationCell.textContent = student.location;
    locationCell.style.border = '1px solid gray'; // Adjusted border style for cells
    locationCell.style.padding = '.5rem'; // Adjusted padding for cells
    row.appendChild(locationCell);

    // Append each row to tbody
    tbody.appendChild(row);
  });

  // Append tbody to table
  table.appendChild(tbody);

  // Append table to the document body
  document.body.appendChild(table);
}

// Call the renderTable function to generate the table
renderTable();
