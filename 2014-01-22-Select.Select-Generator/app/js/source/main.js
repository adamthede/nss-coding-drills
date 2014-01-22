(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#add-option').click(addSelect);
  }

  var optionCount = 0;

  function addSelect(){
    var selected = $('#selection').val();
    $('#selection').val('');
    $('#selection').focus();

    var $option = $('<option>');
    $option.text(selected);
    $option.val(optionCount);

    $('#container').append($option);

    optionCount += 1;
  }


})();
