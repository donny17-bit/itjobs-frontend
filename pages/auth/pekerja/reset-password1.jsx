import React from "react";
// import bgImage from "/public/bg-login.png";
import Image from "next/image";

export default function ResetPassword() {
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--color-background)",

          //   minHeight: "100vh",
        }}
      >
        <div className="p-md-5 p-3 vh-100">
          <div className="row g-0 h-100">
            <div
              className="col-6 h-100 d-none d-md-block"
              style={{
                // backgroundImage: `url(/bg-login.png)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                // background: `linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%),url(/bg-login.png)`,
                backgroundImage: `linear-gradient(rgba(94, 80, 161, 0.8)100%, rgba(94, 80, 161, 0.5)100%),url(/bg-login.png)`,
                // border: "1px solid",
                // height: "100%",
                // backgroundColor: "black",
              }}
            >
              <div className="p-5 h-100">
                <Image src="/logo_login.png" width={150} height={50} />

                <div className="w-100 h-100 d-flex justify-content-center align-items-center">
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
            <div className="col-md-6 h-100">
              <div className="d-md-none py-4">
                <Image src="/logo_login.png" width={150} height={50} />
              </div>
              <div className="p-md-5 m-md-5">
                <h2>Reset password</h2>
                <p className="my-md-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
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
                      className="form-control py-md-3"
                      id="formGroupExampleInput"
                      placeholder="Masukan Alamat Email"
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-warning text-light w-100 py-md-3 my-md-5"
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
