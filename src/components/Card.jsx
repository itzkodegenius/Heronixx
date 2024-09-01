import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../css/card.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Card() {
  const demoRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const animationSettings = [
      { y: -50, x: -100, start: "top 140%", end: "top 60%" },
      { y: -100, x: 100, start: "top 140%", end: "top 60%" },
      { y: 50, x: -100, start: "top 150%", end: "top 60%" },
      { y: 50, x: 100, start: "top 150%", end: "top 60%" },
    ];

    const createAnimation = (index, settings, mediaQuery) => {
      gsap.matchMedia().add(mediaQuery, () => {
        gsap.from(demoRefs[index].current, {
          opacity: 0,
          duration: 1,
          delay: 0.5 + index * 0.5,
          y: settings.y,
          x: settings.x,
          scrollTrigger: {
            trigger: demoRefs[index].current,
            start: settings.start,
            end: settings.end,
            scrub: 1,
          },
        });
      });
    };

    animationSettings.forEach((settings, index) => {
      createAnimation(index, settings, "(max-width: 768px)");
      createAnimation(index, { ...settings, start: "top 80%" }, "(min-width: 769px)");
    });
  }, []);

  const demos = [
    { ref: demoRefs[0], imgSrc: "demo1.png", bgColor: "bg-green-box", link: "/demo1" },
    { ref: demoRefs[1], imgSrc: "demo2.png", bgColor: "bg-yellow-box", link: "/demo2" },
  
  ];

  return (
    <div className="container">
      <div className="gradient-cards">
        {demos.map((demo, index) => (
          <div ref={demo.ref} className="cards" key={index}>
            <div className={`container-card d-flex flex-column align-items-center ${demo.bgColor}`}>
              <img src={demo.imgSrc} className="rounded-4" alt={`Demo ${index + 1}`} />
              <Link to={demo.link} className="w-100">
                <button className="btn btn-outline-light mb-4 w-100 text-center fs-5 fw-semibold py-3">
                  View Demo
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
