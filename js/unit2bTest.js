"use strict";

// Set variables to collect form data
var eventDescriptionEl = document.getElementById("eventDescription");
var eventDateEl = document.getElementById("eventDate");
var whoEl = document.getElementById("who");
var notesEl = document.getElementById("notes")
var saveEl = document.getElementById("saveBtn");
var outputEl = document.getElementById("output");

// Array to hold event objects
var data = [];

// Add events to the array
data.push(new Event("birthday", "Quinn", "March 13", "party at Craig's Cruisers"));
data.push(new Event("concert", "Chloe", "May 15", "E.K. Fine Arts Center"));

// Constructor function allows creation of events
function Event(eventDescription, eventDate, who, notes) {
    this.eventDescription = eventDescription;
    this.eventDate = eventDate;
    this.who = who;
    this.notes = notes;
   // this.getEvent = function() {
       // return this.eventDescription, this.eventDate, this.who, this.notes;
//}
}
// Add events to the array
/*saveEl.onclick = function() {
    var eventDescription = eventDescriptionEl.value;
    var eventDate = eventDateEl.value;
    var who = who.value;
    var notes = notes.value;

    var event = new Event(eventDescription, eventDate, who, notes);
    data.push(event);
     updateLS();
} */

// convert Array to String so we can persist it in localStorage
var updateLS = function() {
    window.localStorage.setItem("data", JSON.stringify(data));
};

// persist events Array in localStorage
localStorage.setItem('data', myData);

// check for people in local storage
var myData = window.localStorage.getItem('data');
if (data) {
    // parse the people
    var myData = JSON.parse(data); 

    // loop through myData and show data
    var len = myData.length;
    for (var i = 0; i < len; i++) {
        // call function to display person
        displayEvent(new Event(myData[i].eventDescription, myData[i].eventDate, myData[i].who, myData[i].notes));
    }
}
/**
 * This function creates a new table row, and cells, for an event.
 */
function displayEvent(event) {
    // get the table
    var table = document.getElementById('eventTable');
    
    // insert row below <thead>
    var row = table.insertRow(table.rows.length - 1);

    // insert new cells into new row
    var cell1 = row.insertCell(0); // eventDescription
    var cell2 = row.insertCell(1); // eventDate
    var cell3 = row.insertCell(2); // who
    var cell4 = row.insertCell(3); //notes
    
    // create new Text nodes and append them as childen elements to the cells
    cell1.appendChild(document.createTextNode(event.eventDescription));
    cell2.appendChild(document.createTextNode(event.eventDate));
    cell3.appendChild(document.createTextNode(event.who));
    cell4.appendChild(document.createTextNode(event.notes));
}
