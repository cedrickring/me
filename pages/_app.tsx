import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import React from "react";
import Head from "next/head";

function App({ Component, pageProps }) {
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
