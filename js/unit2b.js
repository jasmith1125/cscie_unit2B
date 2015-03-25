// Array to hold event objects
events = [];

// Constructor function allows creation of events
function Event(occasion, person, date, note) {
    this.occasion = occasion;
    this.person = person;
    this.date = date;
    this.note = note;
}

// Add events to the array
events.push(new Event("birthday", "Quinn", "March 13", "party at Craig's Cruisers"));
events.push(new Event("concert", "Chloe", "May 15", "E.K. Fine Arts Center"));

//print events to console
//console.log(events);

// Convert event object to a string
var jsonEvent = JSON.stringify(events);
console.log('JSON.stringify(events):');
console.log(jsonEvent);
console.log(' ');

// Store JSON string in local storage
window.localStorage.setItem("events", jsonEvent);

//window.localStorage.clear();
// Clear out events that currently are in