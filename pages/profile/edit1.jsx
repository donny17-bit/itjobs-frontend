import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import ShowImage from "../../components/showImageDropbox";
import DropBox from "../../components/dropBox";

function Edit1() {
  const image = "https://cdn-icons-png.flaticon.com/512/7024/7024005.png";
  const [images, setImages] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file, index) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: index, src: e.target.result },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  return (
    <>
      <div className="container-fluid profile_container">
        <div className="row m-0">
          <div className="col-md-3 profile_card_container p-0">
            <div className="card pb-1 pt-4 profile_card">
              <div className="text-center">
                <img
                  src={image}
                  className="card-img-top border profile_img"
                  alt="..."
                />
                <p>
                  <button className="btn btn-link profile_edit_btn">
                    <i className="bi bi-pencil"></i> Edit
                  </button>
                </p>
              </div>
              <div className="card-body mt-2">
                <h5 className="card-title profile_name pb-0 mb-0">
                  Loust Tompson
                </h5>
                <p className="card-title profile_job">Web Developer</p>
                <p className="card-title profile_role">Freelancer</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item border-0 p-2 ps-0 profile_text">
                    <i className="bi bi-geo-alt"></i> Alamat
                  </li>
                  <li className="list-group-item border-0 p-2 ps-0 profile_text">
                    <i className="bi bi-telephone"></i> No telpon
                  </li>
                </ul>
                <p className="card-text profile_text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
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
              <form className="row m-0 g-3 mt-2 p-3">
                <div className="col-sm-12">
                  <label className="form-label profile_edit_label">
                    Nama lengkap
                  </label>
                  <input
                    type="text"
                    className="form-control profile_edit_input"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div className="col-sm-12">
                  <label className="form-label profile_edit_label">
                    Job desk
                  </label>
                  <input
                    type="text"
                    className="form-control profile_edit_input"
                    placeholder="Masukkan job desk"
                  />
                </div>
                <div className="col-sm-12">
                  <label className="form-label profile_edit_label">
                    Domisili
                  </label>
                  <input
                    type="text"
                    className="form-control profile_edit_input"
                    placeholder="Masukkan domisili"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label profile_edit_label">
                    Instagram
                  </label>
                  <input
                    type="text"
                    className="form-control profile_edit_input"
                    placeholder="Masukkan username IG"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label profile_edit_label">
                    Github
                  </label>
                  <input
                    type="text"
                    className="form-control profile_edit_input"
                    placeholder="Masukkan username Github"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label profile_edit_label">
                    Gitlab
                  </label>
                  <input
                    type="text"
                    className="form-control profile_edit_input"
                    placeholder="Masukkan username Gitlab"
                  />
                </div>
                <div className="col-md-12">
                  <label className="form-label profile_edit_label">
                    Deskripsi singkat
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="deskripsi"
                    rows="5"
                    placeholder="Tulis deskripsi singkat"
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
              <form className="row m-0 g-3 mt-2 p-3">
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control profile_edit_input"
                    placeholder="Masukkan skill anda"
                  />
                </div>
                <div className="col-sm text-end d-grid">
                  <button className="btn btn-warning profile_edit_submit">
                    Submit
                  </button>
                </div>
                <div className="row g-3 mt-3 m-0">
                  <div className="col-md-auto me-3 ps-2 pe-2 pt-1 pb-1 profile_edit_skill">
                    Javascripts
                    <button className="ms-4 btn btn-link p-0">
                      <i className="bi bi-trash" style={{ color: "#fff" }}></i>
                    </button>
                  </div>
                  <div className="col-md-auto me-3 ps-2 pe-2 pt-1 pb-1 profile_edit_skill">
                    CSS
                    <button className="ms-4 btn btn-link p-0">
                      <i className="bi bi-trash" style={{ color: "#fff" }}></i>
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
              <form className="row m-0 g-3 mt-2 p-3">
                <div className="col-sm-6">
                  <label className="form-label profile_edit_label">
                    Nama perusahaan
                  </label>
                  <input
                    type="text"
                    className="form-control profile_edit_input"
                    placeholder="Masukkan nama perusahaan"
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label profile_edit_label">
                    Posisi
                  </label>
                  <input
                    type="text"
                    className="form-control profile_edit_input"
                    placeholder="Masukkan posisi"
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label profile_edit_label">
                    Tanggal masuk
                  </label>
                  <input
                    type="date"
                    className="form-control profile_edit_input"
                    placeholder="Masukkan tanggal masuk"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label profile_edit_label">
                    Tanggal keluar
                  </label>
                  <input
                    type="date"
                    className="form-control profile_edit_input"
                    placeholder="Masukkan username tanggal keluar"
                  />
                </div>
                <div className="col-md-12 mb-4">
                  <label className="form-label profile_edit_label">
                    Deskripsi singkat
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="deskripsi"
                    rows="5"
                    placeholder="Tulis deskripsi singkat"
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
              <form className="row m-0 g-3 mt-2 p-3">
                <div className="col-sm-12">
                  <label className="form-label profile_edit_label">
                    Nama aplikasi
                  </label>
                  <input
                    type="text"
                    className="form-control profile_edit_input"
                    placeholder="Masukkan nama aplikasi"
                  />
                </div>
                <div className="col-sm-12">
                  <label className="form-label profile_edit_label">
                    Link repository
                  </label>
                  <input
                    type="text"
                    className="form-control profile_edit_input"
                    placeholder="Masukkan link"
                  />
                </div>
                <div className="col-sm-12">
                  <label
                    for="inputAddress2"
                    className="form-label profile_edit_label"
                  >
                    Upload gambar
                  </label>
                  <DropBox onDrop={onDrop} />
                  <ShowImage images={images} />
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

export default Edit1;
