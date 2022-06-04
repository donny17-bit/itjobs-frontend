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
                  <Image src="/logo_login.png" width={150} height={50} />

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
                <Image src="/logo_login_mobile.png" width={100} height={30} />
              </div>
              <div className="p-md-5">
                <h2>Hello, PewPeople </h2>
                <p className="mt-md-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </p>
                <form action="" className="">
                  <div className="mb-3">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Nama
                    </label>
                    <input
                      type="text"
                      className="form-control "
                      id="formGroupExampleInput"
                      placeholder="Masukan Nama Panjang"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control "
                      id="formGroupExampleInput"
                      placeholder="Masukan Alamat Email"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Perusahaan
                    </label>
                    <input
                      type="text"
                      className="form-control "
                      id="formGroupExampleInput"
                      placeholder="Masukan Nama Perusahaan"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Bidang Perusahaan
                    </label>
                    <input
                      type="text"
                      className="form-control "
                      id="formGroupExampleInput"
                      placeholder="Masukan Bidang Perusahaan"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="formGroupExampleInput2"
                      className="form-label"
                    >
                      No HandPhone
                    </label>
                    <input
                      type="text"
                      className="form-control "
                      id="formGroupExampleInput2"
                      placeholder="Masukan No HandPhone"
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
                      className="form-control "
                      id="formGroupExampleInput2"
                      placeholder="Masukan Kata Sandi"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="formGroupExampleInput2"
                      className="form-label"
                    >
                      Konfirmasi Kata Sandi
                    </label>
                    <input
                      type="text"
                      className="form-control "
                      id="formGroupExampleInput2"
                      placeholder="Masukan Konfirmasi Kata Sandi"
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-warning text-light w-100 py-md-3 my-3"
                  >
                    Daftar
                  </button>
                  <p className="text-center mt-md-1">
                    Anda Sudah Punya Akun?{" "}
                    <Link href={`/auth/login`}>Login Disini</Link>
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
