// Get references to the tbody element, input field and button
var $tbody = document.querySelector('tbody');
var $dateInput = document.querySelector('#datetime');
var $searchBtn = document.querySelector('#search');

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener('click', handledateSearchButtonClick, false);

// Set filteredData to Data initially
// Data comes from the Data.js file
var filteredData = dataSet;

// renderTable renders the filteredData to the tbody
function renderTable() {
  $tbody.innerHTML = '';
  for (var i = 0; i < filteredData.length; i++) {
    // Get get the current data object and its fields
    var current_data = filteredData[i];
    var fields = Object.keys(current_data);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = current_data[field];
    }
  }
}

function handledateSearchButtonClick() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filterDate = $dateInput.value.trim().toLowerCase();
  
    // Set filteredAddresses to an array of all addresses whose "state" matches the filter
    filteredData = dataSet.filter(function(data) {
      var date_data = data.datetime.toLowerCase();
  
      // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
      return date_data === filterDate;
    });
    renderTable();
  }

//Render the table for the first time on page load
renderTable();