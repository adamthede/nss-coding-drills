(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#inception').click(createBoxes);
  }

  function createBoxes(){
    var num = $('#number').val();
    $('#number').val('');
    $('#number').focus();

    for(var i = 0; i < num; i++){
      var $boxes = $('<div>');
      var dimension = num - 4*i;
      var red = Math.round(Math.random()*256);
      var green = Math.round(Math.random()*256);
      var blue = Math.round(Math.random()*256);

      $boxes.css('height', dimension);
      $boxes.css('width', dimension);
      $boxes.css('background-color', 'rgb('+red+','+green+','+blue+')');

      $('#container').wrap($boxes);
    }
  }
})();
