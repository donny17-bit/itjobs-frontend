import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "../../../utils/axios";
import EditCard from "../../../components/editCard";

function Edit() {
  const image = "https://cdn-icons-png.flaticon.com/512/7024/7024005.png";

  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({});
  const [dataDiri, setDataDiri] = useState({});
  const [sosMed, setSosMed] = useState();
  const [skill, setSkill] = useState([]);
  const [tempSkill, setTempSkill] = useState();
  const [exp, setExp] = useState({});
  const [app, setApp] = useState({});

  const changeDataDiri = (e) => {
    setDataDiri({
      ...dataDiri,
      [e.target.name]: e.target.value,
    });
  };

  const changeSkill = (e) => {
    setTempSkill(e.target.value);
  };

  const changeExp = (e) => {
    if (e.target.name == "descExp") {
      setExp({ ...exp, description: e.target.value });
    } else {
      setExp({ ...exp, [e.target.name]: e.target.value });
    }
  };

  const changeApp = (e) => {
    setApp({ ...app, [e.target.name]: e.target.value });
  };

  // belum disimpan di state
  const getUserId = async () => {
    const result = await axios.get(`user/${router.query.id}`);
    setData(result.data.data[0]);

    if (result.data.data[0].socialMedia) {
      setSosMed(result.data.data[0].socialMedia.split(","));
    }
  };

  const submitSkill = (e) => {
    e.preventDefault();
    setSkill([...skill, tempSkill]);
    document.getElementsByName("skill")[0].value = "";
  };

  const deleteSkill = (e, index) => {
    e.preventDefault();
    skill.splice(index, 1);
    setSkill([...skill]);
  };

  const submitExp = async (e) => {
    e.preventDefault();
    console.log(exp);

    const result = await axios.post(`experience/${id}`, exp);

    console.log(result);

    alert("sukses create experience");
    setExp({});
  };

  const submitDataDiri = async (e) => {
    e.preventDefault();
    await axios.patch(`user/updateProfile/${id}`, {
      ...dataDiri,
      socialMedia: `${dataDiri.ig},${dataDiri.github},${dataDiri.gitlab}`,
    });

    alert("sukses update data");
    getUserId();
    // auto reset form bellum implement
    // setDataDiri({});
  };

  const submitApp = (e) => {};

  useEffect(() => {
    if (!id) {
      return;
    }
    getUserId();
  }, [id]);

  return (
    <>
      <div className="container-fluid profile_container">
        <div className="row m-0">
          <div className="col-md-3 profile_card_container p-0">
            <EditCard data={data} />
            <div className="d-grid mt-3 mb-3">
              <button className="btn btn-primary">Ubah Password</button>
            </div>
            <div className="d-grid mt-3 mb-3">
              <button className="btn btn-outline-primary">Kembali</button>
            </div>
          </div>
          <div className="col">
            <div className="row mb-4 profile_col_container">
              <div className="row m-0 border-bottom ps-2 pt-4">
                <label className="col-sm-2 profile_edit_title ps-3">
                  Data diri
                </label>
              </div>
              <form onSubmit={submitDataDiri} className="row m-0 g-3 mt-2 p-3">
                <div className="col-sm-12">
                  <label className="form-label profile_edit_label">
                    Nama lengkap
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    className="form-control profile_edit_input"
                    placeholder={
                      data.fullName ? data.fullName : "Masukkan nama lengkap"
                    }
                    onChange={(e) => changeDataDiri(e)}
                    required
                  />
                </div>
                <div className="col-sm-12">
                  <label className="form-label profile_edit_label">
                    Job desk
                  </label>
                  <input
                    type="text"
                    name="field"
                    className="form-control profile_edit_input"
                    placeholder={data.field ? data.field : `Masukkan job desk`}
                    onChange={(e) => changeDataDiri(e)}
                  />
                </div>
                <div className="col-sm-12">
                  <label className="form-label profile_edit_label">
                    Status
                  </label>
                  <input
                    type="text"
                    name="role"
                    className="form-control profile_edit_input"
                    placeholder={
                      data.role ? data.role : "ex freelancer / fulltime"
                    }
                    onChange={(e) => changeDataDiri(e)}
                  />
                </div>
                <div className="col-sm-12">
                  <label className="form-label profile_edit_label">
                    Domisili
                  </label>
                  <input
                    type="text"
                    name="address"
                    className="form-control profile_edit_input"
                    placeholder={
                      data.address ? data.address : "Masukkan domisili"
                    }
                    onChange={(e) => changeDataDiri(e)}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label profile_edit_label">
                    Instagram
                  </label>
                  <input
                    type="text"
                    name="ig"
                    className="form-control profile_edit_input"
                    placeholder={
                      sosMed
                        ? sosMed[0]
                          ? sosMed[0]
                          : "Masukkan username IG"
                        : "Masukkan username IG"
                    }
                    onChange={(e) => changeDataDiri(e)}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label profile_edit_label">
                    Github
                  </label>
                  <input
                    type="text"
                    name="github"
                    className="form-control profile_edit_input"
                    placeholder={
                      sosMed
                        ? sosMed[1]
                          ? sosMed[1]
                          : "Masukkan username Github"
                        : "Masukkan username Github"
                    }
                    onChange={(e) => changeDataDiri(e)}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label profile_edit_label">
                    Gitlab
                  </label>
                  <input
                    type="text"
                    name="gitlab"
                    className="form-control profile_edit_input"
                    placeholder={
                      sosMed
                        ? sosMed[2]
                          ? sosMed[2]
                          : "Masukkan username Gitlab"
                        : "Masukkan username Gitlab"
                    }
                    onChange={(e) => changeDataDiri(e)}
                  />
                </div>
                <div className="col-md-12">
                  <label className="form-label profile_edit_label">
                    Deskripsi singkat
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="description"
                    rows="5"
                    placeholder={
                      data.description
                        ? data.description
                        : "Tulis deskripsi singkat"
                    }
                    onChange={(e) => changeDataDiri(e)}
                  ></textarea>
                </div>
                <div className="row m-0 p-0 justify-content-end">
                  <div className="col-sm-2 mt-5 d-grid ">
                    <button
                      type="submit"
                      className="btn btn-warning profile_edit_submit profile_edit_input"
                    >
                      Simpan
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="row mb-4 pb-4 profile_col_container">
              <div className="row m-0 border-bottom ps-2 pt-4">
                <label className="col-sm-2 profile_edit_title ps-3">
                  Skill
                </label>
              </div>
              <form onSubmit={submitSkill} className="row m-0 g-3 mt-2 p-3">
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="skill"
                    className="form-control profile_edit_input"
                    placeholder="Masukkan skill anda"
                    onChange={(e) => changeSkill(e)}
                  />
                </div>
                <div className="col-sm text-end d-grid">
                  <button
                    type="submit"
                    className="btn btn-warning profile_edit_submit"
                  >
                    Tambah
                  </button>
                </div>
                <div className="row g-3 mt-3 m-0">
                  {skill
                    ? skill.map((item, index) => (
                        <div
                          key={item}
                          className="col-md-auto me-3 ps-2 pe-2 pt-1 pb-1 profile_edit_skill"
                        >
                          {item}
                          <button
                            className="ms-4 btn btn-link p-0"
                            onClick={(e) => deleteSkill(e, index)}
                          >
                            <i
                              className="bi bi-trash"
                              style={{ color: "#fff" }}
                            ></i>
                          </button>
                        </div>
                      ))
                    : ""}
                </div>
                <div className="row p-0 mt-3">
                  <div className="col-12 pe-0 d-grid">
                    <hr className="ms-2 me-2 col-sm" />
                    <button type="submit" className="btn btn-outline-warning">
                      Simpan
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="row mb-4 pb-4 profile_col_container">
              <div className="row m-0 border-bottom ps-3 pt-4">
                <label className="col-sm-4 profile_edit_title">
                  Pengalaman kerja
                </label>
              </div>
              <form onSubmit={submitExp} className="row m-0 g-3 mt-2 p-3">
                <div className="col-sm-6">
                  <label className="form-label profile_edit_label">
                    Nama perusahaan
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    className="form-control profile_edit_input"
                    placeholder="Masukkan nama perusahaan"
                    onChange={(e) => changeExp(e)}
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label profile_edit_label">
                    Posisi
                  </label>
                  <input
                    type="text"
                    name="position"
                    className="form-control profile_edit_input"
                    placeholder="Masukkan posisi"
                    onChange={(e) => changeExp(e)}
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label profile_edit_label">
                    Tanggal masuk
                  </label>
                  <input
                    type="date"
                    name="dateIn"
                    className="form-control profile_edit_input"
                    placeholder="Masukkan tanggal masuk"
                    onChange={(e) => changeExp(e)}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label profile_edit_label">
                    Tanggal keluar
                  </label>
                  <input
                    type="date"
                    name="dateOut"
                    className="form-control profile_edit_input"
                    placeholder="Masukkan username tanggal keluar"
                    onChange={(e) => changeExp(e)}
                  />
                </div>
                <div className="col-md-12 mb-4">
                  <label className="form-label profile_edit_label">
                    Deskripsi singkat
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="descExp"
                    rows="5"
                    placeholder="Tulis deskripsi singkat"
                    onChange={(e) => changeExp(e)}
                  ></textarea>
                </div>
                <hr className="ms-2 me-2 col-sm" />
                <div className="col-12 d-grid text-end">
                  <button type="submit" className="btn btn-outline-warning">
                    Tambah Pengalaman Kerja
                  </button>
                </div>
              </form>
            </div>
            <div className="row mb-4 pb-4 profile_col_container">
              <div className="row m-0 border-bottom ps-3 pt-4">
                <label className="col-sm-4 profile_edit_title">
                  Portofolio
                </label>
              </div>
              <form onSubmit={submitApp} className="row m-0 g-3 mt-2 p-3">
                <div className="col-sm-12">
                  <label className="form-label profile_edit_label">
                    Nama aplikasi
                  </label>
                  <input
                    type="text"
                    name="appName"
                    className="form-control profile_edit_input"
                    placeholder="Masukkan nama aplikasi"
                    onChange={(e) => changeApp(e)}
                  />
                </div>
                <div className="col-sm-12">
                  <label className="form-label profile_edit_label">
                    Link repository
                  </label>
                  <input
                    type="text"
                    name="linkRepo"
                    className="form-control profile_edit_input"
                    placeholder="Masukkan link"
                    onChange={(e) => changeApp(e)}
                  />
                </div>
                <div className="col-sm-12">
                  <label
                    for="inputAddress2"
                    className="form-label profile_edit_label"
                  >
                    Upload gambar
                  </label>
                  <input
                    type="file"
                    name="appImage"
                    className="form-control"
                    placeholder="Masukkan tanggal masuk"
                  />
                </div>
                <hr className="ms-2 me-2 col-sm mt-5" />
                <div className="col-12 d-grid text-end">
                  <button type="submit" className="btn btn-outline-warning">
                    Tambah Portofolio
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit;
