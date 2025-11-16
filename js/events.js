console.log("events.js loaded")

// Ticketmaster API for use on events.html
// Should display top 3 events around Atlanta and some info about them (title, when it is, location, and link to event)

// Stores the container in a variable
const eventsContainer = document.querySelector("#events-container");

// Stores the button in a variable
const fetchButton = document.querySelector("#fetch-events-btn");

// API URL
const apiURL = ""

// When user clicks the button, it will run this
fetchButton.addEventListener("click", async function() {
    const response = await fetch(apiURL);
    const data = await response.json();

    // This will loop through events in response and display the first 3 events
    
    // Still working on this part

    // For loop here

    // Clearing it every time you click the button so it doesn't stack the events every time you click
    eventsContainer.innerHTML = "";

});