$(document).ready(function() {


 $(document).on('submit', '#weatherForm', function (evt) {
    evt.preventDefault();
    var $searchField = $('#search');
    var $submitButton = $('#submit');
   
    $searchField.prop("disabled", true);
    $submitButton.attr("disabled", true).val("Getting weather...");
    //AJAX
    var zip = $searchField.val();
    var apiKey = "758526980f7d550ed8ca4650624113cb";
    var units = "imperial";
    var weatherAPI = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=${units}&APPID=${apiKey}`;

    function displayWeather(data) {
      var currentTemp = Math.round(parseFloat(data.main.temp));
      var description = data.weather[0].description;
      var location = data.name;
      var maxTemp = Math.round(parseFloat(data.main.temp_max));
      var minTemp = Math.round(parseFloat(data.main.temp_min));
      var weatherHTML = `<div id="weatherResults">
        <h2 id="weatherTitle">Your Weather for the Day in ${location}:</h2>
        <div id="current">
        <p id="currentTemp">Current Weather:<br></p>
        <p class="weatherStats">${currentTemp}</p>
        <p id="weatherDescription">${description}</p>
        </div>
        <p id="highTemp" class="high-low">High:<br> ${maxTemp}</p>
        <p id="lowTemp" class="high-low">Low:<br> ${minTemp}</p>
        <div id="decisionButtons">
        <input type="submit" value="Nah, I'm Good" id="noGoButton" class="decisionButton">
        <a href="https://www.golfnow.com/" target="_blank">
        <input type="submit" value="Let's Do This!" id="goButton" class="decisionButton">
        </a>
        </div>
        </div>`
      $('#app').html(weatherHTML);
      $searchField.prop("disabled", false).val("");
      $submitButton.attr("disabled", false).val("Search");
    }
    $.getJSON(weatherAPI, displayWeather);

  }); // end click

}); // end ready