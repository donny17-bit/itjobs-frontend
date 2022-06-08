import Head from "next/head";
import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

function MainLayout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Navbar />
      <main className="main">{props.children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
