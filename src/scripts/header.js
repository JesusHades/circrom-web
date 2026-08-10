  const header = document.querySelector(".header");
  const menuButton = document.querySelector(".header__menu");
  const mobileLinks = document.querySelectorAll(
    ".navbar--mobile .navbar__link"
  );

  if (header && menuButton) {
    const closeMenu = () => {
      header.classList.remove("is-open");
      menuButton.classList.remove("is-open");

      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute(
        "aria-label",
        "Abrir menú de navegación"
      );
    };

    menuButton.addEventListener("click", () => {
      const isOpen = header.classList.toggle("is-open");

      menuButton.classList.toggle("is-open", isOpen);

      menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuButton.setAttribute(
        "aria-label",
        isOpen
          ? "Cerrar menú de navegación"
          : "Abrir menú de navegación"
      );
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }