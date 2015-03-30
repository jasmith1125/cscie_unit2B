var eventDescriptionEl = document.getElementById("eventDescription");
var eventDateEl = document.getElementById("eventDate");
var whoEl = document.getElementById("who");
var notesEl = document.getElementById("notes");
var saveEl = document.getElementById("saveBtn");
var outputEl = document.getElementById("output");

//window.localStorage.clear();


var data = [];

var Event = function(eventDescription, eventDate, who, notes) {
    this.eventDescription = eventDescription;
    this.eventDate = eventDate;
    this.who = who;
    this.notes = notes;
    this.showEvent = function() {
    return this.eventDescription + " " + this.eventDate + " " + this.who + " " +  this.notes;
}
 
};

Event.prototype.createDiv = function() {
	var div = document.createElement("div");
	var eventDescriptionNode = document.createTextNode(this.eventDescription);
	div.appendChild(eventDescriptionNode);
	var eventDateNode = document.createTextNode(this.eventDate);
	div.appendChild(eventDateNode);
	var whoNode = document.createTextNode(this.who);
	div.appendChild(whoeode);
	var notesNode = document.createTextNode(this.notes);
	div.appendChild(notesNode);
}

saveEl.onclick = function() {
    var eventDescription = eventDescriptionEl.value;
    var eventDate = eventDateEl.value;
    var who = whoEl.value;
    var notes = notesEl.value;
    /*
    var obj = {
        name: name,
        color: color
    };
    */
    var event = new Event(eventDescription, eventDate, who, notes);
    data.push(event);
    updateLS();
    updateOutput();
    clearInputs();
};

var initLS = function() {
	dataLS = JSON.parse(window.localStorage.getItem("data"));
	for(i in dataLS) {
		var obj = dataLS[i];
		var event = new Event(obj.eventDescription, obj.eventDate, obj.who, obj.notes);
		data.push(event);
	}
	updateOutput();
}

var clearInputs = function() {
	eventDescriptionEl.value = '';
	eventDateEl.value = '';
	whoEl.value = '';
	notesEl.value = '';
};

var updateLS = function() {
	window.localStorage.setItem("data", JSON.stringify(data));
};

var initLS = function() {
	data = JSON.parse(window.localStorage.getItem("data"));
	updateOutput();
};

console.log(window.localStorage);

// Check for events in local storage
window.onload = function() {
var persistedData = window.localStorage.getItem('data');
if (persistedData != undefined) {
	persistedData = JSON.parse(persistedData);
	console.log('JSON.parse(persistedData):');
	console.log(persistedData);
	console.log(' ');
    // Load events from local storage into array (as objects)
	persistedData.forEach(function(d) {
		data.push(new Event(d.eventDescription, d.eventDate, d.who, d.notes));

		});
		//updateOutput();
	
}
}
var updateOutput = function(event) {
	outputEl.innerHTML = '';
	for(i in data) {
		var event = data[i];
		var div = document.createElement("div");
		var eventDescriptionNode = document.createTextNode(event.eventDescription);
		div.appendChild(eventDescriptionNode);
		var eventDateNode = document.createTextNode(event.eventDate);
		div.appendChild(eventDateNode);
		var whoNode = document.createTextNode(event.who);
		div.appendChild(whoNode);
		var notesNode = document.createTextNode(event.notes);
		div.appendChild(notesNode);
		outputEl.appendChild(div);
	}
} 















/*
// Set variables to collect form data
var occasionEl = document.getElementById("occasion");
var dateEl = document.getElementById("date");
var personEl = document.getElementById("person");
var notesEl = document.getElementById("notes");
var saveEl = document.getElementById("saveEvent")

// Array to hold event objects
var events = [];

// Constructor function allows creation of events
function Event(occasion, person, date, notes) {
    this.occasion = occasion;
    this.date = date;
    this.person = person;
    this.notes = notes;
}

// Create onclick function to gather form data when button is activated
saveEl.onclick = function() {
	var event = new Event(occasion, date, person, notes);
	events.push(event);
};

// Add events to the array
events.push(new Event("birthday", "Quinn", "March 13", "party at Craig's Cruisers"));
events.push(new Event("concert", "Chloe", "May 15", "E.K. Fine Arts Center"));

//print events to console
//console.log(events);

// Convert event object to a string
var jsonEvent = JSON.stringify(events);
console.log('JSON.stringify(events):');
console.log(jsonEvent);
//console.log(' ');

// Store JSON string in local storage
window.localStorage.setItem("events", jsonEvent);

// Clear out events that currently are in the array
window.localStorage.clear();
//events = [];
//console.log(events);
//console.log(' ');

// Check for events in local storage
var persistedEvents = window.localStorage.getItem('events');
if (persistedEvents != undefined) {
	persistedEvents = JSON.parse(persistedEvents);
	//console.log('JSON.parse(persistedEvents):');
	//console.log(persistedEvents);
	//console.log(' ');

	// Load events from local storage into array (as objects)
	persistedEvents.forEach(function(e) {
		events.push(new Event(e.occasion, e.date, e.person, e.notes));

		console.log('Key / Value pairs:');
		for (var key in e) {
			console.log("The event's " + key + "is " + e[key]);
		}
		console.log(' ');
	});
}

*/

