const projects = document.querySelectorAll(
  ".portfolio-project"
);

const prefersReducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

const transitionDuration = 900;

projects.forEach((project) => {
  const summary = project.querySelector(
    ".portfolio-project__summary"
  );

  const content = project.querySelector(
    ".portfolio-project__content"
  );

  if (!summary || !content) {
    return;
  }

  let isAnimating = false;

  const resetClasses = () => {
    project.classList.remove(
      "is-opening",
      "is-open",
      "is-closing"
    );
  };

  const openProject = () => {
    if (isAnimating || project.open) {
      return;
    }

    if (prefersReducedMotion) {
      project.open = true;

      resetClasses();
      project.classList.add("is-open");

      return;
    }

    isAnimating = true;

    project.open = true;

    resetClasses();
    project.classList.add("is-opening");

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        project.classList.add("is-open");
        project.classList.remove("is-opening");
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

  const closeProject = () => {
    if (isAnimating || !project.open) {
      return;
    }

    if (prefersReducedMotion) {
      project.open = false;

      resetClasses();

      return;
    }

    isAnimating = true;

    project.classList.remove(
      "is-open",
      "is-opening"
    );

    project.classList.add("is-closing");

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

      project.open = false;

      project.classList.remove(
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

      if (project.open) {
        closeProject();
      } else {
        openProject();
      }
    }
  );
});