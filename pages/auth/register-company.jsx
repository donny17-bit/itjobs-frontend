import React, { useState, useEffect } from "react";
// import bgImage from "/public/bg-login.png";
import Image from "next/image";
import Link from "next/link";
import { registerCompany, registerPekerja } from "../../store/action/auth";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Login() {
  const router = useRouter();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    companyName: "",
    companyField: "",
    noTelp: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleChangForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(form);
      await dispatch(registerCompany(form));
      router.push("/auth/login");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
      <Head>
        <title>Register | itJobs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div
        className="bg-light position-relative"
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
                <h2>Hello, PewPeople </h2>
                <p className="mt-md-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </p>
                {!auth.msg ? null : auth.isError ? (
                  <div className="alert alert-danger" role="alert">
                    {auth.msg}
                  </div>
                ) : (
                  <div className="alert alert-primary" role="alert">
                    {auth.msg}
                  </div>
                )}
                <form action="" className="" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="formName" className="form-label">
                      Nama
                    </label>
                    <input
                      type="text"
                      className="form-control p-md-3"
                      id="formName"
                      placeholder="Masukan Nama Panjang"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChangForm}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control p-md-3"
                      id="formEmail"
                      placeholder="Masukan Alamat Email"
                      name="email"
                      value={form.email}
                      onChange={handleChangForm}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formOffice" className="form-label">
                      Perusahaan
                    </label>
                    <input
                      type="text"
                      className="form-control p-md-3"
                      id="formOffice"
                      placeholder="Masukan Nama Perusahaan"
                      name="companyName"
                      value={form.companyName}
                      onChange={handleChangForm}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formCompanyField" className="form-label">
                      Bidang Perusahaan
                    </label>
                    <input
                      type="text"
                      className="form-control p-md-3"
                      id="formCompanyField"
                      placeholder="Masukan Bidang Perusahaan"
                      name="companyField"
                      value={form.companyField}
                      onChange={handleChangForm}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formNoTelp" className="form-label">
                      No HandPhone
                    </label>
                    <input
                      type="number"
                      className="form-control p-md-3"
                      id="formNoTelp"
                      placeholder="Masukan No HandPhone"
                      name="noTelp"
                      value={form.noTelp}
                      onChange={handleChangForm}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formPassword" className="form-label">
                      Kata Sandi
                    </label>
                    <input
                      type="password"
                      className="form-control p-md-3"
                      id="formPassword"
                      placeholder="Masukan Kata Sandi"
                      name="password"
                      value={form.password}
                      onChange={handleChangForm}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formConfirmPassword" className="form-label">
                      Konfirmasi Kata Sandi
                    </label>
                    <input
                      type="password"
                      className="form-control p-md-3"
                      id="formConfirmPassword"
                      placeholder="Masukan Konfirmasi Kata Sandi"
                      name="confirmPassword"
                      value={form.confirmPassword}
                      onChange={handleChangForm}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-warning text-light p-md-3 w-100 mt-md-5 mt-3"
                  >
                    Daftar
                  </button>
                  <p className="text-center mt-md-1">
                    Anda Sudah Punya Akun?{" "}
                    <Link href={`/auth/login`}>
                      <a style={{ textDecoration: "none" }}>Login Disini</a>
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
