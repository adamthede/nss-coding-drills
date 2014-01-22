(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#addbuttons').click(addButtons);
  }

  function addButtons(){
    for(var i = 0, i < 2; i++)
        $input = input(type='button', value=i);
  }

})();

// $('#one').click(make2Buttons);
// $('#container').on('click', 'button', dynamicClick);
//
// function make2Buttons(){
//  var b2 = '<button id="two">Make One Disappear</button>'
//  var b3 = '<button id="three">Make Two Disappear</button>'
//  $('#container').append(b2,b3);
//  }
//
// function dynamicClick(){
//  switch(this.id){
//  case 'two':
//    $('#one').detach();
//  case 'three':
//    $('#two').detach();
//    }
//    }
