import styles from "./index.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = ({ theme, setTheme, t, lang }) => {
  const { img, menuBtn, items, modes } = t;

  const [scrolled, setScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(undefined);

  const handleClick = () => setIsOpen(!isOpen);

  const handleThemeChange = (e) => setTheme(e.target.value);

  useEffect(() => {
    if (window.innerWidth < 1000) {
      if (isOpen !== undefined) {
        isOpen
          ? document.body.classList.add("no-scroll")
          : document.body.classList.remove("no-scroll");
      }
    }
  }, [isOpen]);

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

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1000) {
        setIsSmallScreen(true);
      } else {
        setIsOpen(false);
        setIsSmallScreen(false);
      }
    }

    function handleScroll() {
      window.scrollY > 60 ? setScrolled(true) : setScrolled(false);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    handleResize(); // llamamos la función en el montaje inicial para inicializar el estado
    handleScroll();

    // limpiamos los event listeners en el desmontaje
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${isOpen ? styles.activeHeader : ""} ${
        scrolled ? styles.scrolled : ""
      }`}
    >
      <nav>
        <div className={styles.logo}>
          <Image
            src={img.whiteLogo.src}
            alt={img.whiteLogo.alt}
            style={{ display: !isOpen && !scrolled ? "block" : "none" }}
            width={180}
            height={70}
            sizes="(min-width: 320px) 100vw, 100vw"
          />
          <Image
            src={img.originalLogo.src}
            alt={img.originalLogo.alt}
            style={{ display: isOpen ? "block" : "none" }}
            width={180}
            height={70}
            sizes="(min-width: 320px) 100vw, 100vw"
          />
          <Image
            src={img.originalLogo.src}
            alt={img.originalLogo.alt}
            style={{ display: !isOpen && scrolled ? "block" : "none" }}
            width={180}
            height={70}
            sizes="(min-width: 320px) 100vw, 100vw"
          />
        </div>
        <button
          onClick={handleClick}
          className={`${styles.iconMenu} ${isOpen ? styles.openMenu : ""}`}
          aria-label={
            isOpen ? menuBtn.arialLabel.close : menuBtn.arialLabel.open
          }
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
