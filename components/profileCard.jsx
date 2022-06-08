import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { logout } from "../store/action/auth";

export default function ProfileCard(props) {
  const router = useRouter();
  const dispatch = useDispatch();

  const { data, sosMed, skill, asA } = props;
  const defaultImg = "https://cdn-icons-png.flaticon.com/512/7024/7024005.png";

  const handleLogout = async () => {
    await dispatch(logout(Cookies.get("refreshToken")));
    Cookies.remove("asA");
    Cookies.remove("id");
    Cookies.remove("token");
    Cookies.remove("refreshToken");
    localStorage.clear();
    window.location.href = "/";
  };
  const image = process.env.URL_CLOUDINARY + data.image;

  return (
    <>
      <div className="card pb-5 pt-4 profile_card">
        <div className="text-center">
          <img
            src={data.image ? image : defaultImg}
            className="card-img-top border profile_img"
            alt=".."
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="card-body mt-3">
          <h5 className="card-title profile_name pb-0 mb-0">{data.fullName}</h5>
          <p className="card-title profile_job">{data.field}</p>
          <p className="card-title profile_role">{data.role}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item border-0 p-2 ps-0 profile_text">
              <i className="bi bi-geo-alt"></i> {data.address}
            </li>
            <li className="list-group-item border-0 p-2 ps-0 profile_text">
              <i className="bi bi-telephone"></i> {data.noTelp}
            </li>
          </ul>
          <p className="card-text profile_text">{data.description}</p>

          <div className="d-grid mb-3">
            {asA == "pekerja" ? (
              <>
                <button
                  className="btn btn-primary profile_btn"
                  onClick={() => router.push(`/profile/edit/${data.id}`)}
                >
                  Edit
                </button>
                <button
                  className="d-block d-sm-none mt-2 btn btn-outline-primary"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => router.push(`/hire/${data.id}`)}
              >
                Hire
              </button>
            )}
          </div>
          <h5 className="card-title">Skill</h5>
          <div className="row p-1 g-2">
            {skill
              ? skill.map((item, index) => (
                  <div className="col-sm-auto p-0 me-1 d-grid" key={index}>
                    <button className="btn btn-warning disabled profile_skill_list">
                      {item}
                    </button>
                  </div>
                ))
              : ""}
          </div>
        </div>
        <ul className="list-group border-0 list-group-flush">
          <li className="list-group-item border-0 profile_text">
            <i className="bi bi-envelope"></i> {data.email}
          </li>
        </ul>
        {sosMed ? (
          <ul className="list-group border-0 list-group-flush">
            {/* <li className="list-group-item border-0 profile_text">
              <i className="bi bi-envelope"></i> {data.email}
            </li> */}
            <li className="list-group-item border-0 profile_text">
              <i className="bi bi-instagram"></i> {sosMed[0]}
            </li>
            <li className="list-group-item border-0 profile_text">
              <i className="bi bi-github"></i> {sosMed[1]}
            </li>
            <li className="list-group-item border-0 profile_text">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z"></path>
              </svg>{" "}
              {sosMed[2]}
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
