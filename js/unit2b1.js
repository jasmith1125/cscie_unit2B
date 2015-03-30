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
   
    // String to hold data output to page
    var htmlString = '';
     // Function to display output in HTML
    this.showEvent = function() {
    	for (var i = 0; i < data.length; i++) {
  			htmlString += "<table><tr><td>" + data[i].eventDescription + "</td><td>" + data[i].eventDate + 
  			"</td><td>" + data[i].who + "</td><<td>" + data[i].notes + "</td></tr></table>";
		}
    outputEl.innerHTML = htmlString;
	} //end function
}; //end constructor function

// Add onclick function to gather data from form when button is activated
// and add it to the data array
saveEl.onclick = function() {
    var eventDescription = eventDescriptionEl.value;
    var eventDate = eventDateEl.value;
    var who = whoEl.value;
    var notes = notesEl.value;
    
    var event = new Event(eventDescription, eventDate, who, notes);
    data.push(event);
    data[i] = showEvent();
    console.log(data);
}; 

// Convert event object to a string that can be stored in Local Storage
 var event = new Event(eventDescription, eventDate, who, notes);
    data.push(event);
    //updateLS();
   // updateOutput();
    //clearInputs();


var initLS = function() {
	dataLS = JSON.parse(window.localStorage.getItem("events"));
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
	window.localStorage.setItem("events", JSON.stringify(data));
};

var initLS = function() {
	data = JSON.parse(window.localStorage.getItem("events"));
	updateOutput();
};

console.log(window.localStorage);

var updateOutput = function() {
	outputEl.innerHTML = '';
	for(i in data) {
		var event = data[i];
		var div = document.createElement("div");
		div.setAttribute('class', 'generated');
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