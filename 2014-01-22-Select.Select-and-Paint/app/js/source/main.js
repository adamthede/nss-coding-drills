(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#add-color').click(addSelect);
    $('#select-box').change(changeColor);
  }

  function addSelect(){
    var selected = $('#color-select').val();
    $('#color-select').val('');
    $('#color-select').focus();

    var opt = selected.toUpperCase();
    var optVal = selected.toLowerCase();

    var $option = $('<option>');
    $option.val(optVal);
    $option.text(opt);

    $('#select-box').append($option);
  }

  function changeColor(){
    var z = $('#select-box').val();
    $('#paint').css('background-color', z);
  }

})();
