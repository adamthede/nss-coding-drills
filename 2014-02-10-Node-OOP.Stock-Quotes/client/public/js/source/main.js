(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#getquote').click(getQuote);
  }

  function getQuote(){
    var symb = $('#symbol').val();
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/quote?symbol='+symb+'&callback=?';
    console.log(url);
  }

})();

