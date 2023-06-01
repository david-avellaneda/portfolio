import About from "@/components/About";
import Header from "@/components/Header";
import Presentation from "@/components/Presentation";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import SplashScreen from "@/components/SplashScreen";
import WordSlider from "@/components/WordSlider";
import en from "@/langs/en";
import es from "@/langs/es";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const { locale } = router;

  // t = translation
  const t = locale === "en" ? en : es;

  const [theme, setTheme] = useState(undefined);

  useEffect(() => {
    const root = document.documentElement.dataset.theme;
    root && root === "dark" ? setTheme("dark") : setTheme("light");
  }, []);

  return (
    <>
      <Head>
        <title>David Avellaneda | Front end Developer</title>
        <meta name="description" content={t.head.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta name="author" content="David Santiago Avellaneda Montero" />
      </Head>
      <SplashScreen />
      <Header
        theme={theme}
        setTheme={setTheme}
        t={t.body.header}
        lang={locale === "es" ? "es" : "en"}
      />
      <main>
        <Presentation t={t.body.main.presentation} />
        <About t={t.body.main.about} />
        <Skills t={t.body.main.skills} />
        <WordSlider t={t.body.main.wordSlider} />
        <Projects t={t.body.main.projects} />
      </main>
    </>
  );
}
