
//Defaults
$("#anime").velocity('transition.flipBounceXIn',{ stagger: 1000 });
$("#cardsBase").hide();
$("#pricebase").hide();
$("#footerBase").hide();

//Setting Timeout For Animations to Roll in
(function(){
	myVar = setTimeout(animateCards, 2000);
})();

 (function(){
	myVar = setTimeout(animatePrices, 2000);
})();

//Uses Velocity.js for smooth transitions.
function animateCards(){
	$("#cardsBase").show();
	$("#card_1").velocity('transition.bounceLeftIn',{ stagger: 1000 });
	$("#card_2").velocity('transition.bounceDownIn',{ stagger: 1000 });
	$("#card_3").velocity('transition.bounceRightIn',{ stagger: 1000 });
};

function animatePrices(){
	$("#pricebase").show();
	$("#card_4").velocity('transition.flipXIn',{ stagger: 1000 });
	$("#card_5").velocity('transition.flipXIn',{ stagger: 1000 });
	$("#footerBase").show();
};

//On Page Scroll Linking Menus 
$("#click1").click(function() {
    $('html,body').animate({
        scrollTop: $("#newsletter").offset().top},
        'slow');
});
$("#click2").click(function() {
    $('html,body').animate({
        scrollTop: $("#cardsBase").offset().top},
        'slow');
});
$("#click3").click(function() {
    $('html,body').animate({
        scrollTop: $("#pricebase").offset().top},
        'slow');
});
$("#click4").click(function() {
    alert("Didn't know where this should have landed :P");
});