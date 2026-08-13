const carousels = document.querySelectorAll(
    "[data-service-carousel]"
);

carousels.forEach((carousel) => {
    const slides = Array.from(
        carousel.querySelectorAll(
            "[data-service-carousel-slide]"
        )
    );

    const previousButton = carousel.querySelector(
        "[data-service-carousel-prev]"
    );

    const nextButton = carousel.querySelector(
        "[data-service-carousel-next]"
    );

    const currentCounter = carousel.querySelector(
        "[data-service-carousel-current]"
    );

    if (slides.length <= 1) {
        return;
    }

    let currentIndex = 0;

    const showSlide = (index) => {
        currentIndex =
            (index + slides.length) %
            slides.length;

        slides.forEach((slide, slideIndex) => {
            const isActive =
                slideIndex === currentIndex;

            slide.classList.toggle(
                "is-active",
                isActive
            );

            slide.setAttribute(
                "aria-hidden",
                String(!isActive)
            );
        });

        if (currentCounter) {
            currentCounter.textContent =
                String(currentIndex + 1);
        }
    };

    previousButton?.addEventListener(
        "click",
        () => {
            showSlide(currentIndex - 1);
        }
    );

    nextButton?.addEventListener(
        "click",
        () => {
            showSlide(currentIndex + 1);
        }
    );

    showSlide(0);
});