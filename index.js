$(document).ready(function() {
    $(window).scroll(function() {
        var scrollPos = $(this).scrollTop();
        $('.parallax-section').each(function() {
            var sectionTop = $(this).offset().top;
            var sectionHeight = $(this).outerHeight();
            var opacity = 1 - (scrollPos - sectionTop) / sectionHeight;
            if (opacity > 0) {
                $(this).css('background-color', 'rgba(255, 255, 255, ' + opacity + ')');
            } else {
                $(this).css('background-color', 'transparent');
            }
        });
    });
});
