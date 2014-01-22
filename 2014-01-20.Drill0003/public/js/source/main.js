(function(){
  'use strict';
  
  function initialize(){
    $('#add-color').click(addColor);
  }

  function addColor(){
    var colorVal = $('#color').val();
    $('#color').val('');
    $('#color').focus();

    var $paintBrush = $('<div>');
    $paintBrush.addClass('colorbox');
    $paintBrush.css('background-color', colorVal);
    $('#colors').prepend($paintBrush);
  }

  $(document).ready(initialize);
})();

