(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#play').click(addShells);
    $('#shells').on('click','.card',winOrLose);
  }

  function addShells(){
    $('#win-lose').empty();
    var num1 = 0;
    var num2 = 0;
    var num3 = 0;

    while(num1 === num2 || num1 === num3 || num2 === num3){
      num1 = Math.floor(Math.random()*3);
      num2 = Math.floor(Math.random()*3);
      num3 = Math.floor(Math.random()*3);
    }
  
    var numbers = [num1, num2, num3];

    for(var i = 0; i < 3; i++){
      var $shells = $('<div>');
      $shells.text(i);
      $shells.attr('id',numbers[i]);
      $shells.addClass('card');
      $('#shells').append($shells);
    }
  }

  var statsWin = 0;
  var statsLose = 0;

  function winOrLose(){
    var $text = $(this);
    if($text.attr('id') === '1'){
      $('#win-lose').append('<p> WIN!');
      statsWin = statsWin + 1;
    }
    else{
      $('#win-lose').append('<p> Lose :(');
      statsLose = statsLose + 1;
    }
    $('#shells').empty();
    $('#stats').empty();
    $('#stats').append('<p>'+statsWin+' wins vs. '+statsLose+' losses');
  }

})();
