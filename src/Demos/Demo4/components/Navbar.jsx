import React from "react";
import { Link } from "react-router-dom";
import style from "../demo1.module.css";
import { useState } from "react";
import OffcanvasExample from './OffCanvas'

export default function Navbar() {
  const [show, setShow] = useState(false);

  const toggleOffcanvas = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="w-100 mt-lg-2 mt-3 px-5 d-flex justify-content-between align-items-center">
        <div className="">
        
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5.5em"
            height="5.5em"
            viewBox="0 0 24 24"
            className="d-none d-lg-flex"
          >
            <path
              fill="#fff"
              d="M24 7.8L6.442 15.276q-2.184.925-3.668.925q-1.68 0-2.437-1.177q-.475-.756-.28-1.918q.196-1.162 1.036-2.478q.7-1.065 2.297-2.8a6.1 6.1 0 0 0-.784 1.848q-.42 1.792.756 2.632q.56.392 1.54.392q.783 0 1.764-.252z"
            ></path>
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <g fill="#fff" fillRule="evenodd" clipRule="evenodd">
              <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></path>
              <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.99 8.99 0 0 1 12.065 14a8.98 8.98 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.96 8.96 0 0 1-5.672-2.012A6.99 6.99 0 0 1 12.065 16a6.99 6.99 0 0 1 5.689 2.92A8.96 8.96 0 0 1 12 21"></path>
            </g>
          </svg>
          <div className="position-relative">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              3<span className="visually-hidden">unread messages</span>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M7.005 8V6a5 5 0 0 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zm0 2h-2v10h14V10h-2v2h-2v-2h-6v2h-2zm2-2h6V6a3 3 0 0 0-6 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

    
   <OffcanvasExample show={show} setShow={setShow} toggleOffcanvas={toggleOffcanvas}/>
    </>
  );
}
