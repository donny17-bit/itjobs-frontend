import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { getHire } from "../store/action/hire";
import { logout } from "../store/action/auth";
import { getUserById } from "../store/action/user";

export default function Navbar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const notifRef = useRef();
  const profileRef = useRef();
  const path = router.pathname;

  const userData = useSelector((state) => state.user.data[0]);
  const id = Cookies.get("id");
  const asA = Cookies.get("asA");

  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [menu, setMenu] = useState("home");

  useEffect(() => {
    getHireNotif();
  }, []);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        isNotifOpen &&
        notifRef.current &&
        !notifRef.current.contains(e.target)
      ) {
        setIsNotifOpen(false);
      }
      if (
        isProfileMenuOpen &&
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("pointerdown", checkIfClickedOutside);
    };
  }, [isNotifOpen, isProfileMenuOpen]);

  const getUserData = () => {
    dispatch(getUserById(id, asA));
  };

  const getHireNotif = () => {
    dispatch(getHire(id));
  };

  const handleProfileBtn = () => {
    router.push(
      asA === "pekerja" ? `/profile/${id}` : `/profile/company/${id}`
    );
  };

  const handleLogout = () => {
    dispatch(logout());
    getUserData();
    Cookies.remove("asA");
    Cookies.remove("id");
    Cookies.remove("token");
    // Cookies.remove("refreshToken");
    localStorage.clear();
    router.push("/");
  };

  return (
    <>
      {/* Navbar for screen sm+ */}
      <nav className="container-fluid bg-white py-3 fixed-top d-none d-sm-block">
        <div className="container-lg d-flex justify-content-between align-items-center">
          <h1 className="fs-3 fw-bold text-primary mb-0">
            <i className="bi bi-stack text-primary fs-4 me-2"></i>itJobs
          </h1>
          {path === "/" ? (
            !userData ? (
              // Navbar on landing page before login size sm+
              <div className="d-flex">
                <button
                  type="button"
                  className="btn btn-outline-primary me-2"
                  onClick={() => router.push("/auth/login")}
                >
                  Masuk
                </button>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="dropdownDaftar"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-offset="0,10"
                  >
                    Daftar
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end shadow"
                    aria-labelledby="dropdownDaftar"
                  >
                    <li>
                      <button
                        type="button"
                        className="dropdown-item py-2"
                        onClick={() => router.push("auth/register-pekerja")}
                      >
                        Sebagai Pekerja
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="dropdown-item py-2"
                        onClick={() => router.push("auth/register-company")}
                      >
                        Sebagai Perusahaan
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              // Navbar on landing page after login size sm+
              <div>
                <button
                  type="button"
                  className="btn btn-primary me-2"
                  onClick={handleProfileBtn}
                >
                  Profile
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )
          ) : (
            // Navbar on any page other than lading page after login size sm+
            <div className="d-flex align-items-center">
              <div
                role="button"
                className="px-2 me-4 position-relative"
                style={{ cursor: "pointer" }}
                ref={notifRef}
                onClick={() => setIsNotifOpen((currentState) => !currentState)}
              >
                {isNotifOpen ? (
                  <i className="bi bi-bell-fill text-warning fs-5"></i>
                ) : (
                  <i className="bi bi-bell fs-5"></i>
                )}

                {/* Notif Dropdown */}
                {isNotifOpen && (
                  <div
                    className="navbar_notif-dropdown shadow d-flex flex-column justify-content-center align-items-center position-absolute start-50 translate-middle-x"
                    style={{ top: "200%" }}
                  >
                    <div>
                      <Image
                        src="/image/emptyNotif.png"
                        alt="empty notification"
                        width={100}
                        height={80}
                        objectFit="contain"
                      />
                    </div>
                    <span className="d-block fs-7">Belum ada notifikasi</span>
                  </div>
                )}
              </div>

              <div
                role="button"
                className="position-relative"
                style={{
                  width: "36px",
                  height: "36px",
                  cursor: "pointer",
                }}
                ref={profileRef}
                onClick={() =>
                  setIsProfileMenuOpen((currentState) => !currentState)
                }
              >
                <Image
                  src={
                    "https://res.cloudinary.com/itjobs/image/upload/v1654266716/profiles/profile-placeholder_zpfgnr.png"
                  }
                  alt="profile"
                  width={36}
                  height={36}
                  objectFit="cover"
                  style={{ borderRadius: "50%" }}
                />

                {/* Profile Dropdown */}
                {isProfileMenuOpen && (
                  <div
                    className="navbar_profile-dropdown shadow d-flex flex-column justify-content-center align-items-center position-absolute end-0"
                    style={{ top: "180%" }}
                  >
                    <button
                      type="button"
                      className="dropdown-item py-2 rounded-top"
                      onClick={handleProfileBtn}
                    >
                      Profile
                    </button>
                    <button
                      type="button"
                      className="dropdown-item py-2 rounded-bottom"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Navbar on screen xs */}
      {path === "/" ? (
        <nav className="container-fluid bg-white py-3 fixed-top d-block d-sm-none">
          <div className="container-lg d-flex justify-content-between align-items-center">
            <h1 className="fs-3 fw-bold text-primary mb-0">
              <i className="bi bi-stack text-primary fs-4 me-2"></i>itJobs
            </h1>
            {Object.keys(userData).length === 0 ? (
              // Navbar on landing page before login
              <div className="d-flex">
                <button
                  type="button"
                  className="btn btn-outline-primary me-2"
                  onClick={() => router.push("/auth/login")}
                >
                  Masuk
                </button>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="dropdownDaftar"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-offset="10,20"
                  >
                    Daftar
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end shadow"
                    aria-labelledby="dropdownDaftar"
                  >
                    <li>
                      <button
                        type="button"
                        className="dropdown-item py-2"
                        onClick={() => router.push("/auth/register-pekerja")}
                      >
                        Sebagai Pekerja
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="dropdown-item py-2"
                        onClick={() => router.push("/auth/register-company")}
                      >
                        Sebagai Perusahaan
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              // Navbar on landing page after login
              <div>
                <button
                  type="button"
                  className="btn btn-primary me-2"
                  onClick={handleProfileBtn}
                >
                  Profile
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>
      ) : (
        // Navbar on any page other than landing page
        <nav
          className="container-fluid bg-white py-4 fixed-bottom d-block d-sm-none"
          style={{
            borderRadius: "24px 24px 0 0",
            boxShadow: "0 -0.5rem 1rem rgba(0, 0, 0, 0.15)",
          }}
        >
          <div className="container">
            <div className="row">
              <div
                className="col-3 d-flex justify-content-center align-items-center"
                role="button"
                onClick={() => {
                  setMenu("home");
                  router.push("/home");
                }}
              >
                {menu === "home" ? (
                  <i className="d-block bi bi-grid-fill fs-4 text-primary"></i>
                ) : (
                  <i className="d-block bi bi-grid fs-4"></i>
                )}
              </div>
              <div
                className="col-3 d-flex justify-content-center align-items-center"
                role="button"
                onClick={() => {
                  setMenu("search");
                  // router.push("/search");
                }}
              >
                {menu === "search" ? (
                  <i className="d-block bi bi-search fs-4 text-primary"></i>
                ) : (
                  <i className="d-block bi bi-search fs-4"></i>
                )}
              </div>
              <div
                className="col-3 d-flex justify-content-center align-items-center"
                role="button"
                onClick={() => {
                  setMenu("chat");
                  // router.push("/chat");
                }}
              >
                {menu === "chat" ? (
                  <i className="d-block bi bi-chat-fill fs-4 text-primary"></i>
                ) : (
                  <i className="d-block bi bi-chat fs-4"></i>
                )}
              </div>
              <div
                className="col-3 d-flex justify-content-center align-items-center"
                role="button"
                onClick={() => {
                  setMenu("profile");
                  router.push(
                    asA === "pekerja"
                      ? `/profile/${id}`
                      : `/profile/company/${id}`
                  );
                }}
              >
                <Image
                  d-block
                  src={
                    "https://res.cloudinary.com/itjobs/image/upload/v1654266716/profiles/profile-placeholder_zpfgnr.png"
                  }
                  alt="profile"
                  width={28}
                  height={28}
                  objectFit="cover"
                  style={{
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
