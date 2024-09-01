import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default function Hero() {
  const headerRef = useRef(null);
  const paraRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        duration: 1,
        delay: 1,
        opacity: 0,
        x: -50,
      });

      gsap.from(paraRef.current, {
        duration: 1,
        delay: 1,
        opacity: 0,
        x: 50,
      });

      gsap.from(logoRef.current.children, {
        duration: 1,
        delay: 1,
        opacity: 0,
        y: -100,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="container-fluid mt-0 pt-5 curved-background mb-5">
      <div className="row w-100 pt-5 d-flex justify-content-center align-items-center">
        <div
          ref={headerRef}
          className="col-12 pt-5 rounded-2 mt-2 text-center display-2 d-flex justify-content-center align-items-center fw-semibold text-white"
        >
          Heronixx - Crafting Modern <br /> Web Interfaces
        </div>
        <div
          className="col-12 pt-5 w-100 d-flex justify-content-center px-lg-5 mb-5 rounded-2 mt-4 text-center fw-light"
          style={{ fontSize: "20px", color: "#c0c0c0" }}
        >
          <p className="fs-5" ref={paraRef} style={{ width: "881px" }}>
            Heronixx is an exceptional, user-friendly, and clean-coded template
            designed for versatility and flexibility. Built with{" "}
            <span className="fw-semibold">React and Bootstrap v5.1.3</span>,
            Heronixx ensures a fully responsive and seamless experience across
            all devices. This modern hero section template is perfect for any
            kind of web theme, providing a solid foundation for a visually
            stunning and highly functional website.
          </p>
        </div>
        <div
          ref={logoRef}
          className="col-12 w-75 mt-5 mx-auto gap-5 d-flex justify-content-center align-items-center"
        >
          <img
            src="react-logo.png"
            width={110}
            alt="React Logo"
            className="animate-up-down pb-2"
          />
          <img
            src="bootstrap-logo.png"
            width={100}
            alt="Bootstrap Logo"
            className="animate-up-down pb-2"
          />
        </div>
      </div>
    </div>
  );
}
