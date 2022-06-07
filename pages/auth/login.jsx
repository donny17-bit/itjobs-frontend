import React, { useState, useEffect } from "react";
// import bgImage from "/public/bg-login.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/action/auth";
import { getUserById } from "../../store/action/user";
import Head from "next/head";

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const [asA, setAsA] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleAsA = (e) => {
    setAsA(e.target.value);
  };
  // console.log(asA);

  const handleSubmit = async (e) => {
    // console.log(asA);
    try {
      e.preventDefault();

      if (!asA) {
        return alert("Silahkan pilih masuk sebagai !");
      }

      // if (asA === "company") {
      //   //post table company
      //   const result = "pekera";
      // }
      // //post table user
      // // router.push("/profile");

      // post login
      // const result = asA === "company" ? "company" : "pekerja";
      const result = await dispatch(login(form, asA));
      console.log(result);

      // setCookies
      Cookies.set("token", result.value.data.data.token);
      Cookies.set("refreshToken", result.value.data.data.refreshToken);
      Cookies.set("id", result.value.data.data.id);
      Cookies.set("asA", asA);

      // get userbyid
      // asA === "company" ? dispatch("getCompany") : dispatch("getUser");

      await dispatch(getUserById(result.value.data.data.id, asA));

      // navigate
      asA === "company"
        ? router.push("/home")
        : router.push(`/profile/${result.value.data.data.id}`);
      // console.log(form);
      // console.log(asA);
      // resetForm();
    } catch (error) {
      console.log(error.response);
    }
  };

  const resetForm = () => {
    setForm({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Head>
        <title>Login | itJobs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div
        className="bg-light position-relative"
        // style={{
        //   backgroundColor: "var(--color-yellow)",

        //   minHeight: "100vh",
        // }}
      >
        <div className="container-fluid min-vh-100 h-100 p-md-5 p-3">
          <div className="row g-0">
            <div
              className="col-md-6 d-none d-md-block"
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
                // minHeight: "100%",
                height: "100%",
                minHeight: "89vh",
                // backgroundColor: "black",
              }}
            >
              <div className="p-5">
                {/* <Image
                  src="/logo_login.png"
                  width={150}
                  height={50}
                  alt="logo"
                /> */}

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
            <div className="col-md-6 h-100">
              <div className="d-md-none pb-5">
                <h1 className="text-primary fw-bold">
                  <i className="bi bi-stack me-2 "></i> itJobs
                </h1>
              </div>
              <div className="p-md-5">
                <h2>Hello, PewPeople </h2>
                <p className="my-md-3">
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
                <div className="d-flex">
                  <p className="d-block">Masuk Sebagai : </p>
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
                <form action="" className="mt-md-4" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="formEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      id="formEmail"
                      // className="form-control p-md-3 border-2 border-danger"
                      className={
                        auth.isError
                          ? "form-control p-md-3 border-2 border-danger"
                          : "form-control p-md-3"
                      }
                      placeholder="Masukan Alamat Email"
                      name="email"
                      value={form.email}
                      onChange={handleChangeForm}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formPassword" className="form-label">
                      Kata Sandi
                    </label>
                    <input
                      type="password"
                      // className="form-control p-md-3"
                      className={
                        auth.isError
                          ? "form-control p-md-3 border-2 border-danger"
                          : "form-control p-md-3"
                      }
                      id="formPassword"
                      placeholder="Masukan Kata Sandi"
                      name="password"
                      value={form.password}
                      onChange={handleChangeForm}
                      required
                    />
                  </div>

                  <div className="text-end">
                    <Link href={`/auth/forgot-password`}>
                      <a style={{ textDecoration: "none" }}>Lupa Kata Sandi?</a>
                    </Link>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-warning text-light p-md-3 w-100 mt-md-5 mt-3"
                  >
                    Masuk
                  </button>
                  <p className="text-center mt-md-3 mt-2 ">
                    Anda Belum Punya Akun?
                    {/* <Link href={`/auth/register`}> */}
                    <a
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      style={{ textDecoration: "none", marginLeft: "2px" }}
                      className="pe-auto"
                      href=""
                    >
                      Daftar Disini
                    </a>
                    {/* </Link> */}
                  </p>
                </form>

                <div
                  className="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">
                          Daftar Sebagai
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-warning mx-3 w-50 text-light"
                          data-bs-dismiss="modal"
                          onClick={() => {
                            router.push("/auth/register-pekerja");
                          }}
                        >
                          Pekerja
                        </button>
                        <button
                          type="button"
                          data-bs-dismiss="modal"
                          className="btn btn-warning mx-3 w-50 text-light"
                          onClick={() => {
                            router.push("/auth/register-company");
                          }}
                        >
                          Perekrut
                        </button>
                      </div>
                      <div className="modal-footer"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
