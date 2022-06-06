import React from "react";
import Layout from "../components/Layout/MainLayout";
import Image from "next/image";
import TestiCard from "../components/TestiCard";

function LandingPage() {
  const testiData = [
    {
      name: "Gavin Alter",
      job: "Web Developer",
      image: "/image/profile-placeholder.png",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.",
    },
    {
      name: "Nonso Almiro",
      job: "Web Developer",
      image: "/image/profile-placeholder.png",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Chika Maitland",
      job: "Web Developer",
      image: "/image/profile-placeholder.png",
      testimonial: "Lorem ipsum dolor sit amet, consectetur ",
    },
    {
      name: "Jameson Emilis",
      job: "Web Developer",
      image: "/image/profile-placeholder.png",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.",
    },
    {
      name: "Adeola Katlega",
      job: "Web Developer",
      image: "/image/profile-placeholder.png",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Amit Chibuzo",
      job: "Web Developer",
      image: "/image/profile-placeholder.png",
      testimonial: "Lorem ipsum dolor sit amet, consectetur ",
    },
  ];

  return (
    <Layout title={"itJobs"}>
      <section className="container-fluid bg-white">
        <div className="container-lg py-5">
          <div className="row">
            <div className="order-2 order-sm-1 col-sm-7 col-md-6 px-3 px-md-5 d-flex flex-column justify-content-center align-items-center align-items-sm-start text-center text-sm-start">
              <h2 className="fs-1 fw-semibold mb-3">
                Talenta terbaik negeri untuk perubahan revolusi 4.0
              </h2>
              <p className="opacity-75 mb-4 mb-lg-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
              <button className="btn btn-primary px-3 py-2 py-md-3 fw-semibold">
                Mulai Dari Sekarang
              </button>
            </div>
            <div className="order-1 order-sm-2 col-sm-5 col-md-6 text-center mb-4 mb-sm-0">
              <Image
                src="/image/landing1.png"
                alt="ilustrasi pekerja"
                width={450}
                height={450}
                objectFit="contain"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      <section
        className="container-fluid bg-white"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div className="container-lg py-5">
          <div className="row">
            <div className="col-sm-5 d-none d-sm-flex align-items-center">
              <Image
                src="/image/landing2.png"
                alt="pekerja"
                width={500}
                height={400}
                objectFit="contain"
              />
            </div>
            <div className="col-sm-7 px-3 px-md-5 d-flex flex-column justify-content-center align-items-center align-items-sm-start">
              <h2 className="fw-semibold mb-3 mb-md-4 text-center text-sm-start">
                Kenapa harus mencari talent di{" "}
                <span className="text-primary fw-bold">itJobs</span>?
              </h2>
              <ul className="list-unstyled">
                <li className="mb-2 mb-md-4">
                  <i className="bi bi-check-circle-fill text-primary me-3"></i>
                  Lorem ipsum dolor sit amet
                </li>
                <li className="mb-2 mb-md-4">
                  <i className="bi bi-check-circle-fill text-primary me-3"></i>
                  Lorem ipsum dolor sit amet
                </li>
                <li className="mb-2 mb-md-4">
                  <i className="bi bi-check-circle-fill text-primary me-3"></i>
                  Lorem ipsum dolor sit amet
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-primary me-3"></i>
                  Lorem ipsum dolor sit amet
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid bg-white">
        <div className="container-lg py-5">
          <div className="row">
            <div className="col-sm-6 px-3 px-md-5 d-flex flex-column justify-content-center align-items-center align-items-sm-start">
              <h2 className="fw-semibold mb-2 text-center text-sm-left">
                Skill Tallent
              </h2>
              <p className="opacity-75 mb-4 text-center text-sm-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
              <ul className="list-unstyled text-nowrap">
                <div className="row">
                  <div className="col-5">
                    <li className="mb-2 mb-md-4">
                      <i className="bi bi-check-circle-fill text-warning me-3"></i>
                      Java
                    </li>
                    <li className="mb-2 mb-md-4">
                      <i className="bi bi-check-circle-fill text-warning me-3"></i>
                      Kotlin
                    </li>
                    <li className="mb-2 mb-md-4">
                      <i className="bi bi-check-circle-fill text-warning me-3"></i>
                      PHP
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill text-warning me-3"></i>
                      Javascript
                    </li>
                  </div>
                  <div className="col-7">
                    <li className="mb-2 mb-md-4">
                      <i className="bi bi-check-circle-fill text-warning me-3"></i>
                      Golang
                    </li>
                    <li className="mb-2 mb-md-4">
                      <i className="bi bi-check-circle-fill text-warning me-3"></i>
                      C++
                    </li>
                    <li className="mb-2 mb-md-4">
                      <i className="bi bi-check-circle-fill text-warning me-3"></i>
                      Ruby
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill text-warning me-3"></i>
                      10+ Bahasa Lainnya
                    </li>
                  </div>
                </div>
              </ul>
            </div>
            <div className="col-sm-6 d-none d-sm-flex align-items-center">
              <Image
                src="/image/landing3.png"
                alt="pekerja"
                width={500}
                height={400}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="container-fluid"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div className="container-lg py-5">
          <h2 className="text-center mb-4">
            Their opinion about{" "}
            <span className="fw-bold text-primary">itJobs</span>
          </h2>
          <div
            id="testimonialCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner px-3">
              <div className="carousel-item active">
                <div className="row landing_testi">
                  {testiData.slice(0, 3).map((testi, index) => (
                    <div
                      className="col-sm-6 col-md-4 px-3 px-md-4 py-4 d-flex"
                      key={index}
                    >
                      <TestiCard data={testi} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="carousel-item">
                <div className="row landing_testi">
                  {testiData.slice(3, 6).map((testi, index) => (
                    <div
                      className="col-sm-6 col-md-4 px-3 px-md-4 py-4 d-flex"
                      key={index}
                    >
                      <TestiCard data={testi} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button
              className="btn btn-primary rounded-circle pt-2 ps-2 pe-2 pb-1 shadow position-absolute top-50 start-0 translate-middle-y"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="btn btn-primary rounded-circle pt-2 ps-2 pe-2 pb-1 shadow position-absolute top-50 end-0 translate-middle-y"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <section className="container-fluid">
        <div className="container-lg py-3 py-md-5">
          <div className="landing_mailist bg-primary p-5 my-5 text-center text-sm-start d-block d-sm-flex justify-content-between align-items-center">
            <h2 className="fw-semibold text-white mb-4 mb-sm-0">
              Lorem ipsum <br /> dolor sit amet
            </h2>
            <button role="button" className="btn btn-light px-3 py-2 py-md-3">
              <span className="text-primary fw-semibold">
                Mulai Dari Sekarang
              </span>
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default LandingPage;
