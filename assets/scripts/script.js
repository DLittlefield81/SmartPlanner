//============- Set Planner Date -======================
setInterval(function () {
    let todaysDate = moment().format('MMMM Do YYYY, HH:mm:ss');
    $("#currentDay").text(todaysDate);
});


//============- Get Current Hour -======================
let currentHour = moment().format('HH');
console.log("Current Hour: " + currentHour)


//============- Set to LocalStorage -======================
$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        let text = $(this).siblings(".description").val();
        let hour = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(hour, text);
    })
})


//============- Get Local Storage -======================
function getLocalStorage() {
    for (let i = 9; i <= 17; i++) {

        $("#H-" + [i] + " .description").val(localStorage.getItem("H-"+[i]));

    }
}
getLocalStorage(); // RUN ON LOAD


//============- Colorize Time Blocks -======================
$(".time-block").each(function () {
    var hourBlock = parseInt($(this).attr("id").split("H-")[1]);
        if (hourBlock < currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
            console.log('hourBlockPast= ' + hourBlock)
        } else if (hourBlock === currentHour) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
            console.log('hourBlockPresent= ' + hourBlock)
        } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
            console.log('hourBlockFuture= ' + hourBlock)

        }
    } )



