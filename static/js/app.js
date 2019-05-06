// from data.js
var tableData = data;

// YOUR CODE HERE!
function buildTable(inputDate = "1/1/2010"){

    // tabBody=document.getElementsByTagName("tbody").item(0);
    tabBody = document.getElementById("ufo-table").inputMode(0);
    row=document.createElement("tr");
    cell1 = document.createElement("td");
    cell2 = document.createElement("td");
    textnode1=document.createTextNode(content);
    textnode2=document.createTextNode(morecontent);
    cell1.appendChild(textnode1);
    cell2.appendChild(textnode2);
    row.appendChild(cell1);
    row.appendChild(cell2);
    tabBody.appendChild(row);
}

function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input value from the form
    var date = d3.select("#datetime").node().value;
    console.log(date);
  
    // clear the input value
    d3.select("#datetime").node().value = "";
  
    // Build the plot with the new stock
    buildTable(date);
  }
// Add event listener for submit button
d3.select("#filter-btn").on("click", handleSubmit);