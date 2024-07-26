// navbar js
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-item .nav-link');

    function handleNavClick(event) {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        event.target.classList.add('active');
    }
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

    // Function to dynamically change active design based on window scroll
    function setActiveLink() {
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const navLink = document.querySelector(`.nav-link[data-section="${section.id}"]`);
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop - sectionHeight / 3 && window.pageYOffset < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    navLink.classList.add('active');
                });
            }
        });
    }

    // Initial call to setActiveLink to set the active link on page load
    setActiveLink();

    // Add event listener for scroll event to call setActiveLink on scroll
    window.addEventListener('scroll', setActiveLink);
});
// hero section slider js
var swiper = new Swiper(".hero-swiper", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

// product section slider js
var swiper = new Swiper(".product-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".product-button-next",
        prevEl: ".product-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        280: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 4,
            spaceBetween: 40
        }

    }
});

// image gallery section js
let currentImageIndex = 0;
let imagePaths = [];

function openFullScreen(img) {
    document.getElementById('fullscreenImage').src = img.src;
    currentImageIndex = imagePaths.findIndex(item => item.path === img.src);
    document.getElementById('fullscreenContainer').style.display = "flex";
}

function closeFullScreen() {
    document.getElementById('fullscreenContainer').style.display = "none";
}

function navigateImage(direction) {
    currentImageIndex = (currentImageIndex + direction + imagePaths.length) % imagePaths.length;
    document.getElementById('fullscreenImage').src = imagePaths[currentImageIndex].path;
}

document.addEventListener('DOMContentLoaded', function () {
    let galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach((img, index) => {
        imagePaths.push({ index: index, path: img.src });
        img.addEventListener('click', function () {
            openFullScreen(img);
        });
    });
});

// testimonial swiper js
var swiper = new Swiper(".testimonial-slider", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".testimonial-button-next",
        prevEl: ".testimonial-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        280: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 3,
            spaceBetween: 40
        }

    }
});

//Scrool To Top Button

function scrollTop() {
    if ($(window).scrollTop() > 1000) {
        $(".backtotopbtn").addClass("active");
    } else {
        $(".backtotopbtn").removeClass("active");
    }
}
$(function () {
    scrollTop();
    $(window).on("scroll", scrollTop);

    $(".backtotopbtn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1);
        return false;
    });
});
