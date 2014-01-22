(function(){
  'use strict';

  $('document').ready(initialize);

  function initialize(){
    $('#addlis').click(addLis);
  }

  function addLis(){
    var $lis = $('#licount').val() * 1;
    for(var i = 1; i < $lis; i++){
      var $y = $('<li>');
      $y.text(i);
      if(i%2 === 0){
        $y.addClass('evenColor');
      }
      else{
        $y.addClass('oddColor');
      }
      $('#container').append($y);
    }
  }
})();
