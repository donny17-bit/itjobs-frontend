import React, { useState, useEffect } from "react";
// import bgImage from "/public/bg-login.png";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../store/action/auth";

export default function Login() {
  // const [role, setRole] = useState("");

  // const handleRole = (e) => {
  //   setRole(e.target.value);
  // };

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [asA, setAsA] = useState("");

  const handleAsA = (e) => {
    setAsA(e.target.value);
  };

  const [form, setForm] = useState({
    email: "",
  });

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(asA);
      await dispatch(forgotPassword(form, asA));
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <Head>
        <title>Forgot Password | itJobs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div
        className=" position-relative"
        // style={{
        //   backgroundColor: "var(--color-yellow)",

        //   minHeight: "100vh",
        // }}
      >
        <div className="p-md-5 p-3 min-vh-100 h-100">
          <div className="row g-0">
            <div className="col-md-6 d-none d-md-block bg-light">
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
                  minHeight: "89vh",
                  // backgroundColor: "black",
                }}
              >
                <div className="p-5">
                  <h1 className="text-light fw-bold">
                    <i className="bi bi-stack me-2 text-light"></i> itJobs
                  </h1>

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
                <h1 className="text-primary fw-bold">
                  <i className="bi bi-stack me-2 "></i> itJobs
                </h1>
              </div>
              <div className="p-md-5">
                <h2>Reset password</h2>
                <p className="my-md-3">
                  Enter your user account&apos;s verified email address and we
                  will send you a password reset link.
                </p>
                <div className="d-flex">
                  <p className="d-block">Akun : </p>
                  <div className="form-check form-check-inline ms-md-3 ms-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="pekerja"
                      onClick={handleAsA}
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
                      onClick={handleAsA}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      Company
                    </label>
                  </div>
                </div>
                {!auth.msg ? null : auth.isError ? (
                  <div className="alert alert-danger" role="alert">
                    {auth.msg}
                  </div>
                ) : (
                  <div className="alert alert-primary" role="alert">
                    {auth.msg}
                  </div>
                )}
                <form action="" className="mt-md-5" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control p-md-3"
                      id="formGroupExampleInput"
                      placeholder="Masukan Alamat Email"
                      name="email"
                      value={form.email}
                      onChange={handleChangeForm}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-warning text-light p-md-3 w-100 mt-md-4 mt-3"
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
