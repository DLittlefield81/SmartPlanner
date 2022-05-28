//============- Set Planner Date -======================
setInterval(function () {
    var todaysDate = moment().format('MMMM Do YYYY, HH:mm:ss');
    $("#currentDay").text(todaysDate);
});




//============- Set to LocalStorage -======================
$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
})



//============- Get Current Hour -======================
let currentHour = 13; //moment().format('HH');
console.log("Current Hour: " + currentHour)




//============- Get Local Storage -======================
function getLocalStorage() {
    for (var i = 9; i <= 17; i++) {

        $("#hour" + [i] + " .description").val(localStorage.getItem("hour" + [i]));

    }
}



getLocalStorage();


