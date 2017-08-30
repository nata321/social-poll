//  $(document).ready(function() {

// $("#form").submit(function(){
//   $.ajax ({
//         url: "https://formspree.io/https.ka@gmail.com",
//         method: "POST",
//         dataType: "json",
//         data:$(this).serialize()
//   }).done(function(){
//         $('form')[0].reset();
//         $('#thanks').show();
//   })
//   return false;
// });
// });
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
            name: $('#name').val(),
            surname: $('#surname').val(),
            age: $('#age').val(),
            email: $('#email').val(),
            gender: $( "[type=radio][name=gender]:checked" ).val(),
            city: $( "select#city option:checked" ).val(),
            moviehouse: $( "select#moviehouse option:checked" ).val(),
            rooms: $( "select#rooms option:checked").val(),
            genre: $( "select#genre option:checked").val(),
            data: {inputs: $('form').serialize()},
            animation: $( "input[type=checkbox][name=animation]:checked").val(),
            question: $( "input[type=radio][name=question]:checked" ).val(),
            opinion: $('#opinion').val()
        }
      }).done(function(){
        $('form')[0].reset();
        $('#thanks').show();
      })
    }