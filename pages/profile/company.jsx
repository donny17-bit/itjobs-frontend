import React, { useState, useEffect } from "react";

function Company() {
  const image = "https://cdn-icons-png.flaticon.com/512/7024/7024005.png";
  const image1 =
    "https://cdn.dribbble.com/users/427857/screenshots/14119816/media/9bd7c2bc7a0669d777d76ea5b82d1100.png?compress=1&resize=400x300";
  const image2 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXdI6zO0en6CF1UT0n1m1G7heKWr4UMIPJHxx2pGKSsLDrFLyIVGHoXP5V5rnddQCfkY&usqp=CAU";

  return (
    <>
      <div className="container-fluid profile_company_container">
        {/* <div className="row border m-0"> */}
        <div className="col-sm text-center profile_company_card p-5">
          <div className="text-center">
            <img
              src={image}
              className=" border profile_company_img"
              alt="..."
            />
          </div>
          <h5 className="profile_name pb-0 mb-0">Loust Tompson</h5>
          <p className="profile_job m-0">Financial</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item border-0 p-2 ps-0 profile_text">
              <i className="bi bi-geo-alt"></i> Alamat
            </li>
          </ul>
          <div className="row justify-content-center mb-2">
            <div className="col col-sm-7">
              <p className="pe-0 profile_text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                totam tenetur eos nostrum ea quia ex? Fugiat, doloribus? Iusto
                cum quas nisi consequatur laborum iure error possimus fugiat
                molestiae ad.
              </p>
            </div>
          </div>
          <button className="btn btn-primary profile_company_btn">
            Edit profile
          </button>
          <div className="row justify-content-center mt-3">
            <div className="col col-sm-4 text-start profile_company_sosmed">
              <ul className="list-group border-0 list-group-flush">
                <li className="list-group-item border-0 profile_text">
                  <i className="bi bi-envelope"></i> Loust@gmail.com
                </li>
                <li className="list-group-item border-0 profile_text">
                  <i className="bi bi-instagram"></i> @Louis
                </li>
                <li className="list-group-item border-0 profile_text">
                  <i className="bi bi-github"></i> @LousOMMO
                </li>
                <li className="list-group-item border-0 profile_text">
                  @LoiustGithub
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="col p-4 profile_col_container">
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
          </div> */}
      </div>
      {/* </div> */}
    </>
  );
}

export default Company;
