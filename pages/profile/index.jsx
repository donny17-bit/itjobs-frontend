import React, { useState, useEffect } from "react";

function Profile() {
  const [menuActive, setMenuActive] = useState("porto");
  const image = "https://cdn-icons-png.flaticon.com/512/7024/7024005.png";
  const image1 =
    "https://cdn.dribbble.com/users/427857/screenshots/14119816/media/9bd7c2bc7a0669d777d76ea5b82d1100.png?compress=1&resize=400x300";
  const image2 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXdI6zO0en6CF1UT0n1m1G7heKWr4UMIPJHxx2pGKSsLDrFLyIVGHoXP5V5rnddQCfkY&usqp=CAU";

  const handleMenu = (event) => {
    if (event.target.name == "menu_btn1") {
      setMenuActive("porto");
    } else {
      setMenuActive("expKerja");
    }
  };

  return (
    <>
      <div className="container-fluid profile_container">
        <div className="row m-0">
          <div className="col-md-3 profile_card_container p-0">
            <div className="card pb-5 pt-4 profile_card">
              <div className="text-center">
                <img
                  src={image}
                  className="card-img-top border profile_img"
                  alt="..."
                />
              </div>
              <div className="card-body mt-3">
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
                <div className="d-grid mb-3">
                  <button className="btn btn-primary">Hire</button>
                </div>
                <h5 className="card-title">Skill</h5>
                <div className="row p-1 g-2">
                  <div className="col-sm-auto p-0 me-1 d-grid">
                    <button className="btn btn-warning disabled profile_skill_list">
                      Javascript
                    </button>
                  </div>
                  <div className="col-sm-auto p-0 me-1 d-grid">
                    <button className="btn btn-warning disabled profile_skill_list">
                      PHP
                    </button>
                  </div>
                  <div className="col-sm-auto p-0 me-1 d-grid">
                    <button className="btn btn-warning disabled profile_skill_list">
                      CSS
                    </button>
                  </div>
                  <div className="col-sm-auto p-0 me-1 d-grid">
                    <button className="btn btn-warning disabled profile_skill_list">
                      phyton
                    </button>
                  </div>
                </div>
              </div>
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
          <div className="col col-sm p-4 profile_col_container">
            <div className="row ms-2">
              <div
                className={`col-sm-2 text-center ${
                  menuActive == "porto"
                    ? "profile_menu_active"
                    : "profile_menu_disable"
                }`}
              >
                <a
                  name="menu_btn1"
                  className={
                    menuActive == "porto"
                      ? "profile_menu_btn_active"
                      : "profile_menu_btn_disable"
                  }
                  onClick={(event) => handleMenu(event)}
                >
                  Portofolio
                </a>
              </div>
              <div
                className={`col-sm-4 text-center ${
                  menuActive == "expKerja"
                    ? "profile_menu_active"
                    : "profile_menu_disable"
                }`}
              >
                <a
                  name="menu_btn2"
                  className={
                    menuActive == "expKerja"
                      ? "profile_menu_btn_active"
                      : "profile_menu_btn_disable"
                  }
                  onClick={(event) => handleMenu(event)}
                >
                  Pengalaman Kerja
                </a>
              </div>
            </div>
            {menuActive == "porto" ? (
              <div className="row row-cols-sm-3 g-3 mt-4">
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
            ) : (
              <div className="row mt-4 m-0">
                <div className="row border-bottom m-2 mb-4">
                  <div className="col-md-2 text-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2910/2910795.png"
                      alt=""
                      className="profile_expKerja_img"
                    />
                  </div>
                  <div className="col-sm">
                    <h6 className="m-0 profile_exp_job">Engineer</h6>
                    <p className="m-0 profile_exp_place">Tokopedia</p>
                    <p className="profile_exp_time">
                      July 2019 - January 2020, 6 months
                    </p>
                    <p className="profile_exp_desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos perferendis adipisci eligendi asperiores velit harum,
                      est quaerat enim laboriosam qui repellendus magnam a
                      voluptates fugit repellat sapiente at? Magni, similique.
                    </p>
                  </div>
                </div>
                <div className="row border-bottom m-2 mb-4">
                  <div className="col-md-2 text-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2910/2910795.png"
                      alt=""
                      className="profile_expKerja_img"
                    />
                  </div>
                  <div className="col-sm">
                    <h6 className="m-0 profile_exp_job">Engineer</h6>
                    <p className="m-0 profile_exp_place">Tokopedia</p>
                    <p className="profile_exp_time">
                      July 2019 - January 2020, 6 months
                    </p>
                    <p className="profile_exp_desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos perferendis adipisci eligendi asperiores velit harum,
                      est quaerat enim laboriosam qui repellendus magnam a
                      voluptates fugit repellat sapiente at? Magni, similique.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
