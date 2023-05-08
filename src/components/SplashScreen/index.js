import styles from "./index.module.css";
import Logo from "../../../public/white-logo.svg";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback, useEffect, useState } from "react";
import particlesConfig from "@/config/particles-config";

const SplashScreen = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeLogo, setActiveLogo] = useState(false);
  const [hidden, setHidden] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    if (loaded) document.body.classList.remove("no-scroll");
  }, [loaded]);

  useEffect(() => {
    const logo = setTimeout(() => setActiveLogo(true), 2000);
    const loaded = setTimeout(() => setLoaded(true), 4000);
    const hide = setTimeout(() => setHidden(true), 5000);

    return () => clearTimeout(logo, loaded, hide);
  }, []);

  return (
    <>
      {!hidden && (
        <div className={`${styles.container} ${loaded && styles.loaded}`}>
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesConfig}
          />
          <Logo className={activeLogo ? styles.active : ""} />
        </div>
      )}
    </>
  );
};

export default SplashScreen;
