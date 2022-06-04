import React, { useState, useEffect } from "react";
// import bgImage from "/public/bg-login.png";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const [role, setRole] = useState("");

  const handleRole = (e) => {
    setRole(e.target.value);
  };
  console.log(role);
  return (
    <>
      <div
        className="bg-light vh-100"
        // style={{
        //   backgroundColor: "var(--color-yellow)",

        //   minHeight: "100vh",
        // }}
      >
        <div className="container p-md-5 p-3 h-100">
          <div className="row h-100">
            <div className="col-md-6 d-none d-md-block">
              <div
                // className="col-md-6 d-none d-md-block"
                style={{
                  // backgroundImage: `url(/bg-login.png)`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  // background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url(/bg-login.png)`,
                  backgroundImage: `linear-gradient(rgba(94, 80, 161, 0.8)100%, rgba(94, 80, 161, 0.5)100%),url(/bg-login.png)`,
                  boxSizing: "border-box",
                  // border: "1px solid",
                  height: "100%",
                  // backgroundColor: "black",
                }}
              >
                <div className="p-5">
                  <Image
                    src="/logo_login.png"
                    width={150}
                    height={50}
                    alt="logo"
                  />

                  <div
                    // className="d-flex justify-content-center align-items-center border"
                    style={{ marginTop: "50%" }}
                  >
                    <div className="">
                      {/* <Image src="/logo_login.png" width={150} height={50} /> */}
                    </div>

                    <h1 className="text-light">
                      Temukan developer berbakat & terbaik di berbagai bidang
                      keahlian
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 h-100">
              <div className="d-md-none pb-5">
                <Image
                  src="/logo_login_mobile.png"
                  width={100}
                  height={30}
                  alt="logo"
                />
              </div>
              <div className="p-md-5">
                <h2>Reset password</h2>
                <p className="my-md-3">
                  Enter your user account&apos;s verified email address and we
                  will send you a password reset link.
                </p>
                <form action="" className="mt-md-5">
                  <div className="mb-3">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control p-md-3"
                      id="formGroupExampleInput"
                      placeholder="Masukan Alamat Email"
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-warning text-light p-md-3 w-100 mt-md-4 mt-2"
                  >
                    Send password reset email
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
