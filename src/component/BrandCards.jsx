import React from "react";
import Slider from "react-slick";
import { FaGooglePay } from "react-icons/fa6";
import { SiTheboringcompany } from "react-icons/si";
import { SiMcdonalds } from "react-icons/si";
import { SiYoutubetv } from "react-icons/si";

import { FaAmazon } from "react-icons/fa";
import { SiAmazonmusic } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

import { FaTwitch } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/BrandCards.css";

const BrandCards = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="text-white relative z-30">
      <h3 className="text-center">Trusted by 30+ businesses</h3>

      <Slider className="brandCard" {...settings}>
        <div className="brandLogoContainer">
          <FaGooglePay className="inline brandLogo" />
        </div>

        <div className="brandLogoContainer">
          <SiTheboringcompany className="inline brandLogo" />
        </div>

        <div className="brandLogoContainer">
          <SiMcdonalds className="inline brandLogo" />
        </div>

        <div className="brandLogoContainer">
          <SiYoutubetv className="inline brandLogo" />
        </div>

        <div className="brandLogoContainer">
          <FaTwitch className="inline brandLogo" />
        </div>

        {/* more */}

        <div className="brandLogoContainer">
          <FaAmazon className="inline brandLogo" />
        </div>

        <div className="brandLogoContainer">
          <SiAmazonmusic className="inline brandLogo" />
        </div>

        <div className="brandLogoContainer">
          <FaWhatsapp className="inline brandLogo" />
        </div>
      </Slider>
    </div>
  );
};

export default BrandCards;
