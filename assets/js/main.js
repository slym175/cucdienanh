$(function () {
    $('.head-carousel').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        dots: true,
        autoHeight: true,
        responsive: {
            
        }
    })

    $('.newest-news-carousel').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        dots: true,
        autoHeight: true,
        responsive: {
            
        }
    })

    $('.btn-search').click(function (e) {
        e.preventDefault();
        $('.search-form').toggleClass('d-none');
    })

    $('.general-news-row').owlCarousel({
        loop: true,
        margin: 16,
        items: 1,
        nav: true,
        dots: false,
        autoHeight: true,
        responsive: {
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })
});


wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function (box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();