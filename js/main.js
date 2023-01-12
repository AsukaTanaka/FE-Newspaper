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

function Swiper() {

}

Swiper();
Scroll();