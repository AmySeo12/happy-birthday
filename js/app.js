var ir= function(){
  var idAncre = $(this).attr("data");
    $('html, body').stop().animate({
        scrollTop:$(idAncre).offset().top   
    }, 800);
  return false;
}
$(document).ready(function(){
  $(".ir").click(ir);
});
$(window).scroll(function(){
})