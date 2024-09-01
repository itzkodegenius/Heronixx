import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import DemoSection from "./DemoSection";
import gsap from "gsap";
import Features from "./Features";
import ContactUs from "./ContactUs";

export default function Main() {
  const cursorRef = useRef(null);
  const mainRef = useRef(null);
  const [currentSection, setCurrentSection] = useState("page1");

  const pageRefs = {
    page1: useRef(null),
    page2: useRef(null),
    page3: useRef(null),
    page4: useRef(null),
  };

  useEffect(() => {
    const main = mainRef.current;

    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power4.out",
      });
    };

    if (main) {
      main.addEventListener("mousemove", handleMouseMove);
      return () => main.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const handleScroll = (section) => {
    const sectionRef = pageRefs[section]?.current;
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observerOptions = { threshold: 0.6 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, observerOptions);

    Object.values(pageRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(pageRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <main id="main" ref={mainRef}>
      <div ref={cursorRef} className="cursor d-none d-lg-block"></div>
      <div id="page1" ref={pageRefs.page1} className="d-flex align-items-center flex-column">
        <Navbar currentSection={currentSection} handleScroll={handleScroll} />
        <Hero />
      </div>
      <div id="page2" ref={pageRefs.page2}>
        <DemoSection mainRef={mainRef} />
      </div>
      <div id="page3" ref={pageRefs.page3}>
        <Features />
      </div>
      <div id="page4" ref={pageRefs.page4}>
        <ContactUs />
      </div>
    </main>
  );
}
