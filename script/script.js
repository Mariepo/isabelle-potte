$(document).ready(function() {
    // Burger menu
    $('.hamburger').on("click",function (event) {
        // show dropdown
        $('.nav-menu').toggleClass("active")
        // change burger icon
        if($('.hamburger-icon').text() === "menu") {
            $('.hamburger-icon').text("close");
        } else {
            $('.hamburger-icon').text("menu");
        }
    })
    // close menu on link click
    $('.nav-item').on("click", function (event) {
        $('.nav-menu').removeClass('active');
        $('.hamburger-icon').text("menu");
    })
        
    // Animations CSS
    function hideElementToAnimate(elementToHide) {
        $(elementToHide).css("visibility", "hidden");
    }
    hideElementToAnimate('.accompagnement-details');
    hideElementToAnimate('.questions-frequentes-details');
    hideElementToAnimate('.diplome-details');
    hideElementToAnimate('.hero-details');

    function triggerAnimationOnScroll(elementToAnimate, animation) {
        $(elementToAnimate).each(function(index) {
            if (isScrolledIntoView($(this))) {
                    setTimeout(() => {
                    $(this).addClass(animation);
                    $(this).css("visibility", "visible");
                }, index * 1000);
            }
        });
    }
    $(window).on('scroll', function() {
        triggerAnimationOnScroll(".accompagnement-details", 'bounce-in-up');
        triggerAnimationOnScroll(".questions-frequentes-details", 'slide-up');
        triggerAnimationOnScroll(".diplome-details", 'slide-from-left');
    });
    console.log($(".questions-frequentes-details"))


    
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop;
        
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    
    function triggerAnimationWhitoutScroll(elementToAnimate, animation) {
        $(elementToAnimate).each(function(index) {
            setTimeout(() => {
                $(this).addClass(animation);
                $(this).css("visibility", "visible");
            }, index * 1000);
        });
    }
    triggerAnimationWhitoutScroll(".hero-details", 'slight-slide-up');

})