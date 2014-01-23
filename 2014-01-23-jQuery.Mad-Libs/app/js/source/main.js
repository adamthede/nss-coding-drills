(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#make-squares').click(addSquares);
    $('#words').on('click','.word',addToDisplay);
    $('#clear').click(resetApp);
  }

  function addSquares(){
    var wordString = $('#input').val();
    $('#input').val('');
    $('#input').focus();
    var wordArray = wordString.split(' ');

    for(var i = 0; i < wordArray.length; i++){
      var $words = $('<div>');
      $words.text(wordArray[i]);
      $words.addClass('word');
      $('#words').append($words);
    }
  }

  function addToDisplay(){
    var $text = $(this).text();
    $('#display').append($text+' ');
  }

  function resetApp(){
    $('#input').focus();
    $('#words').empty();
    $('#display').empty();
  }
})();
