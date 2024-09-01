import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

export default function Navbar({ currentSection, handleScroll }) {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const overlayRef = useRef(null);
  const largeScreenNavRef = useRef(null);
  const [openNavbar, setOpenNavbar] = useState(false);

  useEffect(() => {
    // GSAP animation for larger screens
    if (window.innerWidth >= 992) {
      gsap.from(largeScreenNavRef.current.children, {
        duration: 1,
        y: -50,
        opacity: 0,
        stagger: 0.3,
        ease: "power3.out",
      });
    }
  }, []);

  useEffect(() => {
    if (openNavbar) {
      gsap.to(overlayRef.current, {
        duration: 0.5,
        x: "0%",
        ease: "power3.out",
      });

      gsap.from(navRef.current.children, {
        duration: 1,
        delay: 0.5,
        y: -50,
        opacity: 0,
        stagger: 0.3,
        ease: "power3.out",
      });
    } else {
      gsap.to(overlayRef.current, {
        duration: 0.5,
        x: "100%",
        ease: "power3.in",
      });
    }
  }, [openNavbar]);

  const handleNavItemClick = (section) => {
    handleScroll(section);
    setOpenNavbar(false);
  };

  return (
    <nav className="container-fluid w-100 position-fixed bg-black z-3 d-flex justify-content-center align-items-center px-0 px-lg-5 pt-4 text-white">
      <div className="row w-100">
        <div className="d-flex justify-content-lg-between nav align-items-center">
          <div ref={logoRef} className="fs-2 fw-semibold ps-4">
            Heronixx
          </div>
          <div ref={navRef} className="position-relative d-flex justify-content-center align-items-center">
            <button
              className="btn d-lg-none d-md-none text-white ms-5"
              onClick={() => setOpenNavbar(!openNavbar)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="3em"
                viewBox="0 0 24 24"
              >
                <path fill="#cfcfcf" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
              </svg>
            </button>
            <div
              ref={overlayRef}
              className={`position-fixed top-0 start-0 w-50 h-50 ps-5 bg-black d-flex ms-5 align-items-center ${
                openNavbar ? "d-flex" : "d-none"
              }`}
              style={{
                transform: "translateX(100%)",
                transition: "transform 0.5s ease",
              }}
            >
              <div
                ref={navRef}
                className="d-flex flex-column align-items-center fs-3 text-white"
              >
                {["page1", "page2", "page3", "page4"].map((section, index) => (
                  <Link
                    key={index}
                    className={`nav-link ${
                      currentSection === section ? "focused" : ""
                    }`}
                    onClick={() => handleNavItemClick(section)}
                  >
                    {section === "page1" && "Home"}
                    {section === "page2" && "Demos"}
                    {section === "page3" && "Features"}
                    {section === "page4" && "Contact Us"}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div ref={largeScreenNavRef} className="d-none d-md-flex navItem align-items-center gap-4 fs-5 pe-5">
            {["page1", "page2", "page3", "page4"].map((section, index) => (
              <Link
                key={index}
                className={`nav-link ${
                  currentSection === section ? "focused" : ""
                }`}
                onClick={() => handleScroll(section)}
              >
                {section === "page1" && "Home"}
                {section === "page2" && "Demos"}
                {section === "page3" && "Features"}
                {section === "page4" && "Contact Us"}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
