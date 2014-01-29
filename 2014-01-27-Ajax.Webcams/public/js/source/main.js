(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#addzip').click(addZip);
    $('#webcams').click(getWebcams);
    $('#clear').click(clearCams);
  }

  function addZip(){
    var zip = $('#zipcode').val();
    $('#zipcode').val('');
    $('#zipcode').focus();

    var $option = $('<option>');
    $option.val(zip);
    $option.text(zip);

    $('#dropdown').append($option);
  }

  function getWebcams(){
    var zip = $('#dropdown').val();
    var url = 'http://api.wunderground.com/api/c098c4de54fd58cb/webcams/q/CA/'+zip+'.json?callback=?';
    $.getJSON(url, receive);
  }

  function receive(data){
    var info = data.webcams;
    for(var i = 0; i < info.length; i++){
      var camData = data.webcams[i];
      var cam = camData.WIDGETCURRENTIMAGEURL;
      var neighborhood = camData.neighborhood;
      var $div = $('<div>');
      $div.addClass('cam');
      $div.css('background-image', 'url('+cam+')');
      $div.text(neighborhood);
      $('#currentimages').prepend($div);
    }
  }

  function clearCams(){
    $('#currentimages').empty();
  }

})();
