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

  const items = ["burger", "shawarma", "chicken"];

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

      const letters = centerRef.current[index].querySelectorAll(".letter");
      gsap.from(letters, {
        opacity: 0,
        y: 100, // Animate letters from bottom to top
        duration: 0.5,
        stagger: 0.1, // Control the delay between each letter animation
        delay: 1,
      });
    }
  }, [index]);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  if (imageUrl.length < 3) {
    console.error("Not enough images provided");
  }

  const wrapLetters = (text, item) => {
    return text.split("").map((char, idx) => (
      <span key={idx} className={`letter ${item}`}>
        {char}
      </span>
    ));
  };

  const getImageWidth = (idx) => {
    if (window.innerWidth < 768) { 
      switch (idx) {
        case 0:
          return "340px";
        case 1:
          return "250px";
        case 2:
          return "350px";
        default:
          return "300px";
      }
    } else { 
      switch (idx) {
        case 0:
          return "600px";
        case 1:
          return "450px";
        case 2:
          return "650px";
        default:
          return "400px";
      }
    }
  };

  return (
    <Carousel
      interval={null}
      slide={false}
      onSelect={handleSelect}
      activeIndex={index}
    >
      {items.map((item, idx) => (
        <Carousel.Item
          style={{ height: "100vh" }}
          className={itemClasses[index]}
          key={idx}
        >
          <Navbar />
          <div className="container-fluid w-100 d-flex flex-column flex-lg-row">
            <div
              ref={(el) => (leftRefs.current[idx] = el)}
              style={{ height: "90vh" }}
              className={`${style.tommorowFont} d-none d-lg-flex flex-row flex-lg-column p-2 pb-3 justify-content-end align-items-start w-25`}
            >
              <p className="text-white ms-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis odio nisi deserunt quo accusamus suscipit. Quo
                facilis, similique sit pariatur at nihil deserunt velit a ex
                eveniet unde assumenda nobis.
              </p>
            </div>
            <div
              ref={(el) => (centerRef.current[idx] = el)}
              className={`col-12 col-lg-6 ${style.carouselImage} position-relative d-flex justify-content-end flex-column align-items-center`}
            >
              <div
                className={`fw-bolder position-absolute text-uppercase ${
                  style.thunderFont
                } ${style[item.toLowerCase()]} text-white mt-5`}
                style={{
                  top: "48%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {wrapLetters(items[index], items[index].toLowerCase())}
              </div>
              <img
                ref={(el) => (imageRefs.current[idx] = el)}
                className={`position-absolute animate-up-down mb-0 mb-lg-5`}
                src={imageUrl[index] || ""}
                alt={`${item}`}
                style={{ width: getImageWidth(idx) }}
              />
            </div>
            <div
              ref={(el) => (rightRef.current[idx] = el)}
              className="d-flex h-auto flex-column align-items-start justify-content-end pb-4 col-12 col-lg-3 mb-5 mb-lg-0 p-2"
            >
              <div>
                <button
                
                  className={`${style.tommorowFont}  btn btn-outline-dark btn-white bg-white fs-5 text-black mb-3 fw-bolder px-3 py-2`}
                >
                  GET NOW{" "}
                </button>
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
