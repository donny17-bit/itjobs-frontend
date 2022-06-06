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
      <main style={{ paddingTop: "70px" }}>{props.children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
