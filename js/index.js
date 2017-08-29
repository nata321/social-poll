$(document).ready(function() {
    
    $("#form").submit(function(){
      $.ajax ({
            url: "https://formspree.io/https.ka@gmail.com",
            method: "POST",
            dataType: "json",
            data:$(this).serialize()
      }).done(function(){
            $('form')[0].reset();
            $('#thanks').show();
      })
      return false;
    });
});
// $(function(){
//   $('input[type=submit').click(sendData);
// })
// function sendData(e) {
//   e.preventDefault();
//   if (!$('form')[0].checkValidity()) {
//     $('#incorrect').show();
//     return;
//   }
//   $.ajax({
//         url: "https://formspree.io/https.ka@gmail.com", 
//         method: "POST",
//         dataType: "json",
//         data: {
//             name: $('#name').val(),
//             surname: $('#surname').val(),
//             age: $('#age').val(),
//             email: $('#email').val(),
//             gender: $( "[type=radio][name=gender]:checked" ).val(),
//             city: $( "select#city option:checked" ).val(),
//             moviehouse: $( "select#moviehouse option:checked" ).val(),
//             rooms: $( "select#rooms option:checked").val(),
//             genre: $( "select#genre option:checked").val(),
//             movie: $( "input[type=checkbox][name=movie]:checked").val(),
//             animation: $( "input[type=checkbox][name=animation]:checked").val(),
//             question: $( "input[type=radio][name=question]:checked" ).val(),
//             opinion: $('#opinion').val()
//     }
//   }).done(function(){
//     $('form')[0].reset();
//     $('#thanks').show();
//   })
// }