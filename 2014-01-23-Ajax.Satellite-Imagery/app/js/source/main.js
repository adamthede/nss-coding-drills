/* jshint camelcase: false */

(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#get-imagery').click(getImagery);
  }

  function getImagery(){
    var zipCode = $('#get-zip').val();
    $('#get-zip').val('');
    $('#get-zip').focus();

    var url = 'http://api.wunderground.com/api/c098c4de54fd58cb/satellite/EN/q/'+zipCode+'.json?callback=?';
    $.getJSON(url, receive);
  }

  function receive(data){
    var sat1 = data.satellite.image_url;
    var sat2 = data.satellite.image_url_ir4;
    var sat3 = data.satellite.image_url_vis;

    $('#img1').attr('src', sat1);
    $('#img2').attr('src', sat2);
    $('#img3').attr('src', sat3);
  }
})();
