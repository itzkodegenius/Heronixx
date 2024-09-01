import React from "react";
import style from "./demo1.module.css";
import CustomCarousel from "./components/Carousel";
export default function Demo1() {
  const carouselClasses = [
    style.carouselItem1,
    style.carouselItem2,
    style.carouselItem3,
  ];

  const imageUrls =[
    'https://s3-alpha-sig.figma.com/img/816f/f25f/5db2d156dfd4dab4759b7408cad254a2?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mMvdpUcYd4c8pD4ztfvmK9nfWWZSMfzfXsE8VFJWUPrgWvN8Svj~Z-4ziPFa1LuWQ8kVBEAhEItzSnJRQHnX~w2Bs1Gcfz3W-Rho~tOG8aNYxmMEi3a~OcvEdecHYWbYcmXABNR49M96VELNn6UT65X9sJ6vhKJHb-knv3FrkSNHGRZ78kJqgh1-WO4s~MPmv5TI3CbB4CTKV7eSwevsT693nVPVwFiCJcOqbYig~-C6zXjUO734ecDOBRM9gzZa~EgwBjB6nsQ1J1C7fRCJuS5Ku5sWTpIUN4-zVvFoZN9Bt6Z1G6GkM4KLiAh4uzg4sodhgI5jAX8pi0yQ9usSlg__',
    'https://s3-alpha-sig.figma.com/img/1a1a/cdbd/46a35c79282d5e998f72779c83de3541?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GIlCeeHZY2ohlw2DlERl80izydFIdrIKC4iEIJVm9lOJ364WTyxj60pU4knmvn9hncpgExf99rVl815UmL9Td7ZU-d0qItFe-lXRZONZYbQyJUWSFSFRBd5n947b2NYBF4RHK0Tlc4~me9RTlln2TbH9WTYM6jxUk2nQDqOHarcqZFviYV21saYRUmnT99Ll7n6mffvrMzbjdcoSDih3N0p89jCkh2VkQCoP-6P5SevFvrm62EveCzhSbfajWM-bLGuLSrg7JOwwZxCDXboAplq3faHUOV6CqSiLclpbH-tMU49jel9WOtY1iRm4FDZHtRhz8pE3BEQhBk1Hfl--PQ__',
    'https://s3-alpha-sig.figma.com/img/82f2/35ac/25af83107a5205e9ecb8bfc2366b03bb?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mm-GOvFlEB8nUwZ0h86CAj8WoDLE9V46RhYyUbz2eUBD4aosauFj74QazX7tVvop8d7athE~CCcXqaUZcmOJCXTMVFJvOzl~KJqlJjVqpJMZqhfTEonmDQ5yuPcLw8kkVmlhJKXjoYPjiMC-~37XKOQInLXGYLEkpAiK~aSFy6~CAGzkSDmt4lr-aCZskWgivPdZJvop1zwAaAX9sIoWeMcyJ6diN2Vd7sNbk~sISTMvBkaDcEXZolvXpzMdpMwKt0diTOufPUkABTID2XGEJAjA~bzyCw-QgNl-xQck59fubjWFR~gntgBAjG3rKxnpT4rVE~UnQmsl7KaTkH7ucw__'
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
