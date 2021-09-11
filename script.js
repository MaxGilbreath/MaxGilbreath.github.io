$(document).ready(function(){
  $("input").keypress(function(){
    $(this).hide();
   });
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
 });
});
