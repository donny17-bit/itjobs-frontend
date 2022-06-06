import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "../../../utils/axios";

function Company(props) {
  const defaultImg = "https://cdn-icons-png.flaticon.com/512/7024/7024005.png";

  const router = useRouter();
  const { idCompany } = router.query;
  const [data, setData] = useState({});
  const [sosMed, setSosMed] = useState();

  const getCompanyId = async () => {
    const result = await axios.get(`company/${idCompany}`);
    console.log(result);
    setData(result.data.data[0]);

    if (result.data.data[0].socialMedia) {
      setSosMed(result.data.data[0].socialMedia.split(","));
    }
  };

  console.log(data);

  // make sure id loaded
  useEffect(() => {
    if (!idCompany) {
      return;
    }
    getCompanyId();
  }, [idCompany]);

  return (
    <>
      <div className="container-fluid profile_company_container">
        <div className="col-sm text-center profile_company_card p-5">
          <div className="text-center">
            <img
              src={data.image ? data.image : defaultImg}
              className=" border profile_company_img"
              alt="..."
            />
          </div>
          <h5 className="profile_name pb-0 mb-0">{data.companyName}</h5>
          <p className="profile_job m-0">{data.companyField}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item border-0 p-2 ps-0 profile_text">
              <i className="bi bi-geo-alt"></i> {data.address}
            </li>
          </ul>
          <div className="row justify-content-center mb-2">
            <div className="col col-sm-7">
              <p className="pe-0 profile_text">{data.description}</p>
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
