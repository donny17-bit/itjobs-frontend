import React from "react";

export default function NotifCard(props) {
  const { id, subject } = props.notif;

  return (
    <div className="text-start">
      <h3 className="fs-7">{subject}</h3>
      <p className="fs-8">
        <span className="fw-semibold fs-8">PT.Woku2</span> mengirimkan email.
        Cek kotak masuk email Anda.
      </p>
      <hr />
    </div>
  );
}
