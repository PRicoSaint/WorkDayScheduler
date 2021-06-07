
var nowDate = $('#currentDay');
var savebtn = $('#savebuttons');

var currentDate = moment().format("dddd, MMMM Do YYYY");
var currentHour = moment().format("h");
console.log('This is the time in 12h format: ' + currentHour);


nowDate.text('Today is ' + currentDate);

var nowTime = moment().format("HH");
console.log('This is the time in 24h format: ' + nowTime);


// This section is for the load from console.
function loadEvents(){
  $('input').each(function(){
    var id = $(this).attr('id');
    var event = localStorage.getItem(id);
    $(this).val(event);
  });
    
};

loadEvents();

//  Save using JQUERY
savebtn.on('click', function(){

  $('input[type="text"]').each(function(){    
      var id = $(this).attr('id');
      var value = $(this).val();
     localStorage.setItem(id, value);

  });   
});


// This section will be to check timeblocks and change their color depending on what current time it is with respect to the timeblock.
// Current = red
// Past = grey
// upcoming = green
console.log(9 > 21);
function checkEvents(){
$('input').each(function(){
  var id = $(this).attr('id');
  var integer = parseInt(id);
  console.log('This is the current time block: ' + integer);
  if (integer === nowTime){
    $(this).addClass('present');
  }else if (integer > nowTime){
    $(this).addClass('future');
  }else if (integer < nowTime){
    $(this).addClass('past');
  }
});
}
checkEvents();
