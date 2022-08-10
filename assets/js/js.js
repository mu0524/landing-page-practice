$(function () {
    $('[data-toggle="tooltip"]').tooltip()

    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
        $('#footer-scroll-to-top').fadeIn();
        } else {
        $('#footer-scroll-to-top').fadeOut();
        }
    });

    $('#scroll-to-top').click(function () {
        var target = $(this.hash);
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 800);

        return false;

    });
})
