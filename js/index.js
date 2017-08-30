$(function(){
  $('input[type=submit').click(sendData);
})
function sendData(e) {
    e.preventDefault();
    let movieOne = $('#movie-1').val();
    let movieTwo = $('#movie-2').val();
    let movieThree = $('#movie-3').val();
    let movieFour = $('#movie-4').val();
    let animationOne = $('#animation-1').val();
    let animationTwo = $('#animation-2').val();
    let animationThree = $('#animation-3').val();
    let animationFour = $('#animation-4').val();
    if (!$('form')[0].checkValidity()) {
    $('#incorrect').show();
    return;
  }
  $.ajax({
        url: "https://formspree.io/https.ka@gmail.com", 
        method: "POST",
        dataType: "json",
        data: {
            data: {inputs: $('form').serialize()}
        }
      }).done(function(){
        $('form')[0].reset();
        $('#thanks').show();
      })
    }