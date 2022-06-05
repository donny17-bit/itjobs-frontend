import React, { useState, useEffect } from "react";

export default function ProfileCard(props) {
  const { data, sosMed } = props;
  const defaultImg = "https://cdn-icons-png.flaticon.com/512/7024/7024005.png";
  return (
    <>
      <div className="card pb-5 pt-4 profile_card">
        <div className="text-center">
          <img
            src={data.image ? data.image : defaultImg}
            className="card-img-top border profile_img"
            alt=".."
          />
        </div>
        <div className="card-body mt-3">
          <h5 className="card-title profile_name pb-0 mb-0">{data.fullName}</h5>
          <p className="card-title profile_job">Web Developer</p>
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
        {sosMed ? (
          <ul className="list-group border-0 list-group-flush">
            <li className="list-group-item border-0 profile_text">
              <i className="bi bi-envelope"></i> {sosMed[0]}
            </li>
            <li className="list-group-item border-0 profile_text">
              <i className="bi bi-instagram"></i> {sosMed[1]}
            </li>
            <li className="list-group-item border-0 profile_text">
              <i className="bi bi-github"></i> {sosMed[2]}
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
