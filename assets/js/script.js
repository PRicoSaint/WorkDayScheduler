// This script is describes the functionality of the Work Day scheduler app.
// This section is for defining variables.
var nowDate = $('#currentDay');
var savebtn = $('#savebuttons');
var currentDate = moment().format("dddd, MMMM Do YYYY");
var nowTime = moment().format("HH");
console.log('This is the time in 24h format: ' + nowTime);
nowDate.text('Today is ' + currentDate);

// This section is for the load from console.
function loadEvents() {
  $('textarea').each(function () {
    var id = $(this).attr('id');
    var event = localStorage.getItem(id);
    $(this).val(event);
  });
};

//  Save using JQUERY .each method
savebtn.on('click', function () {

  $('textarea[type="text"]').each(function () {
    var id = $(this).attr('id');
    var value = $(this).val();
    localStorage.setItem(id, value);

  });
});
// This section will be to check timeblocks and change their color depending on what current time it is with respect to the timeblock.
// Present = red
// Past = grey
// Future = green
console.log(12 === 12);
function checkEvents() {
  $('textarea').each(function () {
    var id = $(this).attr('id');
    var integer = parseInt(id);
    console.log('This is the current time block: ' + integer);
    console.log(integer === nowTime);
    if (integer == nowTime) {
      $(this).addClass('present');
      console.log('this is present');
    } else if (integer > nowTime) {
      $(this).addClass('future');
    } else if (integer < nowTime) {
      $(this).addClass('past');
    }
  });
}
// This initiates functions for loading of variables from storage.
// It also initiates the checking of each timeblock and comparing it to the current time. It sets the color accordingly. Web app most be reloaded for colors to change according to the time.
loadEvents();
checkEvents();
