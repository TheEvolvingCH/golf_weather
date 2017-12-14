$(document).ready(function() {
  const date = new Date();
  const time = date.getTime();
  
  //Welcomes user to page
  const intro = () => {
    let nameCheck = localStorage.getItem('name');
    if (nameCheck === null) {
      $('#app').html(`<p class="title">Want to Golf Today, eh?<p>`);
      
      let transitions = setInterval(() => {
          $('#app').fadeToggle(500);
      }, 1500);
                            
      setTimeout(() => {
          $('#app').html(`<p class="title">Let's see how that works out for you<p>`);
      }, 2000);
  
      setTimeout(() => {
          $('#app').html(`<div id="nameSection"><p>First, what's your name?</p>
          <form id="nameForm">
            <input type="text" name="name" id="nameEntry">
            <input type="submit" value="Next" id="nameButton" class="buttons">
          </form></div>`); 
        clearInterval(transitions);
      }, 6000);
    } else {
      $('#app').html(`<div id="welcomeBack"><p id="backGreeting">Welcome back, ${nameCheck}</p>
      <p id="notName">Not ${nameCheck}?</p>
      </div>`); 
       setTimeout(() => {
          $('#welcomeBack').fadeOut(1000);
      }, 2000);
      setTimeout(() => {
          weatherEntry();
      }, 2500);
    }
  };


  intro();

  //Generates search field for user to enter zip code
  const weatherEntry = () => {
    $('#app').html(`<div id="weatherSearch"><p>Where are you looking to play ${localStorage.name}?</p>
      <form id="weatherForm">
        <label for="search">Enter Zip Code</label>
        <input type="search" name="search" id="search">
        <input type="submit" value="Search" id="submit" class="buttons">
      </form>
      </div>`).fadeIn(1000);
  };

  
  /*Event handler for name submission.  Uses .on rather than .click because the form is 
  generated dynamically and therefore .click will not work.*/
  $(document).on('submit', '#nameForm', function(evt) {
    evt.preventDefault();
    const nameField = $('#nameEntry');
    let userName = nameField.val();
    localStorage.name = userName;
    console.log(userName);  
    $('#nameSection').fadeOut(1000); 
    setTimeout(() => {
      weatherEntry();
    }, 1000);
  });


  /*Event handler for button on welcome screen with user name.  Uses .on rather than .click because the form is generated dynamically and therefore .click will not work.*/
  $(document).on('click', '#notName', function () {
    localStorage.removeItem('name');

  });

}); // end ready
