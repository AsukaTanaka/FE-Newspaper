function scrollToTop() {
    const toTop = document.querySelector(".scroll-to-top");

    window.addEventListener("scroll", () => {
        if(window.pageYOffset > 100) {
            toTop.classList.add("active");

            toTop.addEventListener("click", () => {
                toTop.classList.remove("active");
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                });
            });

        } else {
            toTop.classList.remove("active");
        }
    });
}

scrollToTop();
