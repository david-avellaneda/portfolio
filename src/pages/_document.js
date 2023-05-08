import helpTheme from "@/helpers/helpTheme";
import { Html, Head, Main, NextScript } from "next/document";

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
      </body>
    </Html>
  );
}
