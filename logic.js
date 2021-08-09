const toggleButton = document.querySelector(".info-toggle");
const countdownTitleDiv = document.querySelector(".countdownTitle");
const countdownValueDiv = document.querySelector(".countdownValue");
const countdownTimeDiv = document.querySelector(".countdownTime");
const daysDiv = document.getElementById("days");
const hoursDiv = document.getElementById("hours");
const minutesDiv = document.getElementById("minutes");
const secondsDiv = document.getElementById("seconds");

/** ---------- Toggle button ---------- **/
var isToggled = false;
toggleButton.addEventListener("click", function () {
    isToggled = !isToggled;
    countdownTimeDiv.style.display = isToggled ? 'block' : 'none';
});


/** ---------- Countdown ---------- **/

// Set default date we're counting down to to be next New Year
const today = new Date();
const nextNewYear = new Date(today.getFullYear() + 1, 0, 1);
var countDownDate = nextNewYear;
var countdownTitle = "Next New Year";

const url_string = window.location.search;
if (url_string != "") {
    const urlParams = new URLSearchParams(url_string);
    const dateParam = urlParams.get("date");
    countdownTitle = urlParams.get("title") ?? "";
    
    if (dateParam) {
        countDownDate = new Date(dateParam);
    }
}

countdownTitleDiv.innerHTML = countdownTitle;
countdownTimeDiv.innerHTML = `(Counting to ${new Date(
    countDownDate
).toString()})`;

// Update the count down every 1 second
var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result
    daysDiv.innerHTML = days;
    hoursDiv.innerHTML = hours;
    minutesDiv.innerHTML = minutes;
    secondsDiv.innerHTML = seconds;

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        countdownValueDiv.innerHTML = "🎉";
    }
}, 1000);
