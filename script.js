//use moment.js to get the current time and display it in the header. 
let currentTime = document.getElementById("currentTime");
let now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

document.querySelector("#currentTime").innerHTML = now

$(document).ready(function () {
  //use moment.js to display current day & time 
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); 
  //assign saveBtn click listener for user input
  $(".saveBtn").on("click", function () {
      console.log(this);
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      localStorage.setItem(time, text);
  })

  //load any saved data from LocalStorage - do this for each hour created. 
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  function hourTracking() {
      //get current number of hours using moment.js. 
      var currentHour = moment().hour();

      // loop over time blocks to toggle "past", "present" and "future" classes. 
      $(".time-block").each(function () {
          var blockHour = parseInt($(this).attr("id").split("hour")[1]);
          console.log( blockHour, currentHour)

          //check if we've moved past this time, link to css/html given classes of past, present, or future
          if (blockHour < currentHour) {
              $(this).addClass("past");
              $(this).removeClass("future");
              $(this).removeClass("present");
          }
          else if (blockHour === currentHour) {
              $(this).removeClass("past");
              $(this).addClass("present");
              $(this).removeClass("future");
          }
          else {
              $(this).removeClass("present");
              $(this).removeClass("past");
              $(this).addClass("future");
          }
      })
  }
  hourTracking();
})