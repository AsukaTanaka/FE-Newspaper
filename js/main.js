/* Scroll To Top */

function Scroll() {
    const scroll =  document.getElementById("scroll-button");

    window.addEventListener("scroll", () => {
        if(window.pageYOffset > 100) {
            scroll.classList.add("active");

            scroll.addEventListener("click", () => {
                scroll.classList.remove("active");
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                });
            });

        } else {
            scroll.classList.remove("active");
        }
    });
}

/* Carousel using Swiper */

if(document.querySelector(".sct-other .swiper")) {
    new Swiper('.sct-other .swiper', {
        slidesPerView: 1,
        loop: false,
        autoHeight: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0 : {
                slidesPerView: 1,
            }, 
            567 : {
                slidesPerView: 1,
            }, 
            768 : {
                slidesPerView: 1,
            }, 
            991 : {
                slidesPerView: 1,
            }, 
            1200 : {
                slidesPerView: 1,
            }
        },
    });
}

Scroll();