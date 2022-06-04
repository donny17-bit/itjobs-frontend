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
          <div className="col p-4 profile_col_container">
            <div className="row ms-2">
              <div className="col-2 profile_menu_active profile_active text-center">
                Portofolio
              </div>
              <div className="col-4 profile_menu_disable text-center">
                Pengalaman Kerja
              </div>
            </div>
            <div className="row row-cols-3 g-3 mt-4">
              <div className="col p-0 text-center">
                <img src={image2} className="profile_porto_img" alt="" />
                <p className="mt-2 profile_porto_text">Social Media App</p>
              </div>
              <div className="col p-0 text-center">
                <img src={image1} className="profile_porto_img" alt="" />
                <p className="mt-2 profile_porto_text">Social Media App</p>
              </div>
              <div className="col p-0 text-center">
                <img src={image1} className="profile_porto_img" alt="" />
                <p className="mt-2">Social Media App</p>
              </div>
              <div className="col p-0 text-center">
                <img src={image1} className="profile_porto_img" alt="" />
                <p className="mt-2">Social Media App</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit;
