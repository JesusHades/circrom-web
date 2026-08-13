const services = document.querySelectorAll(
  ".services-page__service"
);

const prefersReducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

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

    const finishOpening = (event) => {
      if (
        event.target !== content ||
        event.propertyName !== "opacity"
      ) {
        return;
      }

      content.removeEventListener(
        "transitionend",
        finishOpening
      );

      isAnimating = false;
    };

    content.addEventListener(
      "transitionend",
      finishOpening
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

    const finishClosing = (event) => {
      if (
        event.target !== content ||
        event.propertyName !== "opacity"
      ) {
        return;
      }

      content.removeEventListener(
        "transitionend",
        finishClosing
      );

      service.open = false;

      service.classList.remove(
        "is-closing"
      );

      isAnimating = false;
    };

    content.addEventListener(
      "transitionend",
      finishClosing
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