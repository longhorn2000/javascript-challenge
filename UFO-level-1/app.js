// from data.js
var tableData = data;

// Variables
var button = d3.select("#filter-btn");
var inputField1 = d3.select("#datetime");

var tbody = d3.select("tbody");
var resetbtn = d3.select("#reset-btn");

var columns = ["datetime", "city", "state", "country", "shape", "comments"]

var populate = (dataInput) => {

    dataInput.forEach(ufo_sightings => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufo_sightings[column])
        )
    });
}



