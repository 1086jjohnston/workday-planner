// variables
let timeNow = moment();
let blockInfo = $(".col-8");
let hourlyArray = 0;
let hourNow = 0;
let plannedTask = $("textarea");


// local storage function
if (localStorage.getItem("hourlyTask")) {
    hourlyArray = JSON.parse(localStorage.getItem("hourlyTask"));
} else {
    hourlyArray = [];
};
// current date 
$("#currentDay").text(`${timeNow.format('dddd, MMMM Do')}`);


// checks current time
function scheduleTimeUpdate() {
    blockInfo.removeClass('past present future');
    $.each(blockInfo, function (scheduleBlockHour) {
        if (scheduleBlockHour < (timeNow.hour() - 9)) {
            $(this).addClass('past');
        } else if (scheduleBlockHour == (timeNow.hour() - 9)) {
            $(this).addClass('present');
        } else {
            $(this).addClass('future');
        }
    });
    hourNow = timeNow.hour();
};

// save tasks, post-refresh
function tasksAreSaved() {
    $.each(hourlyArray, function (i) {
        if (hourlyArray[i]) {
            plannedTask[i].value = hourlyArray[i].task;
        };
    });
};


// click listener
scheduleTimeUpdate();
tasksAreSaved();
$("button").click(updateLocalStorage);