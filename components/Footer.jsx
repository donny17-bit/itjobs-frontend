import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="container-fluid bg-primary pt-5 pb-4">
      <div className="container-lg">
        <div className="mb-5">
          <h2 className="fs-3 fw-semibold text-white mb-3">
            <i className="bi bi-stack text-white fs-4 me-2"></i>itJobs
          </h2>
          <p className="fs-7 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Quaerat vero velit eaque minima recusandae rerum!
          </p>
        </div>
        <hr className="text-white opacity-75" />
        <div className="d-flex justify-content-between">
          <span className="text-white fs-7 me-auto">
            &copy; 2022 itJobs. All right reserved.
          </span>
          <div>
            <Link href="#">
              <a className="link-light fs-7 fw-semibold me-3">Telepon</a>
            </Link>
            <Link href="#">
              <a className="link-light fs-7 fw-semibold">Email</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
