import { useState } from "react";
import { OffcanvasBody, OffcanvasHeader } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import style from "../demo1.module.css";
import { Link } from "react-router-dom";
function OffcanvasExample({ toggleOffcanvas, show, setShow }) {
  return (
    <>
      <Offcanvas
        className="bg-black d-flex"
        show={show}
        onHide={toggleOffcanvas}
        placement="start"
        style={{ width: "50%" }}
      >
        <OffcanvasHeader closeButton className="w-100 d-flex justify-content-end">
          <button
            type="button"
            className="btn-close m-0 ms-4 fs-2 mt-2 d-none"
            aria-label="Close"
            style={{ filter: "invert(500)" }} 
          ></button>
        </OffcanvasHeader>
        <OffcanvasBody
          className={`${style.navItem} ${style.tradeGoThicFont} d-flex ps-5 bg-black flex-column gap-5 mt-5 align-items-start `}
        >
          <Link
            to="/demo2"
            onClick={toggleOffcanvas}
            className="fs-1 text-white text-start"
          >
            NEW RELEASES
          </Link>
          <Link
            to="/demo2"
            onClick={toggleOffcanvas}
            className="fs-1 text-white text-start"
          >
            MEN
          </Link>
          <Link
            to="/demo2"
            onClick={toggleOffcanvas}
            className="fs-1 text-white"
          >
            WOMEN
          </Link>
          <Link
            to="/demo2"
            onClick={toggleOffcanvas}
            className="fs-1 text-white"
          >
            KIDS
          </Link>
          <Link
            to="/demo2"
            onClick={toggleOffcanvas}
            className="fs-1 text-white"
          >
            CUSTOMIZE
          </Link>
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
}

export default OffcanvasExample;
