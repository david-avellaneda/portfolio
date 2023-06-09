import helpTheme from "@/helpers/helpTheme";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="no-scroll scroll">
        <script
          dangerouslySetInnerHTML={{
            __html: helpTheme,
          }}
        />
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `function callback(entries, observer) { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("fadeInUp"); observer.unobserve(entry.target); } }); } const options = { root: null, rootMargin: "0px", threshold: 0.4 }; const observer = new IntersectionObserver(callback, options); document.querySelectorAll(".animate").forEach((e) => observer.observe(e));`,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1P7WQNQ9R4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','G-1P7WQNQ9R4');`}
        </Script>
      </body>
    </Html>
  );
}
