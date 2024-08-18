function displayTime() {
    const now = new Date(); // Get the current date and time

    // Extract hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Pad zeros for single digit hours,minutes,seconds
    hours = hours < 10 ? 0${hours} : hours;
    minutes = minutes < 10 ? 0${minutes} : minutes;
    seconds = seconds < 10 ? 0${seconds} : seconds;

    console.log(${hours}:${minutes}:${seconds});

    // Increment seconds
    seconds++;

    // conditions
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    if (minutes === 60) {
        minutes = 0;
        hours++;
    if (hours === 24) {
        hours = 0; // Midnight!
            }
        }
    }

    // Call the function again after 1 second
    setTimeout(displayTime, 1000);
}
displayTime();//function call to start the clock