import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import Swal from "sweetalert2";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const textRef = useRef(null);
  const formRef = useRef(null);

  const animateElement = (element, animationProps, trigger) => {
    gsap.from(element, {
      opacity: 0,
      duration: 1,
      ...animationProps,
      scrollTrigger: {
        trigger: trigger || element,
        start: "top 150%",
        end: "top 60%",
        scrub: 2,
      },
    });
  };

  const setupAnimations = () => {
    const matchMedia = gsap.matchMedia();
    
    matchMedia.add("(max-width: 768px)", () => {
      animateElement(buttonRef.current, { y: 100 }, paraRef.current);
      animateElement(nameRef.current, { x: 100 }, paraRef.current);
      animateElement(emailRef.current, { x: -100 }, paraRef.current);
      animateElement(textRef.current, { x: 100 }, paraRef.current);
      animateElement(formRef.current, { x: 100 }, paraRef.current);
    });

    matchMedia.add("(min-width: 769px)", () => {
      animateElement(headingRef.current, { y: 100 });
      animateElement(paraRef.current, { x: 100 }, paraRef.current);
      animateElement(buttonRef.current, { y: 100 }, paraRef.current);
      animateElement(nameRef.current, { x: 100 }, paraRef.current);
      animateElement(emailRef.current, { x: -100 }, paraRef.current);
      animateElement(textRef.current, { x: 100 }, paraRef.current);
      animateElement(formRef.current, { x: 100 }, paraRef.current);
    });
  };

  useEffect(() => {
    setupAnimations();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "0b9031b4-16d2-46bc-bc92-34450cb65aca");

    const json = JSON.stringify(Object.fromEntries(formData));
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        html: `
          <div class="custom-svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="5.5em" height="5.5em" viewBox="0 0 24 24">
              <g stroke="#0fc224" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9">
                <circle cx="12" cy="12" r="9" fill="#0fc224" fill-opacity="0">
                  <animate fill="freeze" attributeName="fill-opacity" begin="0.2s" dur="0.15s" values="0;0" />
                </circle>
                <path fill="none" stroke-dasharray="14" stroke-dashoffset="14" d="M8 12L11 15L16 10">
                  <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="14;0" />
                </path>
              </g>
            </svg>
          </div>
          <p class="mt-3 fs-5">Message sent successfully!</p>
        `,
        customClass: {
          popup:
            "bg-black text-white position-relative bg-green-glow rounded-2",
          title: "custom-title",
          content: "text-white",
          confirmButton: "btn btn-outline-success px-5 py-2 fw-semibold mt-0",
        },
      });
    }
  };

  return (
    <div style={{ height: '500px' }} className="w-100 mb-5 text-light d-flex position-relative align-items-center flex-column mt-5">
      <div ref={headingRef} className="position-relative contactHeader mt-5">
        <h1 className="mt-3">Contact Us</h1>
      </div>
      <p
        ref={paraRef}
        className="text-center para mt-3 fs-5"
        style={{ color: "#92979B", width: "690px" }}
      >
        Our team is pleased to assist you. Please note that our support does not
        cover template customization, installation, or any third-party software
        and plugins.
      </p>
      <div ref={formRef} className="w-50 mb-5 rounded-4 bg-black">
        <div className="p-5 mt-5 w-100 mb-5 rounded-4 bg-black position-relative bg-glow">
          <form onSubmit={onSubmit}>
            <div ref={nameRef} className="mb-3">
              <input
                type="text"
                name="name"
                className="text-light w-100 px-4"
                placeholder="Your Name"
                required
              />
            </div>
            <div ref={emailRef} className="form-floating mb-3">
              <input
                type="email"
                name="email"
                className="text-light w-100 px-4"
                placeholder="Enter Your Email address"
                required
              />
            </div>
            <div ref={textRef} className="form-floating mb-3">
              <textarea
                name="message"
                className="text-light w-100 px-4"
                placeholder="Enter your Message"
                style={{ height: "100px" }}
              ></textarea>
            </div>
            <button
              ref={buttonRef}
              type="submit"
              className="btn py-3 btn-outline-light w-50 fs-5 fw-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
