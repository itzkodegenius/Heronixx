import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Features() {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const SVGRef1 = useRef(null);
  const SVGRef2 = useRef(null);
  const SVGRef3 = useRef(null);
  const SVGRef4 = useRef(null);
  const SVGRef5 = useRef(null);
  const bg1 = useRef(null);
  const bg2 = useRef(null);
  const bg3 = useRef(null);
  const bg4 = useRef(null);
  const bg5 = useRef(null);
  const textRef2 = useRef(null);
  useEffect(() => {
    gsap.matchMedia().add("(max-width : 768px", () => {
      gsap.from(headingRef.current, {
        opacity: 0,
        duration: 1,
        y: 100,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 190%",
          end: "top 60%",
          scrub: 1,
        },
      });
      gsap.from(textRef.current, {
        opacity: 0,
        duration: 1,
        y: -100,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 190%",
          end: "top 60%",
          scrub: 2,
        },
      });
      gsap.from(textRef2.current, {
        opacity: 0,
        duration: 1,
        y: 100,
        scrollTrigger: {
          trigger: textRef2.current,
          start: "top 190%",
          end: "top 60%",
          scrub: 2,
        },
      });

      gsap.from(bg1.current, {
        opacity: 0,
        duration: 1,
        x: -100,
        scrollTrigger: {
          trigger: bg1.current,
          start: "top 190%",
          end: "top 60%",
          scrub: 2,
        },
      });

      gsap.from(bg2.current, {
        opacity: 0,
        duration: 1,
        y: -100,
        scrollTrigger: {
          trigger: bg2.current,
          start: "top 190%",
          end: "top 60%",
          scrub: 2,
        },
      });

      gsap.from(bg3.current, {
        opacity: 0,
        duration: 1,
        x: 100,
        scrollTrigger: {
          trigger: bg3.current,
          start: "top 190%",
          end: "top 60%",
          scrub: 2,
        },
      });

      gsap.from(bg4.current, {
        opacity: 0,
        duration: 1,
        y: 100,
        scrollTrigger: {
          trigger: bg4.current,
          start: "top 190%",
          end: "top 60%",
          scrub: 2,
        },
      });

      gsap.from(bg5.current, {
        opacity: 0,
        duration: 1,
        y: 100,
        scrollTrigger: {
          trigger: bg5.current,
          start: "top 190%",
          end: "top 60%",
          scrub: 2,
        },
      });
    });
    gsap.matchMedia().add("(min-width : 769px", () => {
      gsap.from(headingRef.current, {
        opacity: 0,
        duration: 1,
        y: 100,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 150%",
          end: "top 60%",
          scrub: 2,
        },
      });
      gsap.from(textRef.current, {
        opacity: 0,
        duration: 1,
        y: -100,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 150%",
          end: "top 60%",
          scrub: 2,
        },
      });
      gsap.from(textRef2.current, {
        opacity: 0,
        duration: 1,
        y: 100,
        scrollTrigger: {
          trigger: textRef2.current,
          start: "top 150%",
          end: "top 60%",
          scrub: 2,
        },
      });

      gsap.from(bg1.current, {
        opacity: 0,
        duration: 1,
        x: -100,
        scrollTrigger: {
          trigger: bg1.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 2,
        },
      });

      gsap.from(bg2.current, {
        opacity: 0,
        duration: 1,
        y: -100,
        scrollTrigger: {
          trigger: bg2.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 2,
        },
      });

      gsap.from(bg3.current, {
        opacity: 0,
        duration: 1,
        x: 100,
        scrollTrigger: {
          trigger: bg3.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 2,
        },
      });

      gsap.from(bg4.current, {
        opacity: 0,
        duration: 1,
        y: 100,
        scrollTrigger: {
          trigger: bg4.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 2,
        },
      });

      gsap.from(bg5.current, {
        opacity: 0,
        duration: 1,
        y: 100,
        scrollTrigger: {
          trigger: bg5.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 2,
        },
      });
    });
  }, []);
  return (
    <>
      <div className="w-100 mt-5 d-flex justify-content-center">
        <div className="mt-5 d-flex flex-column align-items-center position-relative">
          <div style={{ width: "max-content" }} className="position-relative">
            <div
              ref={textRef2}
              style={{ color: "#A8AEB2", letterSpacing: "2.5px" }}
              className="text-center text-uppercase fs-5 Respara"
            >
              Our Specialized Features
            </div>
            <h1
              ref={headingRef}
              className="text-white text-center mt-3 featureHeader Respara"
            >
              Expert Creative Features
            </h1>
            <div
              ref={textRef}
              style={{ color: "#A8AEB2", letterSpacing: "2.5px" }}
              className="text-center text-uppercase mt-5 fs-6 Respara"
            >
              Our Responsive Hero Section Template Includes
            </div>
          </div>
          <div className="d-flex w-75 px-3 justify-content-center flex-wrap gap-4 mt-5">
            <div ref={bg1} style={{ width: "275px" }} class="cards mt-5">
              <div class="container-card d-flex flex-column align-items-center bg-grey-box">
                <svg
                  ref={SVGRef1}
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.5em"
                  height="5.5em"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#cfcfcf"
                    d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0m-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"
                  />
                </svg>
                <p className="text-center text-light fs-6 fw-semibold pt-3 pb-2">
                  Heronixx has the pure Bootstrap 5.1.3 framework crafted,
                  clean, smart & creative design.
                </p>
              </div>
            </div>
            <div ref={bg2} style={{ width: "275px" }} class="cards mt-5">
              <div class="container-card d-flex flex-column align-items-center bg-grey-box">
                <svg
                  ref={SVGRef5}
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.5em"
                  height="5.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#cfcfcf"
                    d="M2 6c0-1.505.78-3.08 2-4c0 .845.69 2 2 2a3 3 0 0 1 3 3c0 .386-.079.752-.212 1.091a75 75 0 0 1 2.191 1.808l-2.08 2.08a76 76 0 0 1-1.808-2.191A3 3 0 0 1 6 10c-2.21 0-4-1.79-4-4m12.152 6.848l1.341-1.341A4.45 4.45 0 0 0 17.5 12A4.5 4.5 0 0 0 22 7.5c0-.725-.188-1.401-.493-2.007L18 9l-2-2l3.507-3.507A4.45 4.45 0 0 0 17.5 3A4.5 4.5 0 0 0 13 7.5c0 .725.188 1.401.493 2.007L3 20l2 2l6.848-6.848a69 69 0 0 0 5.977 5.449l1.425 1.149l1.5-1.5l-1.149-1.425a69 69 0 0 0-5.449-5.977"
                  />
                </svg>
                <p className="text-center text-light fs-6 fw-semibold pt-3 pb-2">
                  All the components are reusable and easy to customize it as
                  needs.
                </p>
              </div>
            </div>
            <div ref={bg3} style={{ width: "275px" }} class="cards mt-5">
              <div class="container-card d-flex flex-column align-items-center bg-grey-box">
                <svg
                  ref={SVGRef2}
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.5em"
                  height="5.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#cfcfcf"
                    d="M4 6v10h5v-4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4h2V6zM0 20v-2h4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h4v2h-6a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm11.5 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5m4 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5M13 20v1h1v-1zm-2-8v7h5v-7z"
                  />
                </svg>
                <p className="text-center text-light fs-6 fw-semibold pt-3 pb-2">
                  Heronixx is fully responsive and comes with Bootstrap
                  Framework
                </p>
              </div>
            </div>
            <div ref={bg4} style={{ width: "275px" }} class="cards mt-5">
              <div class="container-card d-flex flex-column align-items-center bg-grey-box">
                <svg
                  ref={SVGRef3}
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.5em"
                  height="5.5em"
                  viewBox="0 0 14 14"
                >
                  <g
                    fill="none"
                    stroke="#cfcfcf"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M13.5 10.5v-8A.5.5 0 0 0 13 2H1c-.265 0-.5.235-.5.5v8c0 .265.235.5.5.5h12c.265 0 .5-.235.5-.5M6 11l-1 2.5M8 11l1 2.5m-5 0h6" />
                    <path d="M5 5L3.5 6.5L5 8m4-3l1.5 1.5L9 8" />
                  </g>
                </svg>
                <p className="text-center text-light fs-6 fw-semibold pt-3 pb-2">
                  Clean & well commented codes structured and easy to understand
                </p>
              </div>
            </div>
            <div ref={bg5} style={{ width: "275px" }} class="cards mt-5">
              <div class="container-card d-flex flex-column align-items-center bg-grey-box">
                <svg
                  ref={SVGRef4}
                  xmlns="http://www.w3.org/2000/svg"
                  width="5.5em"
                  height="5.5em"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="#cfcfcf"
                      d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm14 0H6v16h12zM8 9a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m1 4a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z"
                    />
                  </g>
                </svg>
                <p className="text-center text-light fs-6 fw-semibold pt-3 pb-5">
                  A nice documentation to help you get started fast
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
