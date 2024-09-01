import React from "react";
import { Link } from "react-router-dom";
import style from "../demo1.module.css";
import { useState } from "react";
import OffcanvasExample from "./OffCanvas";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const toggleOffcanvas = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="w-100 mt-lg-2 mt-3 px-5 d-flex justify-content-between align-items-center">
        <div className="">
          <div className="text-white d-none d-lg-flex align-items-center gap-2 fw-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5em"
              height="2.5em"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M412.717 89.012c-35.578-20.985-82.545-32.541-132.246-32.541h-40.942c-49.7 0-96.668 11.556-132.246 32.541C69.054 111.56 48 142.453 48 176v16h424v-16c0-33.547-21.054-64.44-59.283-86.988M82.8 160c14.153-40.121 80.185-71.529 156.731-71.529h40.942c76.546 0 142.578 31.408 156.731 71.529ZM48 304h424v32H48zm339.2-79.961c-24.785 0-37.77 6.125-49.227 11.529c-10.034 4.733-17.96 8.471-35.576 8.471s-25.54-3.738-35.574-8.471c-11.456-5.4-24.441-11.529-49.225-11.529s-37.769 6.125-49.225 11.529c-10.033 4.733-17.957 8.471-35.572 8.471s-25.54-3.738-35.573-8.471c-11.456-5.4-24.441-11.529-49.225-11.529v32c17.615 0 25.54 3.738 35.573 8.471c11.456 5.4 24.441 11.529 49.225 11.529s37.768-6.125 49.224-11.529c10.033-4.733 17.958-8.471 35.573-8.471s25.54 3.738 35.573 8.471c11.457 5.4 24.441 11.529 49.226 11.529s37.77-6.125 49.227-11.529c10.034-4.733 17.959-8.471 35.576-8.471s25.542 3.738 35.576 8.471c11.457 5.4 24.442 11.529 49.227 11.529v-32c-17.617 0-25.542-3.738-35.576-8.471c-11.46-5.404-24.445-11.529-49.227-11.529M48 448a24.03 24.03 0 0 0 24 24h376a24.03 24.03 0 0 0 24-24v-80H48Zm32-48h360v40H80Z"
              ></path>
            </svg>
            <div>logoipsum</div>
          </div>
          <svg
            className="d-lg-none"
            xmlns="http://www.w3.org/2000/svg"
            width="2.5em"
            height="2.5em"
            viewBox="0 0 16 16"
            onClick={toggleOffcanvas}
            style={{ cursor: "pointer" }}
          >
            <path
              fill="none"
              stroke="#cfcfcf"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
            ></path>
          </svg>
        </div>

        <div
          className={`${style.navItem} ${style.tradeGoThicFont} d-none d-lg-flex gap-5`}
        >
          <Link className="text-white">NEW RELEASES</Link>
          <Link className="text-white">MEN</Link>
          <Link className="text-white">WOMEN</Link>
          <Link className="text-white">KIDS</Link>
          <Link className="text-white">CUSTOMIZE</Link>
        </div>

        <div className="d-flex align-items-center gap-4">
          <div className="text-white fw-semibold">My cart</div>
          <div className="text-white fw-bold">|</div>
          <div className="text-white fw-semibold">Register</div>
        </div>
      </div>

      <OffcanvasExample
        show={show}
        setShow={setShow}
        toggleOffcanvas={toggleOffcanvas}
      />
    </>
  );
}
