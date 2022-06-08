import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "../../../utils/axios";

import { useDispatch, useSelector } from "react-redux";
import { getCompanyById } from "../../../store/action/company";

function Company() {
  const defaultImg = "https://cdn-icons-png.flaticon.com/512/7024/7024005.png";

  const dispatch = useDispatch();
  const company = useSelector((state) => state.company);

  const router = useRouter();
  const { idCompany } = router.query;
  const [data, setData] = useState({});
  const [sosMed, setSosMed] = useState();

  const getCompanyId = async () => {
    const result = await dispatch(getCompanyById(idCompany));
    setData(result.value.data.data[0]);

    if (result.value.data.data[0].socialMedia) {
      setSosMed(result.value.data.data[0].socialMedia.split(","));
    }
  };

  console.log(data);

  // make sure id loaded
  useEffect(() => {
    if (!idCompany) {
      return;
    }
    if (company.data.length == 0) {
      getCompanyId();
    }
    setData(company.data[0]);
  }, [idCompany]);

  return (
    <>
      <div className="container-fluid profile_company_container">
        <div className="col-sm text-center profile_company_card p-5">
          <div className="text-center">
            <img
              src={
                data.image
                  ? process.env.URL_CLOUDINARY + data.image
                  : defaultImg
              }
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
          <button
            className="btn btn-primary profile_company_btn"
            onClick={() => router.push(`edit/${data.id}`)}
          >
            Edit profile
          </button>
          <div className="row justify-content-center mt-3">
            <div className="col col-sm-4 text-center">
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0 profile_text">
                  <i className="bi bi-envelope"></i> {data.email}
                </li>
                <li className="list-group-item border-0 profile_text">
                  <i className="bi bi-telephone"></i> {data.noTelp}
                </li>
              </ul>
              {sosMed ? (
                <ul className="list-group border-0 list-group-flush">
                  <li className="list-group-item border-0 profile_text">
                    <i className="bi bi-instagram"></i> {sosMed[0]}
                  </li>
                  <li className="list-group-item border-0 profile_text">
                    <i className="bi bi-linkedin"></i> {sosMed[1]}
                  </li>
                </ul>
              ) : (
                ""
              )}
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
