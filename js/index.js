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
