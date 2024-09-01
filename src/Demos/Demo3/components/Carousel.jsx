  import Carousel from "react-bootstrap/Carousel";
  import style from "../demo1.module.css";
  import { useEffect, useRef, useState } from "react";
  import Navbar from "./Navbar";
  import gsap from "gsap";

  function CustomCarousel({ itemClasses = [], imageUrl = [] }) {
    const leftRefs = useRef([]);
    const centerRef = useRef([]);
    const rightRef = useRef([]);
    const imageRefs = useRef([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
      if (leftRefs.current[index]) {
        gsap.from(leftRefs.current[index], {
          opacity: 0,
          duration: 1,
          y: 100,
          delay: 0.5,
        });
        gsap.from(centerRef.current[index], {
          opacity: 0,
          duration: 1,
          delay: 0.5,
          y: 750,
          x: 300,
        });
        gsap.from(rightRef.current[index], {
          opacity: 0,
          duration: 1,
          delay: 0.5,
          y: -100,
        });
      }
    }, [index]);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    const sizes = [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5];

    const handleCircleClick = (colorIndex) => {
      setIndex(colorIndex);
    };

    if (imageUrl.length < 3) {
      console.error("Not enough images provided");
    }

    return (
      <Carousel
        interval={null}
        slide={false}
        onSelect={handleSelect}
        activeIndex={index}
      >
        {["RED", "BLUE", "GREEN"].map((color, idx) => (
          <Carousel.Item className={itemClasses[index]} key={idx}>
            <Navbar />
            <div className="container-fluid w-100 d-flex flex-column flex-lg-row">
              <div
                ref={(el) => (leftRefs.current[idx] = el)}
                style={{ height: "88vh" }}
                className={`${style.tommorowFont} d-none d-lg-flex flex-row flex-lg-column p-2 pb-3 justify-content-end align-items-start w-25`}
              >
                <div className="text-white fs-3 fw-light mb-2">
                  JORDAN 1 {color}
                </div>
                <div className="text-white fs-6 fw-light">
                  <div>RELEASE DATE</div>
                  <div>2016-10-06</div>
                  <div>COLOR WAY</div>
                  <div>SAIL/STARFISH-BLACK</div>
                </div>
                <div className="text-white">
                  <div
                    className={`${style.tradeGoThicFont} fw-semibold mt-5 fs-5`}
                  >
                    SELECT SIZE (US)
                  </div>
                  <div
                    style={{ width: "85%" }}
                    className="d-flex gap-3 mt-3 flex-wrap"
                  >
                    {sizes.map((size) => (
                      <div
                        key={size}
                        style={{
                          width: "45px",
                          height: "45px",
                          cursor: "pointer",
                        }}
                        className="border-light border rounded-1 text-center d-flex justify-content-center align-items-center"
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-white">
                  <div
                    className={`${style.tradeGoThicFont} fw-semibold mt-3 fs-5`}
                  >
                    SELECT COLOR
                  </div>
                  <div
                    className="d-flex gap-3 mt-3 flex-wrap"
                    style={{ width: "380px" }}
                  >
                    {["red", "blue", "green"].map((clr, i) => (
                      <div
                        key={i}
                        onClick={() => handleCircleClick(i)}
                        style={{
                          width: "40px",
                          height: "40px",
                          cursor: "pointer",
                        }}
                        className={`rounded-pill text-center d-flex justify-content-center align-items-center ${
                          style[`${clr}Color`]
                        } ${index === i ? "border border-3" : ""}`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                ref={(el) => (centerRef.current[idx] = el)}
                className={`col-12 col-lg-6 ${style.carouselImage} position-relative d-flex justify-content-center align-items-center`}
              >
                <div
                  className={`fw-bolder ${style.thunderFont}  text-white mt-5`}
                >
                  NIKE
                </div>
                <img
                  ref={(el) => (imageRefs.current[idx] = el)}
                  className={`position-absolute animate-up-down`}
                  src={imageUrl[index] || ""}
                  alt={`${["RED", "BLUE", "GREEN"][index]} Nike`}
                />
              </div>
              <div
                ref={(el) => (rightRef.current[idx] = el)}
                
                className="d-flex h-auto flex-column align-items-start justify-content-end pb-4 col-12 col-lg-3 mb-5 mb-lg-0 p-2"
              >
                <div>
                  <p className={`${style.minaFont} text-white`}>
                    The quality is excellent, packed reliably, and the color is a
                    dream. The USS store is excellent. Thank you!!! We strive to
                    earn and keep your trust.
                  </p>
                </div>
                <div className="d-flex gap-2">
                  <button
                    className="border border-light border-1 bg-transparent rounded-pill p-2"
                    onClick={() => setIndex(index === 0 ? 2 : index - 1)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="#fff"
                        d="M220 128a4 4 0 0 1-4 4H49.66l65.17 65.17a4 4 0 0 1-5.66 5.66l-72-72a4 4 0 0 1 0-5.66l72-72a4 4 0 0 1 5.66 5.66L49.66 124H216a4 4 0 0 1 4 4"
                      ></path>
                    </svg>
                  </button>
                  <button
                    className="border border-light border-1 bg-transparent rounded-pill p-2"
                    onClick={() => setIndex(index === 2 ? 0 : index + 1)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="#fff"
                        d="m218.83 130.83l-72 72a4 4 0 0 1-5.66-5.66L206.34 132H40a4 4 0 0 1 0-8h166.34l-65.17-65.17a4 4 0 0 1 5.66-5.66l72 72a4 4 0 0 1 0 5.66"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }

  export default CustomCarousel;
