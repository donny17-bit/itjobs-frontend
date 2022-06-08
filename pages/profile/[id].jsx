import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "../../utils/axios";
import ProfileCard from "../../components/profileCard";

import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../store/action/user";

function Profile() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const asA = Cookies.get("asA");
  const { id } = router.query;
  const [menuActive, setMenuActive] = useState("porto");
  const [data, setData] = useState({});
  const [sosMed, setSosMed] = useState();
  const [skill, setSkill] = useState([]);
  const [porto, setPorto] = useState();
  const [exp, setExp] = useState();

  const getUserId = async () => {
    const result = await dispatch(getUserById(id, asA));
    setData(result.value.data.data[0]);

    if (result.value.data.data[0].socialMedia) {
      setSosMed(result.value.data.data[0].socialMedia.split(","));
    }

    if (result.value.data.data[0].skill) {
      setSkill(result.value.data.data[0].skill.split(","));
    }
  };

  const getPorto = async () => {
    const result = await axios.get(`portfolio/${id}`);
    setPorto(result.data.data);
  };

  const getExp = async () => {
    const result = await axios.get(`experience/${id}`);
    setExp(result.data.data);
  };

  // make sure id loaded
  useEffect(() => {
    if (!id) {
      return;
    }
    getUserId();
    getPorto();
    getExp();
  }, [id]);

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
            <ProfileCard data={data} sosMed={sosMed} skill={skill} />
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
                {porto
                  ? porto.map((item) => (
                      <div key={item.id} className="col p-0 text-center">
                        <img
                          src={
                            item.image
                              ? `https://res.cloudinary.com/itjobs/image/upload/v1654266716/${item.image}`
                              : image1
                          }
                          className="profile_porto_img"
                          alt=""
                        />
                        <p className="mt-2 profile_porto_text">
                          {item.appName}
                        </p>
                      </div>
                    ))
                  : ""}
              </div>
            ) : exp ? (
              exp.map((item) => (
                <div className="row mt-4 m-0" key={item.id}>
                  <div className="row border-bottom m-2 mb-4">
                    <div className="col-md-2 text-center">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/2910/2910795.png"
                        alt=""
                        className="profile_expKerja_img"
                      />
                    </div>
                    <div className="col-sm">
                      <h6 className="m-0 profile_exp_job">{item.position}</h6>
                      <p className="m-0 profile_exp_place">
                        {item.companyName}
                      </p>
                      <p className="profile_exp_time">
                        {`${item.dateIn.slice(0, 10)} s/d ${item.dateOut.slice(
                          0,
                          10
                        )}, - months`}
                      </p>
                      <p className="profile_exp_desc">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
