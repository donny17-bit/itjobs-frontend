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
      Cookies.set("id", result.value.data.data.id);
      Cookies.set("asA", asA);

      // get userbyid
      // asA === "company" ? dispatch("getCompany") : dispatch("getUser");

      await dispatch(getUserById(result.value.data.data.id, asA));

      // navigate
      asA === "company" ? router.push("/home") : router.push("/profile");
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
        <title>Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div
        className="bg-light"
        // style={{
        //   backgroundColor: "var(--color-yellow)",

        //   minHeight: "100vh",
        // }}
      >
        <div className="container h-100 p-md-5 p-3">
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
                      name="email"
                      value={form.email}
                      onChange={handleChangeForm}
                      required
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
                      type="password"
                      className="form-control p-md-3"
                      id="formGroupExampleInput2"
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
