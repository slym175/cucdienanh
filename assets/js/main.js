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