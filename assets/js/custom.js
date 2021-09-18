$(window).scroll(function(){
    var st = $(this).scrollTop();
    console.log(st);
    if(st>0) {
        $("#header").addClass("on");
        $(".headerBtn").addClass("on");

    }else{
        $("#header").removeClass("on");
        $(".headerBtn").removeClass("on");
    }
});

$(".headerBtn").click(function(e){
    e.preventDefault();
    $("#header").toggleClass("on");
    $(this).toggleClass("on");

})

$(".sideBtn").click(function(e){
    e.preventDefault();
    $(this).toggleClass("on");
    $(".side").toggleClass("on");
})
$(".sample .click").click(function(e){
    e.preventDefault();
    $(this).siblings(".result").slideToggle();
    $(this).toggleClass("on");
})