import "../styles/globals.css";

import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="relative">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
