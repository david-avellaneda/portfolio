import Header from "@/components/Header";
import SplashScreen from "@/components/SplashScreen";
import en from "@/locale/en";
import es from "@/locale/es";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;

  const [theme, setTheme] = useState(undefined);

  useEffect(() => {
    const root = document.documentElement.dataset.theme;
    root && root === "dark" ? setTheme("dark") : setTheme("light");
  }, []);

  return (
    <>
      <SplashScreen />
      <Header
        theme={theme}
        setTheme={setTheme}
        t={t.body.header}
        lang={locale === "es" ? "es" : "en"}
      />
    </>
  );
}
