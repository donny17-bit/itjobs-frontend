import Image from "next/image";
import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { postHire } from "../../store/action/hire";
import { useRouter } from "next/router";
import { getUserById } from "../../store/action/user";
import Layout from "../../components/Layout/MainLayout";
import privateRouteCompany from "../../components/privateRouteCompany";

function Hire() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    subject: "",
    description: "",
    file: null,
    userId: "",
  });
  const [data, setData] = useState({});

  const [msg, setMsg] = useState({
    type: "",
    msg: "",
  });

  const hire = useSelector((state) => state.hire);
  useEffect(() => {
    if (router.isReady) {
      getData();
      setForm({ ...form, userId: router.query.id });
    }
  }, [router.isReady]);

  const getData = () => {
    try {
      dispatch(getUserById(router.query.id, "pekerja"))
        .then((res) => {
          const dataUser = res.value.data.data[0];
          setData(dataUser);
        })
        .catch((err) => alert(err));
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);

  const handleChangeForm = ({ target }) => {
    if (target.name == "file") {
      setForm({ ...form, [target.name]: target.files[0] });
    } else {
      setForm({ ...form, [target.name]: target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
    }

    for (const data of formData.entries()) {
      console.log(data[0] + ": " + data[1]);
    }

    dispatch(postHire(Cookie.get("id"), formData))
      .then((res) => setMsg({ type: "success", msg: res.value.data.msg }))
      .catch((err) => setMsg({ type: "danger", msg: err.message }));
  };

  console.log(form);
  return (
    <Layout>
      <div
        style={{ backgroundColor: "#F6F7F8", minHeight: "100vh" }}
        className="pt-5"
      >
        <div className="container row mx-auto pt-4 ">
          <div className="col-12 col-md-3 bg-white px-4 pb-5 rounded">
            <div className="position-relative px-5 py-3 text-center">
              <Image
                src={
                  data?.image
                    ? `${process.env.URL_CLOUDINARY}${data.image}`
                    : `${process.env.URL_CLOUDINARY}profiles/profile-placeholder_zpfgnr.png`
                }
                layout="intrinsic"
                objectFit="cover"
                className="rounded-circle"
                width="150px"
                height="150px"
                alt=""
              ></Image>
            </div>
            <h4 className="fw-bold">{data?.fullName}</h4>
            <h6 className="m-0 text-capitalize">{data?.field}</h6>
            <small className="text-black-50 ">
              <span className="text-capitalize">{data?.role}</span>
              <br />
              <div className="mt-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-alt me-2 "
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                {data?.address}
              </div>
              <div className="mt-2 mb-2">
                {(data?.noTelp || "")
                  .toString()
                  .replace(
                    /((?<!\d)\d{3}(?!\b)|(?<=^\d{3})\d{4}(?!\b))/g,
                    "$1-"
                  )}
              </div>
              <p>{data?.description}</p>
            </small>
            <h4>Skill</h4>
            <div className="d-flex flex-wrap fw-light" style={{}}>
              {data?.skill
                ? data.skill.split(",").map((v, i) => (
                    <React.Fragment key={i}>
                      <div>
                        <button className=" btn btn-sm bg-warning text-white p-1 px-md-3 py-1 me-2 mt-1 bg-opacity-50 border border-warning">
                          {v}
                        </button>
                      </div>
                      {(i + 1) % 3 == 0 ? (
                        <div className="w-100 mt-2"></div>
                      ) : (
                        ""
                      )}
                    </React.Fragment>
                  ))
                : "apparently s/he doesn't have any skill"}
            </div>
          </div>
          <form
            onSubmit={(event) => handleSubmit(event)}
            className="col-12 col-md-8 mt-4 mt-md-0 ms-md-5 "
          >
            <h2 className="fw-bold">Hubungi {data?.fullName}</h2>
            <small className="fw-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </small>

            <div className="mt-5">
              {msg.msg ? (
                <div
                  className={`p-3 text-center bg-${msg.type} text-white mb-4`}
                >
                  {msg.msg}
                </div>
              ) : (
                ""
              )}
              <label className="form-label fw-light">
                Tujuan tentang pesan ini
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="subject"
                onChange={handleChangeForm}
                required
              />
            </div>

            <div className="mt-3 form-group position-relative">
              <label className="form-label fw-light">Pesan</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="description"
                onChange={handleChangeForm}
                required
              ></textarea>
              <label
                className="btn position-absolute end-0 p-1"
                style={{ bottom: "3px" }}
                htmlFor="inputFile"
              >
                <i className="btn btn-secondary p-1  bi bi-paperclip"></i>
              </label>
            </div>

            <input
              type="file"
              name="file"
              id="inputFile"
              className="d-none"
              accept="application/pdf"
              onChange={handleChangeForm}
            />

            {form?.file && (
              <div className=" align-items-center">
                <div className="d-flex bg-white mt-3 col-12 col-md-6 rounded overflow-hidden">
                  <div className="bg-danger text-white p-0 fs-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      fill="currentColor"
                      className="bi bi-file-pdf"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.603 12.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.701 19.701 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.716 5.716 0 0 1-.911-.95 11.642 11.642 0 0 0-1.997.406 11.311 11.311 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.27.27 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.647 12.647 0 0 1 1.01-.193 11.666 11.666 0 0 1-.51-.858 20.741 20.741 0 0 1-.5 1.05zm2.446.45c.15.162.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.881 3.881 0 0 0-.612-.053zM8.078 5.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z" />
                    </svg>
                  </div>
                  <div className="toast-body fs-4">{form.file?.name}</div>
                  <button
                    type="button"
                    className="btn-close me-2 m-auto"
                    onClick={() => {
                      setForm({ ...form, file: null });
                      document.getElementById("inputFile").value = "";
                    }}
                  ></button>
                </div>
              </div>
            )}

            <button
              className="btn btn-lg btn-warning w-100 my-5 text-white"
              disabled={hire.isLoading}
            >
              {hire.isLoading ? (
                <div className="spinner-border text-light " />
              ) : (
                "Kirim"
              )}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default privateRouteCompany(Hire);
