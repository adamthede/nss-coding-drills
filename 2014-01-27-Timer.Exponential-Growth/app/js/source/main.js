(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#grow').click(start);
  }

  var power = 0;

  function start(){
    var time = $('#interval').val();
    time = time * 1000;
    setInterval(exponentialGrowth, time);
  }

  function exponentialGrowth(){
    var base = $('#number').val() * 1;
    var number = Math.pow(base, power);
    appendNumber(base, power, number);
    power = power + 1;
  }

  function appendNumber(b,p,n){
    var $base     = $('<span>');
    var $exponent = $('<span>');
    var $equals   = $('<span>');
    var $number   = $('<span>');

    $base.text(b);
    $exponent.text(p);
    $equals.text('=');
    $number.text(n);

    var $li = $('<li>');
    $li.append($base, $exponent, $equals, $number);
    $('#container ul').prepend($li);
  }


})();
