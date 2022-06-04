import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const notifRef = useRef();
  const profileRef = useRef();
  const path = router.pathname;

  const userData = {};

  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

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

  console.log(router);

  return (
    <nav className="container-fluid bg-white py-3 fixed-top">
      <div className="container-lg d-flex justify-content-between align-items-center">
        <h1 className="fs-3 fw-bold text-primary mb-0">
          <i className="bi bi-stack text-primary fs-4 me-2"></i>itJobs
        </h1>
        {path === "/" ? (
          Object.keys(userData).length === 0 ? (
            // Navbar on landing page before login
            <div className="d-flex">
              <button type="button" className="btn btn-outline-primary me-2">
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
                    <button type="button" className="dropdown-item py-2">
                      Sebagai Pekerja
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item py-2">
                      Sebagai Perusahaan
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            // Navbar on landing page after login
            <button type="button" className="btn btn-primary">
              Profile
            </button>
          )
        ) : (
          // Navbar on any page other than lading page after login
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
                  >
                    Profile
                  </button>
                  <button
                    type="button"
                    className="dropdown-item py-2 rounded-bottom"
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
  );
}
