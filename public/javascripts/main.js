$("#about").click(function() {
  $('html, body').animate({
    scrollTop: $(".aboutTitle").offset().top - 70
  }, 2000);
});
$("#project").click(function() {
  $('html, body').animate({
    scrollTop: $(".projects").offset().top - 40
  }, 2000);
});

$("#contact").click(function() {
  $('html, body').animate({
    scrollTop: $(".contactTitle").offset().top
  }, 2000);
});

$("#contactlink").click(function() {
  $('html, body').animate({
    scrollTop: $(".contactTitle").offset().top
  }, 2000);
});

$("#home").click(function() {
  $('html, body').animate({
    scrollTop: $(".home").offset().top - 60
  }, 2000);
});



$(document).ready(function() {

  $('form').on('submit', function(e){
   e.preventDefault();
   $('#firstname').val("")
   $('#lastname').val("")
   $('#company').val("")
   $('#email').val("")
   $('#message').val("")
 });

  // Initialize the plugin
  $('#crypt').popup();
  $('#scurry').popup();
  $('#dachat').popup();
  $('#greads').popup();


});
