import React, { useState, useEffect } from "react";

function EditCompany() {
  const image = "https://cdn-icons-png.flaticon.com/512/7024/7024005.png";
  const image1 =
    "https://cdn.dribbble.com/users/427857/screenshots/14119816/media/9bd7c2bc7a0669d777d76ea5b82d1100.png?compress=1&resize=400x300";
  const image2 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXdI6zO0en6CF1UT0n1m1G7heKWr4UMIPJHxx2pGKSsLDrFLyIVGHoXP5V5rnddQCfkY&usqp=CAU";

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
                <p className="card-title profile_job m-0">Financial</p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item border-0 p-2 ps-0 profile_text">
                    <i className="bi bi-geo-alt"></i> Alamat
                  </li>
                </ul>
                <p className="card-text profile_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti, excepturi. Exercitationem consequuntur reprehenderit
                  aliquid vel repudiandae dolores reiciendis voluptatibus
                  recusandae. Veniam culpa minima eos consectetur eveniet
                  commodi mollitia earum voluptates.
                </p>
              </div>
            </div>
            <div className="d-grid mt-3 mb-3">
              <button className="btn btn-outline-primary">Simpan</button>
            </div>
            <div className="d-grid mt-3 mb-3">
              <button className="btn btn-outline-primary">Kembali</button>
            </div>
          </div>
          <div className="col-sm">
            <div className="row mb-4 pb-4 profile_col_container">
              <div className="row m-0 border-bottom ps-2 pt-4">
                <label className="col-md-2 profile_edit_title text-center">
                  Data diri
                </label>
              </div>
              <form className="row m-0 g-3 pt-1 p-3">
                <div className="col-sm-12">
                  <label className="form-label profile_edit_label">
                    Nama perusahaan
                  </label>
                  <input
                    type="text"
                    className="form-control profile_edit_input"
                    placeholder="Masukkan nama perusahaan"
                  />
                </div>
                <div className="col-sm-12">
                  <label className="form-label profile_edit_label">
                    Bidang
                  </label>
                  <input
                    type="text"
                    className="form-control profile_edit_input"
                    id="inputAddress"
                    placeholder="Masukan bidang perusahaan ex : Financial"
                  />
                </div>
                <div className="col-sm-12">
                  <label className="form-label profile_edit_label">
                    Domisili
                  </label>
                  <input
                    type="text"
                    className="form-control profile_edit_input"
                    id="inputAddress2"
                    placeholder="Masukkan domisili"
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
                <div className="col-md-12">
                  <label className="form-label profile_edit_label">Email</label>
                  <input
                    type="text"
                    className="form-control profile_edit_input"
                    placeholder="Masukkan email"
                  />
                </div>
                <div className="col-md-12">
                  <label className="form-label profile_edit_label">
                    Nomor telepon
                  </label>
                  <input
                    type="text"
                    className="form-control profile_edit_input"
                    placeholder="Masukkan nomor telepon"
                  />
                </div>
                <div className="col-md-12">
                  <label className="form-label profile_edit_label">
                    Instagram
                  </label>
                  <input
                    type="text"
                    className="form-control profile_edit_input"
                    placeholder="Masukkan username IG"
                  />
                </div>

                <div className="col-md-12">
                  <label className="form-label profile_edit_label">
                    LinkedIn
                  </label>
                  <input
                    type="text"
                    className="form-control profile_edit_input"
                    placeholder="Masukkan LinkedIn"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditCompany;
