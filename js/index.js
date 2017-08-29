$(document).ready(function() {
    
    $("#form").submit(function(){
        $( "input[type=radio][name=gender]:checked" ).val();
        $( "select#city option:checked" ).val();
        $( "select#moviehouse option:checked" ).val();
        $( "select#rooms option:checked").val();
        $( "select#genre option:checked").val();
        $( "input[type=checkbox][name=movie]:checked").val();
        $( "input[type=radio][name=question]:checked" ).val();

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
