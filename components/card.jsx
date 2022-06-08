import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Card(props) {
  const router = useRouter();
  return (
    <div>
      <div className="d-flex px-3 bg-white pb-3 border border-light ">
        <div className="mt-4 my-md-3 col-3 col-md-1">
          <div className="position-relative">
            <Image
              src={
                props?.image
                  ? `${process.env.URL_CLOUDINARY}${props.image}`
                  : `${process.env.URL_CLOUDINARY}profiles/profile-placeholder_zpfgnr.png`
              }
              layout="responsive"
              objectFit="cover"
              className="rounded-circle"
              width="100px"
              height="100px"
              alt=""
            ></Image>
          </div>
        </div>
        <div className="flex-grow-1 ms-3">
          <h6 className="mt-4 mb-0 fw-bold">{props.fullName}</h6>
          <small className="text-black-50 ">
            {props.type}
            <span className="d-none d-md-inline">- {props.role}</span>
            <br />
            <div className="d-none d-md-inline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt me-2 "
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              {props.address}
            </div>
          </small>
          <div className="d-flex overflow-auto mt-2 flex-wrap">
            {props.skills
              ? props.skills
                  .split(",")
                  .slice(0, 3)
                  .map((v) => (
                    <button
                      className="btn btn-sm bg-warning text-white p-1 px-md-3 py-1 me-2 bg-opacity-50 border border-warning text-truncate fs-8 mb-2"
                      key={v}
                    >
                      <small>{v}</small>
                    </button>
                  ))
              : ""}
          </div>
        </div>
        <div className="d-none d-lg-inline">
          <button
            className="btn mt-5 btn-primary px-4"
            onClick={() => router.push(`/profile/${props.id}`)}
          >
            Lihat Profile
          </button>
        </div>
      </div>
    </div>
  );
}
