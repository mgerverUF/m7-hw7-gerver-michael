var cityNameContainer = document.getElementById('location');
var weatherTodayContainer = document.getElementById('weather-today');

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        // Code Dealing With The API Data Goes Here
        // console.log(apiResult);
        // console.log(apiResult.name);

        // Print city name at the end of the header text
        var placeName = document.createTextNode(apiResult.name);
        cityNameContainer.appendChild(placeName);

        // console.log(apiResult.weather.description)

        // Print today's weather in the section text
        var weatherToday = document.createTextNode(apiResult.weather[0].description);
        weatherTodayContainer.appendChild(weatherToday);
    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=16801,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();