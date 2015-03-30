// Set variables to collect form data
var eventDescriptionEl = document.getElementById("eventDescription");
var eventDateEl = document.getElementById("eventDate");
var whoEl = document.getElementById("who");
var notesEl = document.getElementById("notes");
var saveEl = document.getElementById("saveBtn");
var outputEl = document.getElementById("output");


// Array to hold event objects
var data = [];


// Constructor function allows creation of events
var Event = function(eventDescription, eventDate, who, notes) {
    this.eventDescription = eventDescription;
    this.eventDate = eventDate;
    this.who = who;
    this.notes = notes;
 
}; //end constructor function

// Add events to the array
data.push(new Event("birthday", "Quinn", "March 13", "party at Craig's Cruisers"));
data.push(new Event("concert", "Chloe", "May 15", "E.K. Fine Arts Center"));
