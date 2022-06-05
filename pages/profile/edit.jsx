import React, { useState, useEffect } from "react";

function Edit() {
  const image = "https://cdn-icons-png.flaticon.com/512/7024/7024005.png";
  const image1 =
    "https://cdn.dribbble.com/users/427857/screenshots/14119816/media/9bd7c2bc7a0669d777d76ea5b82d1100.png?compress=1&resize=400x300";
  const image2 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXdI6zO0en6CF1UT0n1m1G7heKWr4UMIPJHxx2pGKSsLDrFLyIVGHoXP5V5rnddQCfkY&usqp=CAU";

  return (
    <>
      <div className="container-fluid profile_container">
        <div className="row m-0">
          <div className="col col-3 me-4  p-0">
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
                <label className="col-2 profile_menu_active text-center">
                  Data diri
                </label>
              </div>
              <form className="row m-0 g-3 mt-2 p-3">
                <div className="col-sm-12">
                  <label for="inputEmail4" className="form-label">
                    Nama lengkap
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div className="col-sm-12">
                  <label for="inputAddress" className="form-label">
                    Job desk
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="Masukkan job desk"
                  />
                </div>
                <div className="col-sm-12">
                  <label for="inputAddress2" className="form-label">
                    Domisili
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Masukkan domisili"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Instagram</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Masukkan username IG"
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Github</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Masukkan username Github"
                  />
                  {/* <select id="inputState" className="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select> */}
                </div>
                <div className="col-md-4">
                  <label className="form-label">Gitlab</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Masukkan username Gitlab"
                  />
                </div>
                <div className="col-md-12">
                  <label className="form-label">Deskripsi singkat</label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="deskripsi"
                    rows="5"
                    placeholder="Tulis deskripsi singkat"
                  ></textarea>
                </div>
                <div className="col-12 mt-5 text-end">
                  <button type="submit" className="btn btn-warning">
                    Simpan
                  </button>
                </div>
              </form>
            </div>
            <div className="row mb-4 pb-4 profile_col_container">
              <div className="row m-0 border-bottom ps-2 pt-4">
                <label className="col-2 profile_menu_active ps-3">Skill</label>
              </div>
              <form className="row m-0 g-3 mt-2 p-3">
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Masukkan skill anda"
                  />
                </div>
                <div className="col-sm text-end d-grid">
                  <button className="btn btn-warning">Submit</button>
                </div>
                <div className="row m-0 border">
                  <div className="col-sm border">Javascript </div>
                </div>
              </form>
            </div>
            <div className="row mb-4 pb-4 profile_col_container">
              <div className="row m-0 border-bottom ps-3 pt-4">
                <label className="col-4 profile_menu_active">
                  Pengalaman kerja
                </label>
              </div>
              <form className="row m-0 g-3 mt-2 p-3">
                <div className="col-sm-6">
                  <label for="inputEmail4" className="form-label">
                    Nama perusahaan
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Masukkan nama perusahaan"
                  />
                </div>
                <div className="col-sm-6">
                  <label for="inputAddress" className="form-label">
                    Posisi
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Masukkan posisi"
                  />
                </div>
                <div className="col-sm-6">
                  <label for="inputAddress2" className="form-label">
                    Tanggal masuk
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Masukkan tanggal masuk"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Tanggal keluar</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Masukkan username tanggal keluar"
                  />
                </div>
                <div className="col-md-12 mb-4">
                  <label className="form-label">Deskripsi singkat</label>
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
                <label className="col-4 profile_menu_active">Portofolio</label>
              </div>
              <form className="row m-0 g-3 mt-2 p-3">
                <div className="col-sm-12">
                  <label className="form-label">Nama aplikasi</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Masukkan nama aplikasi"
                  />
                </div>
                <div className="col-sm-12">
                  <label className="form-label">Link repository</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Masukkan link"
                  />
                </div>
                <div className="col-sm-12">
                  <label for="inputAddress2" className="form-label">
                    Upload gambar
                  </label>
                  <input
                    type="file"
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
