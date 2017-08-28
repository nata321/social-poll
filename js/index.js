$(function(){
  $('input[type=submit]').click(send);
})

function send(e) {
  e.preventDefault();
  
  if (!$('form')[0].checkValidity()) {
    $('#incorrect').show();
    return;
  }
  $.ajax({
    url: "https://formspree.io/https.ka@gmail.com", 
    method: "POST",
    data: {
      name: $('#name').val(),
      surname: $('#surname').val(),
      age: $('#age').val(),
      email: $('#email').val()
    },
    dataType: "json"
  }).done(function(){
    $('form')[0].reset();
    $('#thanks').show();
  })
}