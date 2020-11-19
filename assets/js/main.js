$(function () {
    $('.head-carousel').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: false,
        dots: true,
        autoHeight: true,
        responsive: {
            
        }
    })

    $('.btn-search').click(function (e) {
        e.preventDefault();
        $('.search-form').toggleClass('d-none');
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