
function updateDateTime() {
    var currentDate = new Date();
    var dateString = currentDate.toDateString();
    var timeString = currentDate.toLocaleTimeString();

    var datetimeElement = document.querySelector(".datetime");
    if (datetimeElement) {
        datetimeElement.innerHTML = dateString + "<br>" + timeString;
    }

    setTimeout(updateDateTime, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
    updateDateTime();
});
