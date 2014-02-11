(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#getquote').click(getQuote);
  }

  function getQuote(){
    var symbol = $('#symbol').val();
    var url = window.location.origin.replace(/[0-9]{4}/g, '4000');
    url += '/quote?symbol='+symbol+'&callback=?';
    $.getJSON(url, function(data){
      console.log(data);
      $('#response').text(data.symbol+' '+data.quote);
    });
  }

})();

