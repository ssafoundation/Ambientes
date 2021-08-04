$(document).ready(function() {
    $('.slick-slider-wrap').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        centerPadding: 50,
        // autoplay: true,
    });
});
$(document).ready(function() {
    $(".nav-show").click(function() {
        $(".mobile-menu").toggle('slow');
    });
});
$(document).ready(function() {
    $('.project-list').isotope({

    });
});

$(document).ready(function() {
    $('.project-navbar li').on('click', function() {
        var selector = $(this).attr('data-filter');
        $('.project-list').isotope({
            filter: selector,
        });
    });
});