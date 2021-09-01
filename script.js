$(function(){
    $("button").click(function(){
        $("body").toggleClass("black");
        $("button").toggleClass("but");
        $("header").toggleClass("head");
       $("b").toggleClass("beder");
       
    });
});

$(function() {
    $("#phone").click(function() {
        $("#smartphone").slideToggle(500);
    });
});
