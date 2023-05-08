import balooThambi2 from "@/font";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className={`${balooThambi2.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
