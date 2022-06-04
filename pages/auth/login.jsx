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
        className="bg-light"
        // style={{
        //   backgroundColor: "var(--color-yellow)",

        //   minHeight: "100vh",
        // }}
      >
        <div className="container p-md-5 p-3">
          <div className="row">
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
                  minHeight: "100%",
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
            <div className="col-md-6">
              <div className="d-md-none pb-5">
                <Image
                  src="/logo_login_mobile.png"
                  width={100}
                  height={30}
                  alt="logo"
                />
              </div>
              <div className="p-md-5">
                <h2>Hello, PewPeople </h2>
                <p className="my-md-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </p>
                <div className="d-flex">
                  <p className="d-block">Masuk Sebagai : </p>
                  <div className="form-check form-check-inline ms-md-3 ms-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="pekerja"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Pekerja
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="company"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      Company
                    </label>
                  </div>
                </div>

                {/* <div className="d-flex w-100">
                  <button
                    className="btn btn-outline-warning w-100"
                    value="pekerja"
                    onClick={handleRole}
                  >
                    Pekerja
                  </button>
                  <button
                    value="company"
                    className="btn btn-outline-warning w-100"
                    onClick={handleRole}
                  >
                    Perekrut
                  </button>
                </div> */}
                <form action="" className="mt-md-4">
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
                  <div className="mb-3">
                    <label
                      htmlFor="formGroupExampleInput2"
                      className="form-label"
                    >
                      Kata Sandi
                    </label>
                    <input
                      type="text"
                      className="form-control p-md-3"
                      id="formGroupExampleInput2"
                      placeholder="Masukan Kata Sandi"
                    />
                  </div>

                  <div className="text-end">
                    <Link href={`/auth/forgot-password`}>
                      <a style={{ textDecoration: "none" }}>Lupa Kata Sandi?</a>
                    </Link>
                  </div>

                  <button
                    type="button"
                    className="btn btn-warning text-light p-md-3 w-100 mt-md-5 mt-3"
                  >
                    Masuk
                  </button>
                  <p className="text-center mt-md-3 mt-2 ">
                    Anda Belum Punya Akun?
                    <Link href={`/auth/register`}>
                      <a style={{ textDecoration: "none", marginLeft: "2px" }}>
                        Daftar Disini
                      </a>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
