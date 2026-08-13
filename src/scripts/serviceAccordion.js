const services = document.querySelectorAll(
  ".services-page__service"
);

const prefersReducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

const transitionDuration = 900;

services.forEach((service) => {
  const summary = service.querySelector(
    ".services-page__service-summary"
  );

  const content = service.querySelector(
    ".services-page__service-content"
  );

  if (!summary || !content) {
    return;
  }

  let isAnimating = false;

  const resetClasses = () => {
    service.classList.remove(
      "is-opening",
      "is-open",
      "is-closing"
    );
  };

  const openService = () => {
    if (isAnimating || service.open) {
      return;
    }

    if (prefersReducedMotion) {
      service.open = true;

      resetClasses();
      service.classList.add("is-open");

      return;
    }

    isAnimating = true;

    service.open = true;

    resetClasses();
    service.classList.add("is-opening");

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        service.classList.add("is-open");
        service.classList.remove("is-opening");
      });
    });

    let finished = false;

    const finishOpening = () => {
      if (finished) {
        return;
      }

      finished = true;

      content.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );

      isAnimating = false;
    };

    const handleTransitionEnd = (event) => {
      if (
        event.target !== content ||
        event.propertyName !== "opacity"
      ) {
        return;
      }

      finishOpening();
    };

    content.addEventListener(
      "transitionend",
      handleTransitionEnd
    );

    setTimeout(
      finishOpening,
      transitionDuration
    );
  };

  const closeService = () => {
    if (isAnimating || !service.open) {
      return;
    }

    if (prefersReducedMotion) {
      service.open = false;

      resetClasses();

      return;
    }

    isAnimating = true;

    service.classList.remove(
      "is-open",
      "is-opening"
    );

    service.classList.add("is-closing");

    let finished = false;

    const finishClosing = () => {
      if (finished) {
        return;
      }

      finished = true;

      content.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );

      service.open = false;

      service.classList.remove(
        "is-closing"
      );

      isAnimating = false;
    };

    const handleTransitionEnd = (event) => {
      if (
        event.target !== content ||
        event.propertyName !== "opacity"
      ) {
        return;
      }

      finishClosing();
    };

    content.addEventListener(
      "transitionend",
      handleTransitionEnd
    );

    setTimeout(
      finishClosing,
      transitionDuration
    );
  };

  summary.addEventListener(
    "click",
    (event) => {
      event.preventDefault();

      if (service.open) {
        closeService();
      } else {
        openService();
      }
    }
  );
});