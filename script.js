// Function to toggle the 'active' class on the search form and hide the navbar
const toggleSearchForm = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
};

// Function to toggle the 'active' class on the login form
const toggleLoginForm = () => {
    loginForm.classList.toggle('active');
};

// Event listener for search button click
document.querySelector('#search-btn').onclick = toggleSearchForm;

// Event listener for login button click
document.querySelector('#login-btn').onclick = toggleLoginForm;

// Event listener for close login button click
document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
};

// Function to handle the scroll event and add or remove the 'active' class on header-2
const handleScroll = () => {
    const header2 = document.querySelector('.header .header-2');
    if (window.scrollY > 80) {
        header2.classList.add('active');
    } else {
        header2.classList.remove('active');
    }
};

// Event listener for scroll event
window.onscroll = handleScroll;

// Event listener for window load event
window.onload = () => {
    handleScroll(); // Check scroll position on page load
    fadeOut(); // Call fadeOut function
};

// Function to add 'active' class on header-2 after a timeout (3 seconds)
function loader() {
    document.querySelector('.loader-container').classList.add('active');
}

// Function to fade out loader after 3 seconds
function fadeOut() {
    setTimeout(loader, 3000);
}

// Swiper initialization for the books-slider
new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

// Swiper initialization for the featured-slider
new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        450: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 5,
        },
        1024: {
            slidesPerView: 6,
        },
    },
});

// Swiper initialization for the arrivals-slider
new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// Swiper initialization for the reviews-slider
new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        450: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 5,
        },
        1024: {
            slidesPerView: 6,
        },
    },
});

// Swiper initialization for the blogs-slider
new Swiper(".blogs-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

const imgs = document.querySelectorAll('.header-slider ul img ');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n = 0;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}

changeSlide();

prev_btn.addEventListener('click', (e)=>{
    if (n < 0) {
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
})

next_btn.addEventListener('click', (e)=>{
    if (n < imgs.length - 1) {
        n++;
    }else{
        n = 0;
    }
    changeSlide();
})

const scrollContainer = document.querySelectorAll(".products");

for (const item of scrollContainer) {
    item.addEventListener("wheel", (e) => {
        e.preventDefault();
        if (e.deltaY > 0) {
            item.scrollLeft += 100;
        } else {
            item.scrollLeft -= 100;
        }
    });
}
document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.arrivals-slider', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.arrivals-slider', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
            }
        }
    });
});





