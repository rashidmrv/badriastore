// preloader
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - 
$(window).on('load', function(event) {
    $('#preloader').delay(500).fadeOut(500);
});
// preloader



//  testimonial - owl-carousel
$(document).ready(function() {
    $('.testimonial .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        center: true,
        nav: true,
        NavText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>",
        ],
        responsive: {
            0: {
                items: 1,

            },
            800: {
                items: 3,
                // nav: false
            },
            1000: {
                items: 3,
                // nav: true,
                // loop: false
            }
        }
    })
})


//  testimonial - owl-carousel




//  gallery-section - owl-carousel
$(document).ready(function() {
    $('.gallery-section .owl-carousel').owlCarousel({

        loop: true,
        margin: 10,
        responsiveClass: true,
        // center: true,
        nav: true,
        NavText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>",
        ],
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            700: {
                items: 3
            },
            1000: {
                items: 4
            },

        }
    })
})

//  gallery-section - owl-carousel


// Detect request animation frame
let observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElement = document.querySelectorAll('.hidden')

hiddenElement.forEach((el) => observer.observe(el))