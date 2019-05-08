// from data.js
var tableData = data;

// YOUR CODE HERE!
function buildTable(inputDate = "01/01/2010"){

    // tabBody=document.getElementsByTagName("tbody").item(0);
    htmlTable = document.getElementById("ufo-table");
    console.log(tableData);
    console.log(tableData[0]);
    console.log(tableData[0].datetime);
    console.log(inputDate);
    tableData.forEach(element => {
    if (element.datetime == inputDate){
      console.log("YEsssss");
      row = htmlTable.insertRow();
      cell = row.insertCell();
      text = document.createTextNode(element.datetime);
      cell.appendChild(text);


      cell = row.insertCell();
      text = document.createTextNode(element.city);
      cell.appendChild(text);

      cell = row.insertCell();
      text = document.createTextNode(element.state);
      cell.appendChild(text);

      cell = row.insertCell();
      text = document.createTextNode(element.country);
      cell.appendChild(text);

      cell = row.insertCell();
      text = document.createTextNode(element.shape);
      cell.appendChild(text);


      cell = row.insertCell();
      text = document.createTextNode(element.durationMinutes);
      cell.appendChild(text);


      cell = row.insertCell();
      text = document.createTextNode(element.comments);
      cell.appendChild(text);
    }
    });
    // row=document.createElement("tr");
    // cell1 = document.createElement("td");
    // cell2 = document.createElement("td");
    // textnode1=document.createTextNode(content);
    // textnode2=document.createTextNode(morecontent);
    // cell1.appendChild(textnode1);
    // cell2.appendChild(textnode2);
    // row.appendChild(cell1);
    // row.appendChild(cell2);
    // tabBody.appendChild(row);

    // function generateTable(table, data) {
    //   for (let element of data) {
    //     let row = table.insertRow();
    //     for (key in element) {
    //       let cell = row.insertCell();
    //       let text = document.createTextNode(element[key]);
    //       cell.appendChild(text);
    //     }
    //   }
    // }
}

function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input value from the form
    var date = d3.select("#datetime").node().value;
    console.log(date);
    buildTable(date);

    // clear the input value
    d3.select("#datetime").node().value = "";
  
    // Build the plot with the new stock
    
  }
// Add event listener for submit button
d3.select("#filter-btn").on("click", handleSubmit);