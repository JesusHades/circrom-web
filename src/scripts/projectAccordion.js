const projects = document.querySelectorAll(
  ".portfolio-project"
);

const prefersReducedMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

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

    /*
     * Primero abrimos el <details> para que
     * el contenido exista visualmente.
     */
    project.open = true;

    resetClasses();
    project.classList.add("is-opening");

    /*
     * Esperamos dos frames para garantizar
     * que el navegador registre el estado
     * inicial antes de activar la transición.
     */
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        project.classList.add("is-open");
        project.classList.remove("is-opening");
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

      /*
       * Cerramos el <details> solo cuando
       * termina la transición de salida.
       */
      project.open = false;

      project.classList.remove(
        "is-closing"
      );

      isAnimating = false;
    };

    content.addEventListener(
      "transitionend",
      finishClosing
    );
  };

  summary.addEventListener("click", (event) => {
    event.preventDefault();

    if (project.open) {
      closeProject();
    } else {
      openProject();
    }
  });
});