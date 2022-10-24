if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', mainFunction);
} else {
  mainFunction();
}

function mainFunction() {
  // *************************************************************************
  //  Exercise #1
  //      Change the color of the text within the button with an id of #change-text-color.
  //
  //      1.  Select the button with an id of #change-text-color and save
  //          it to a variable named changeColorButton.
  //      2.  Add a click event listener to the button with an id #change-text-color.
  //      3.  Add a function that will change the text color in the button to black.
  // ***************************************************************************
  //  Exercise #2
  //      When user clicks on the change text color button the text in the button
  //      should change to "Hello World".
  //
  //      1.  Select the button with an id of #change-text-color and save it to a
  //          variable named changeTextButton.
  //      2.  Add a click event listener to the button with an id #change-text-color.
  //      3.  Add a function that will change the text in the button to "Hello World".
  // ***************************************************************************
  //  Exercise #3
  //      When user clicks on the subscribe button, an alert box should pop up
  //      with the message "Thank you for subscribing".
  //
  //      1.  Select the button with an id of #subscribe-button and save it to a
  //          variable named subscribeButton.
  //      2.  Add a click event that will display an alert box with the message
  //          "Thank you for subscribing".
  // ***************************************************************************
  //  Exercise #4
  //      When user clicks each of the buttons on the card elements with class
  //      name of .card-btn the button should disappear.
  //
  //      1.  Select the buttons with a class name of .card-btn and save them to a
  //          variable named cardButton.
  //      2.  Add a click event to each button that will trigger a function which will cause the
  //          visibility property of the button clicked to be changed to hidden. You
  //          should use some sort of loop to add the event listener to each button.
  // ***************************************************************************
  //  Exercise #5
  //      When user enters text in the input field, if the letter "h" is entered in
  //      the input field, display an alert box with the text from the input field.
  //
  //      1.  Select the input field with a class of .input-field and save it to a
  //          variable named userInput.
  //      2.  Add a keyup event that checks the value of the user input. If value contains
  //          the letter "h", display alert box. The .includes method may be usefull here.
  // ****************************************************************************
  //  Exercise #6
  //      When user moves mouse over the words "Subscribe To Our Newletter" the text color
  //      should change to red. When user moves mouse away the text color should change back to white.
  //
  //      1.  Select the h3 element and save it to a variable named newsletterHeader.
  //      2.  Add a mouseover event that will change the color of the text in the h3 element to red.
  //      3.  Add a mouseout event that will change the color of the text in the h3 element back to white.
  // *****************************************************************************
  //  Exercise #7
  //      When user clicks on the <Add div> button a new div element should be created
  //      with a <p> tag containing some text.
  //      1.  Select the button with an id of #add-element and save it to a variable named addDiv.
  //      2.  Select the div container with an id of #add-element-section and save it to a
  //          variable named parentDiv so that you are able to append your new div to the page.
  //      3.  Add a click event to the addDiv button which will run a function creating a new div
  //          with a <p> tag containing some text.
}
