// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var inputField = d3.select("#datetime");
var button = d3.select("#filter-btn");

// YOUR CODE HERE!
data.forEach(function(sighting) {
    var row = tbody.append("tr")

    Object.entries(sighting).forEach(([key,value]) => {
        // console.log(key, value)
        var cell = row.append("td")
        cell.text(value)

    })

})


function handleinput() {
    
    //Prevent the page from refreshing
    d3.event.preventDefault()

    console.log(inputField)

    //Capture the input date
    var inputText = inputField.property("value");

    //Use the input date to filter the data by date entered
    var filteredData = data.filter((dateentered) => dateentered["datetime"] === inputText)

    tbody.html("")

    filteredData.forEach(function(ufosighting){
       var row = tbody.append("tr")
       Object.entries(ufosighting).forEach(([key,value]) => {
        var cell = row.append("td")
        cell.text(value)
       }) 
    }) 

}

//Create event handler - click filter table button
button.on('click', handleinput);
