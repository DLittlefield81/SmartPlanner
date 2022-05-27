//============- Set Planner Date -======================
setInterval(function () {
    var todaysDate = moment().format('MMMM Do YYYY, HH:mm:ss');
    $("#currentDay").text(todaysDate);
});


//============- Get Current Hour -======================
let currentHour = 13; //moment().format('HH');
console.log("Current Hour: " + currentHour)


//============- Build Table -======================
// function createTables() {
   

//     for (var i = 9; i <= 17; i++) {
//         //console.log(i)

//         var createDivRow = document.createElement('div');
//         createDivRow.className = 'row time-block';
//         createDivRow.id = 'hour-' + i;
//         this.appendChild(createDivRow);
//     }
    
//     for (var i = 9; i <= 17; i++) {
//         var createDivHour = document.createElement('div');
//         createDivRow.className = 'col-md-1 hour';
//         createDivHour.id = 'hour';
//         toAdd.appendChild(createDivHour);
//     }
// document.getElementById('container').appendChild(toAdd);
//      document.getElementById('hour').appendChild(toAdd);
// };
// 
// createDivHour.innerHTML = i;
// createDivHour.className = 'col-md-1 hour';
// var createTextArea = document.createElement('textarea');
// var createBtnSave = document.createElement('button');

// 
// toAdd.appendChild(createTextArea);




//document.getElementById('hour-' + i).appendChild(createBtnSave);





// };

/*

    <div id = "hour-9" class = "row time-block" >
        <div class = "col-md-1 hour" >9 AM </div> 
        <textarea class = "col-md-10 description"> </textarea> 
        <button class = "btn saveBtn col-md-1" ><i class = "fa-solid fa-lock" >< /i> </button >
    </div> 
    
    */



//var element = document.querySelector(".site3");

//============- Colourize Table -======================
for (var i = 9; i <= currentHour - 1; i++) {
    console.log("P:" + i)
    // element.classList.add("past");
}
for (var x = 17; x >= currentHour + 1; x--) {
    console.log("F:" + x)
    //element.classList.add("future");
}


//============- ON LOAD -======================
//createTables()