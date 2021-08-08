const toggleButton = document.querySelector(".info-toggle");
const countdownTitleDiv = document.querySelector(".countdownTitle");
const countdownValueDiv = document.querySelector(".countdownValue");
const countdownTimeDiv = document.querySelector(".countdownTime");

/** ---------- Toggle button ---------- **/
var isToggled = false;
toggleButton.addEventListener("click", function () {
    isToggled = !isToggled;
    countdownTimeDiv.style.visibility = isToggled ? 'visible' : 'hidden';
});


// Set default date we're counting down to to be next New Year
const today = new Date();
const nextNewYear = new Date(today.getFullYear() + 1, 0, 1);
var countDownDate = nextNewYear;
var countdownTitle = "Next New Year";

const url_string = window.location.search;
console.log(url_string);
if (url_string != "") {
    const urlParams = new URLSearchParams(url_string);
    const dateParam = urlParams.get("date");
    countdownTitle = urlParams.get("title") ?? '';

    if (dateParam) {
        countDownDate = new Date(dateParam);
    }

    }
}

document.getElementById("countdownTitle").innerHTML = countdownTitle;
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
    document.getElementById(
        "countdownValue"
    ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdownValue").innerHTML = "🎉";
    }
}, 1000);
