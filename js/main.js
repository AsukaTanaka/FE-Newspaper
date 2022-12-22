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

function randomImage() {
    let image = document.getElementById("animation");

    let arrImage = ["https://tpc.googlesyndication.com/simgad/11619033556789528890", "https://tpc.googlesyndication.com/simgad/6752156452048706148", "https://tpc.googlesyndication.com/simgad/11396136500387258322", "https://tpc.googlesyndication.com/simgad/33911536141169662"];

    setInterval(function() {
        let random = Math.floor(Math.random() *4);
        image.src = arrImage[random];
    }, 5000);
}

randomImage();
scrollToTop();
