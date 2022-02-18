import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import { Component, FunctionComponent, JSXElementConstructor } from "react";
import Head from "next/head";

interface Props {
  Component: JSXElementConstructor<any>;
  pageProps: unknown;
}

function App({ Component, pageProps }: Props) {
  return (
    <>
      <Head>
        <title>Cedric Kring</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
