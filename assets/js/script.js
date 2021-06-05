
var nowDate = $('#currentDay');
// var nowTime =
var nineT = $('#9am');
var tenT = $('#10am');
var elevenT = $('#11am');
var twelveT = $('#12pm');
var oneT = $('#1pm');
var twoT = $('#2pm');
var threeT = $('#3pm');
var fourT = $('#4pm');
var fiveT = $('#5pm');
var sixT = $('#6pm');
var savebtn = $('#savebuttons');

var currentDate = moment().format("dddd, MMMM Do YYYY");
var currentHour = moment().format("h");
console.log(currentHour);


nowDate.text('Today is ' + currentDate);

var nowTime = moment().format("HH");
console.log(nowTime);


// This section is for the load from console.
//
// for (var i = 0; i < 10; i++) {
  //   var todo = todos[i];
  //   li.setAttribute("data-index", i);


  //   li.appendChild(button);
  //   todoList.appendChild(li);
  // } 










//  Save using JQUERY
savebtn.on('click', function(){

  $('input[type="text"]').each(function(){    
      var id = $(this).attr('id');
      var value = $(this).val();
     localStorage.setItem(id, value);

  });   
});


// This section will be to check timeblocks and change their color depending on what current time it is with respect to the timeblock.
// Current = orange
// Past = grey
// upcoming = green