$(function(){
  $('input[type=submit').click(send);
})

function sendData(e) {
  e.preventDefault();
  
  if (!$('form')[0].checkValidity()) {
    $('#incorrect').show();
    return;
  }
    $(document).ready(function(){
    var isChecked = $("input:checkbox").is(":checked") ? 1:0; 
    }
    var option=$('input[type="radio"]:checked').val();
    $optionID = "="+optionID;
  $.ajax({
    url: "https://formspree.io/https.ka@gmail.com", 
    method: "POST",
    data: {
      name: $('#name').val(),
      surname: $('#surname').val(),
      age: $('#age').val(),
      email: $('#email').val(),
      data: { strID:$("input:checkbox").attr("id"), strState:isChecked },
      data: {"optionID" : $optionID}
      data: { strID:$("input:radio").attr("id"), strState:isChecked }
    },
    dataType: "json"
  }).done(function(){
    $('form')[0].reset();
    $('#thanks').show();
  })
}