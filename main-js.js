var apiKey = '9dd767299364de6371ad973498638457';
var url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + apiKey;

    $.getJSON(url, function(data) {
      $('#temperature').html(data.main.temp);
      $('#humidity').html(data.main.humidity);
    });

$("document").ready(function(){
    $("#main-header").hide();
    $("#main-header").show('slow');

    function lightMode(){
        $("#htmlcss").css("background-color", "white");
    }
});