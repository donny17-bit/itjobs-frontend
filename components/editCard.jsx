import React, { useState, useEffect } from "react";

export default function EditCard(props) {
  const { data, userImg } = props;
  let defaultImg = "https://cdn-icons-png.flaticon.com/512/7024/7024005.png";

  if (userImg) {
    defaultImg = userImg;
  }

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
            <input
              type="file"
              id="actual-btn"
              name="userImg"
              onChange={props.imgChange}
              hidden
            />
            <label
              for="actual-btn"
              className="btn btn-link profile_edit_btn mb-0 pb-0"
            >
              <i className="bi bi-pencil"></i> Edit
            </label>
          </p>
          <button className=" btn btn-primary" onClick={props.saveImg}>
            Simpan
          </button>
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
