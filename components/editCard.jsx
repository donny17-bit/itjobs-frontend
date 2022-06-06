import React, { useState, useEffect } from "react";

export default function EditCard(props) {
  const { data, sosMed } = props;
  const defaultImg = "https://cdn-icons-png.flaticon.com/512/7024/7024005.png";

  return (
    <>
      <div className="card pb-1 pt-4 profile_card">
        <div className="text-center">
          <img
            src={data.image ? data.image : defaultImg}
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
        </div>
      </div>
    </>
  );
}
