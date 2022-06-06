import Head from "next/head";
import React from "react";

export default function AuthLayout(props) {
  return (
    <>
      <Head>{props.title}</Head>
      <main>{props.children}</main>
    </>
  );
}
