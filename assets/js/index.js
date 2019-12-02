

  /*  Brian's Pseudo Code: consent given by writer to use for this assignment.
You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.
## Minimum Requirements
* The application displays timeblocks for standard business hours (9 a.m. to 5 p.m.).
* Each timeblock contains an input field and save button.
* Clicking a timeblock's "Save" button stores the input text in local storage, allowing the text to persist when the application is refreshed.
* The current day is displayed at the top of the calendar.
* Each timeblock is color coded to indicate whether it is in a past, present, or future hour.
*/
// function to display date and time at top of page

$(document).ready(function(){
  const currentDate = moment().format("dddd, MMMM, D, YYYY")
    const displayEl = document.getElementById("currentDay");
  displayEl.innerHTML = currentDate;

  const localarray= {
  0900: "",
  1000: "",
  1100: "",
  1200: "",
  1300: "",
  1400: "",
  1500: "",
  1600: "",
  1700: "",
  };
  const stringTime= JSON.stringify(localarray);
  localStorage.setItem("timearray", stringTime);
  const newTimeObj= JSON.parse(localStorage.getItem("timearray"));
  console.log(newTimeObj)
  for (const i in newTimeObj) {
    console.log("this is i", i)
    console.log("looping?")
     const row = $("<div>");
     row.addClass("row");
     const time= $("<h2>");
     time.text(i);
     const textarea= $("<textarea>");
     textarea.attr("id", "text" + i);
     const savebutton= $("<button>");
     savebutton.attr("id", i)
     savebutton.addClass("saveBtn");
     row.append(time, textarea, savebutton);
     $(".container").append(row);

  };
  $(document).on("click", ".saveBtn", function(event){
    event.target.preventDefault;
    console.log("you got clicked", $(this).attr("id"))
    console.log("what we typed", $("#text" + $(this).attr("id")).val());
    const output= JSON.stringify($(this).attr("id"));
    localStorage.setItem("input" + $(this).attr("id"), $("#text" + $(this).attr("id")).val());
    console.log(output)
    
  });
  
  });


// get the element that the info goes into
// decide on what it should look like 
// and then update it...
// should this run in a loop and update the clock reguraly?
// create timeblocks with inputs and buttons
// loop and dynamically or I could hard code it.
// add events to the submit button to save what is in the 
//     input to local storage
//  get the value out of local storage and populate 
//     the input with the data
// check to see what the color of the input should be based on the time
//      moment?
// look at the css for classes later for this
// store data in localstrage as an object where the key is the hour of the day...

/*{[
  09: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: "",
  15: "",
  16: "",
  17: "",
}
]*/
  

// brian did that thing today with an array... where was that at resources?


