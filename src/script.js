$(function(){
  $('.ctn').click(function(){
    if ($('#n').val() === 'UserName' && $('#p').val() === 'ooaa'){
      $('.form').fadeOut(200);
      $('#modal').show(500);
    } else {
      $('p').css('display','inline');
    }
  });
});