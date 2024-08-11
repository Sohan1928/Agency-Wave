import React from "react";
import "../index.css";

const Banner = () => {
  return (
    <div className="space-y-5 items-center my-4 md:flex">
      <div>
        <h2 className="text-6xl px-3 text-center md:text-left md:text-8xl font-extrabold items-center">
          Creative Agency
        </h2>
      </div>
      <div>
        <img
          className="bg-orange-500 rounded-l-full"
          src="../../public/Images/bannerImg.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
