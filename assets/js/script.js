
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

nowDate.text('Today is ' + currentDate);

var nowTime = moment().format("HH");


// TODO: Stole code from previous previous week - to do list. Need to convert it to JQUERY and get attribute to save it to local console.

for (var i = 0; i < 10; i++) {
    var todo = todos[i];
    li.setAttribute("data-index", i);


    li.appendChild(button);
    todoList.appendChild(li);
  }



  savebtn.addEventListener("click", function(event) {
    var element = event.target;
    event.preventDefault();
    // Checks if element is a button
    if (element.matches("button") === true) {
      // Get its data-index value and remove the todo element from the list
    var row = element.parentElement.getAttribute("data-index");
    var event =   
    localStorage.setItem("todos", JSON.stringify(todos));

     
    }
  });





