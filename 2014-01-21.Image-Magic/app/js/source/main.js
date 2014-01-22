(function(){
  'use strict';

  $('document').ready(initialize);

  function initialize(){
    $('#addimage').click(addImage);
  }

  function addImage(){
    var $image = $('#webphoto').val();
    var img = 'url(' + $image + ')';
    var $y = $('<div>');

    $y.css('background-image', img);
    $y.css('height', '100px');
    $y.css('width', '100px');
    $y.css('background-size', 'cover');
    $y.css('float', 'left');
    $y.css('box-shadow', '5px 5px 10px lavender');

    $('#container').append($y);
  }

})();
