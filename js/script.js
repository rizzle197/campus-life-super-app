// Displaying today's date on the dining page
    let currentDate = new Date();
    
    // Setting variables for day, month, and year
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;        // January is zero in this, so + 1 so it shows correctly
    let cYear = currentDate.getFullYear();

    // Formatting the day the right way "Month/Day/Year"
    let formattedDate = cMonth + "/" + cDay + "/" +cYear;

    // Displaying date in the html
    document.getElementById("current-date").innerHTML = formattedDate;