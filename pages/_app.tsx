import "../styles/globals.css";

import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="relative">
      <div className="absolute top-0 right-0 bg-red-500 z-50 space-x-4">
        <Link href={"/large-screen"}>Large Screen</Link>
        <Link href={"/"}>Index</Link>
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
