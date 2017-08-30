$(function(){
  $('input[type=submit').click(sendData);
})
function sendData(e) {
    e.preventDefault();
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