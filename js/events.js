console.log("events.js loaded")

// Ticketmaster API for use on events.html
// Should display top 3 events around Atlanta and some info about them (title, when it is, location, and link to event)

// Stores the container in a variable
const eventsContainer = document.querySelector("#events-container");

// Stores the button in a variable
const fetchButton = document.querySelector("#fetch-events-btn");

// API URL
const apiURL = "https://app.ticketmaster.com/discovery/v2/events.json?city=Atlanta&size=3&apikey=KtLuGRAbY9IaaQORYWXMXx3RwP6DuIMx";

// When user clicks the button, it will run this
fetchButton.addEventListener("click", async function() {
    console.log("Loading Events.");

    // Clearing it every time you click the button so it doesn't stack the events every time you click
    eventsContainer.innerHTML = "";

    // Fetching the events from Ticketmaster
    const response = await fetch(apiURL);
    const data = await response.json();

    // Checking to make sure that there are events 
    const events = data._embedded.events;
    
    // Loop to get info about each event and display it on the webpage
    for (let i = 0; i < events.length; i++) {
        // Getting info
        const event = events[i];
        const venue = event._embedded.venues[0];

        // HTML that will appear on the webpage for each event
        const eventHTML = `
            <div class="yellow-text-box">
                <h3>${event.name}</h3>
                <p>Date: ${event.dates.start.localDate} ${event.dates.start.localTime}</p>
                <p>Venue: ${venue.name}</p>
                <p>Location: ${venue.city.name}, ${venue.state.stateCode}</p>
                <a href="${event.url}">View Tickets</a>
            </div>
        `;
        eventsContainer.innerHTML += eventHTML;
    }
});