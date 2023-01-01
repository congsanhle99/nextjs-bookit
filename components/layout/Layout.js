import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";

const Layout = ({ children, title = "Book Best Hotels for your holiday!!!" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" charSet="utf-8" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
