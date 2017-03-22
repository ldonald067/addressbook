$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var numberInput = $("input#number").val();

    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".number").text(numberInput);

  });
});
