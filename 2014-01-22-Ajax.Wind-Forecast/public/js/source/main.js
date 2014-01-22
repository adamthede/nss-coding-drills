/* jshint camelcase: false */

(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#get-weather').click(displayConditions);
  }

  function displayConditions(){
    var url = 'http://api.wunderground.com/api/c098c4de54fd58cb/conditions/q/TN/Nashville.json?callback=?';
    $.getJSON(url, receive);
  }

  function receive(data){
    var windDes = data.current_observation.wind_string;
    var direction = data.current_observation.wind_dir;
    var degrees = data.current_observation.wind_degrees;
    var speedMph = data.current_observation.wind_mph;
    var gustMph = data.current_observation.wind_gust_mph;
    var conditions = [windDes, direction, degrees, speedMph, gustMph];
    var labels = ['Wind Description', 'Wind Direction', 'Wind Degrees', 'Wind Speed (MPH)', 'Gust Speed (MPH)'];

    for(var i = 0; i < conditions.length; i++){
      var $y = $('<div>');
      $y.text(labels[i] + ': ' + conditions[i]);
      $('#container').append($y);
    }
  }

})();
