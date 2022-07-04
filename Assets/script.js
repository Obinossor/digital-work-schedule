//Varialbe Declaration

let calSaveBtn = $(".calSaveBtn");
//Fuctions

// color coded time block to represent previous, current and future time

function timeSlotIndicator() {
  let hour = moment().hours();

  $(".time-slot").each(function () {
    let currenttTime = parseInt($(this).attr("id"));

    if (currenttTime > hour) {
      $(this).addClass("future");
    } else if (currenttTime === hour) {
      $(this).addClass("currentt");
    } else {
      $(this).addClass("previous");
    }
  });
}
timeSlotIndicator();
// currentt Time
$("#currentDay").text(moment().format("dddd MMMM Do YYYY"));

function workPlanner() {
  $(".hour").each(function () {
    let currenttTime = $(this).text();
    let currentPlan = localStorage.getItem(currenttTime);
    if (currentPlan !== null) {
      $(this).siblings(".plan").val(currentPlan);
    }
  });
}
workPlanner();
// function to save the text to local storage on click event

calSaveBtn.on("click", function () {
  let time = $(this).siblings(".hour").text();
  let plan = $(this).siblings(".plan").val();
  localStorage.setItem(time, plan);
});
