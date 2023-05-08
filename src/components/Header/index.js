import styles from "./index.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import WhiteLogo from "../../../public/white-logo.svg";
import OriginalLogo from "../../../public/original-logo.svg";

const Header = ({ theme, setTheme, t, lang }) => {
  const { img, items, modes } = t;

  const [scrolled, setScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  const handleThemeChange = (e) => setTheme(e.target.value);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1000) {
        setIsSmallScreen(true);
      } else {
        setIsOpen(false);
        setIsSmallScreen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // llamamos la función en el montaje inicial para inicializar el estado

    // limpiamos el event listener en el desmontaje
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleScroll() {
      window.scrollY > 60 ? setScrolled(true) : setScrolled(false);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (theme !== undefined) {
      if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [theme]);

  return (
    <header
      className={`${styles.header} ${isOpen ? styles.activeHeader : ""} ${
        scrolled ? styles.scrolled : ""
      }`}
    >
      <nav>
        {scrolled ? (
          <div className={styles.logo}>
            <OriginalLogo aria-label={img.alt} />
          </div>
        ) : (
          <div className={styles.logo}>
            {isOpen ? (
              <OriginalLogo aria-label={img.alt} />
            ) : (
              <WhiteLogo aria-label={img.alt} />
            )}
          </div>
        )}
        <button
          onClick={handleClick}
          className={`${styles.iconMenu} ${isOpen ? styles.openMenu : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul
          className={`${styles.items} ${isOpen ? styles.itemsActive : ""}`}
          style={{
            transition: isSmallScreen ? "transform 0.5s ease-in-out" : "none",
          }}
        >
          {items.map((el, index) => (
            <li key={index}>
              <a href={el.href} onClick={handleClick}>
                {el.item}
              </a>
            </li>
          ))}
          <li className={styles.langs}>
            <Link
              href="/"
              locale="es"
              className={lang === "es" ? styles.langActive : ""}
              onClick={handleClick}
            >
              ES
            </Link>
            <Link
              href="/"
              locale="en"
              className={lang === "en" ? styles.langActive : ""}
              onClick={handleClick}
            >
              EN
            </Link>
          </li>
          <li className={styles.mode}>
            <select value={theme} onChange={handleThemeChange}>
              {modes.map((el, index) => (
                <option key={index} value={el.value}>
                  {el.mode}
                </option>
              ))}
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
