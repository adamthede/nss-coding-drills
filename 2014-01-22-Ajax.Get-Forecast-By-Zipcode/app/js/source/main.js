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
    console.log(data);
  }

})();
