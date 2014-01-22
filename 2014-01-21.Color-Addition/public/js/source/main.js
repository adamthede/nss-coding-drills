(function(){
  'use strict';

  $('document').ready(initialize);

  function initialize(){
    $('#addcolors').click(addColors);
  }

  function addColors(){
    var $colors = $('#colors').val();
    var $colorsArray = $colors.split(', ');
    var sum = 0;
    var $z = $('<div>');

    for(var i = 0; i < $colorsArray.length; i++){
      var $x = $('<div>');
      var $y = $colorsArray[i];
      var rgb1 = Math.round(Math.random()*255);
      var rgb2 = Math.round(Math.random()*255);
      var rgb3 = Math.round(Math.random()*255);
      var rgbColor = 'rgb(' + rgb1 + ', ' + rgb2 + ', ' + rgb3 + ')';

      $x.css('background', $y);
      $x.text(i + 1);
      sum = sum + i + 1;
      $z.css('background',rgbColor);
      $z.text(sum);
      
      $('#container').append($x);
    }
    $('#randomColor').append($z);
  }
})();
