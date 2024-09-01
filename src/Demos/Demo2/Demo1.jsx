import React from "react";
import style from "./demo1.module.css";
import CustomCarousel from "./components/Carousel";
import burger from './assets/burger.png'
import shawarma from './assets/shawarma.png'
import chicken from './assets/chicken.png'
export default function Demo1() {
  const carouselClasses = [
    style.carouselItem1,
    style.carouselItem2,
    style.carouselItem3,
  ];

  const imageUrls =[
burger,
shawarma,
chicken
]

  return (
    <>
      <div className="container-fluid w-100">
        <div className="row">
          <div className="col-12 p-0 m-0">
            <CustomCarousel itemClasses={carouselClasses} imageUrl={imageUrls} />
          </div>
        </div>
      </div>
    </>
  );
}
