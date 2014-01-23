/* jshint camelcase: false */

(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#add-zip').click(setZip);
    $('#get-forecast').click(getForecast);
  }

  function setZip(){
    var zip = $('#zip').val();
    $('#zip').val('');
    $('#zip').focus();

    var $option = $('<option>');
    $option.val(zip);
    $option.text(zip);

    $('#zip-select').append($option);
  }

  function getForecast(){
    var zipCast = $('#zip-select').val();
    var url = 'http://api.wunderground.com/api/c098c4de54fd58cb/forecast/EN/q/'+zipCast+'.json?callback=?';
    $.getJSON(url, receive);
  }

  function receive(data){
    var forecast = data.forecast.simpleforecast.forecastday;
    for(var i = 0; i < forecast.length; i++){
      var day = forecast[i].date.weekday;
      var icon = forecast[i].icon_url;
      var condition = forecast[i].conditions;
      var high = forecast[i].high.fahrenheit;
      var low = forecast[i].low.fahrenheit;

      $('#day'+i).append(day);
      $('#day'+i).append('<img src='+icon+'>');
      $('#day'+i).append(condition);
      $('#day'+i).append('<p>'+high);
      $('#day'+i).append(low);
    }
  }

})();
