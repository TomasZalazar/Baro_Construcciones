import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Ajusta este valor si cambias la altura de la topbar/navbar
const TOPBAR_HEIGHT = 40; // px (aprox. py-2 + padding)
const NAVBAR_HEIGHT = 64; // px (aprox. py-4 + padding)
const OFFSET = TOPBAR_HEIGHT + NAVBAR_HEIGHT;

/**
 * Hook para navegación con scroll suave a una sección por ID tras el cambio de ruta.
 * Si el ID no existe, hace scroll al top compensando la topbar y navbar.
 * @returns scrollToSection(id: string, path?: string)
 */
export function useSmoothScroll() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = useCallback(
    (id: string, path?: string) => {
      const doScroll = () => {
        setTimeout(() => {
          if (!id || id === "top" || id === "hero") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
          }
          const el = document.getElementById(id);
          if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - OFFSET;
            window.scrollTo({ top: y, behavior: "smooth" });
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }, 80);
      };

      if (path && location.pathname !== path) {
        navigate(path);
        setTimeout(doScroll, 120);
      } else {
        doScroll();
      }
    },
    [navigate, location.pathname]
  );

  return scrollToSection;
}
