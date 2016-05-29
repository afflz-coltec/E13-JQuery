$(document).ready(function(){
  $(".mainpanel").click(function(){
    $("body").css("background-color", $(this).css("background-color"));
    console.log("UOU");
  });
});
