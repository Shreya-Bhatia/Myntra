import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from './homePage/image1.png';
import image2 from './homePage/image2.jpg';
import image3 from './homePage/image3.jpg';
import image4 from './homePage/image4.jpg';
import image5 from './homePage/image5.jpg';

export default function SlickContent() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="mt-5 bg-[#FEFFD2] h-[105px] py-2">
      <div className="flex flex-col text-center items-center px-2">
        <img src={image1} className="w-[52px] h-[69px] mb-2" alt="1" />
        <div className="text-[8px] font-bold h-[11px] w-[56px]">INSTA STEALS</div>
        <div className="text-[8px] text-gray-600 h-[10px] w-[45px]">Under ₹999</div>
      </div>
      <div className="flex flex-col text-center items-center px-2">
        <img src={image2} className="w-[52px] h-[69px] mb-2" alt="2" />
        <div className="text-[8px] font-bold h-[11px] w-[56px]">TOPS</div>
        <div className="text-[8px] text-gray-600 h-[10px] w-[45px]">Under ₹499</div>
      </div>
      <div className="flex flex-col text-center items-center px-2">
        <img src={image3} className="w-[52px] h-[69px] mb-2" alt="3" />
        <div className="text-[8px]  font-bold h-[11px] w-[56px]">T-SHIRTS</div>
        <div className="text-[8px] text-gray-600 h-[10px] w-[45px]">Under ₹499</div>
      </div>
      <div className="flex flex-col text-center items-center px-2">
        <img src={image4} className="w-[52px] h-[69px] mb-2" alt="4" />
        <div className="text-[8px] font-bold h-[11px] w-[56px]">BOTTOMS</div>
        <div className="text-[8px] text-gray-600 h-[10px] w-[45px]">Under ₹899</div>
      </div>
      <div className="flex flex-col text-center items-center px-2">
        <img src={image5} className="w-[52px] h-[69px] mb-2" alt="5" />
        <div className="text-[8px] font-bold h-[11px] w-[56px]">DRESSES</div>
        <div className="text-[8px] text-gray-600 h-[10px] w-[45px]">Under ₹799</div>
      </div>
    </Slider>
  );
}
