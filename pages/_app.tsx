import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import { Component, JSXElementConstructor } from "react";
import Head from "next/head";

interface Props<T> {
  Component: JSXElementConstructor<T>;
  pageProps: T;
}

function App<T>({ Component, pageProps }: Props<T>) {
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
