// HOMEWORK
// CREATE A DYNAMIC TABLE
// Write a Javascript function that will dynamiclly create a table
// User should input the number of Colums and Rows
// In every table cell print which row and column it is (ex. Row-3 Column-1)
// Don't forget to use google! 🙂


function createTable() {
  var rows = prompt("Enter the number of rows:");
  var cols = prompt("Enter the number of columns:");
  var table = document.createElement("table");
  var tbody = document.createElement("tbody");
  for (var i = 0; i < rows; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < cols; j++) {
      var cell = document.createElement("td");
      cell.textContent = "Row-" + (i + 1) + "/Column-" + (j + 1);
      row.appendChild(cell);
      row.style.outline = "1px solid black";
      cell.style.outline = "1px solid black";
    }
    tbody.appendChild(row);
  }
  table.appendChild(tbody);
  document.body.appendChild(table);
}
createTable();




