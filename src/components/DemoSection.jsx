import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./Card";

gsap.registerPlugin(ScrollTrigger);

export default function DemoSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const headingShadowRef = useRef(null);

  useEffect(() => {
    const animateHeading = (mediaQuery, triggerStart) => {
      gsap.matchMedia().add(mediaQuery, () => {
        gsap.from([headingRef.current, headingShadowRef.current], {
          opacity: 0,
          duration: 1,
          y: 100,
          scrollTrigger: {
            trigger: headingRef.current,
            start: triggerStart,
            end: "top 60%",
            scrub: mediaQuery.includes("max-width") ? 1 : 2,
          },
        });
      });
    };

    animateHeading("(max-width: 768px)", "top 180%");
    animateHeading("(min-width: 769px)", "top 150%");
  }, []);

  return (
    <div ref={sectionRef} className="d-flex flex-column align-items-center position-relative mt-5 pt-2">
      <h1
        ref={headingShadowRef}
        className="text-white demoHeader display-2 fw-semibold d-flex justify-content-center"
        style={{ top: "3%", zIndex: 5 }}
      >
        <div ref={headingRef}>Demos</div>
      </h1>
      <div className="mt-5">
        <Card />
      </div>
    </div>
  );
}
