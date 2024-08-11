import React from "react";
import Marquee from "react-fast-marquee";

const ClientsSlider = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="2200"
      className="mx-2 md:mx-16 mt-10 items-center justify-center md:px-56 py-36 shadow-2xl rounded-xl"
    >
      <Marquee pauseOnHover={true}>
        <div className="flex gap-8">
          <div className="justify-center text-center">
            <h2 className="bg-teal-400 text-white text-2xl font-semibold w-64 py-6 px-3 text-center mb-2 justify-center mx-auto">
              Sofar Construction
            </h2>
            <p>
              If you are enthusiastic person with a pinch of <br /> talent don’t
              hesitate to join our team
            </p>
          </div>
          <div className="justify-center text-center">
            <h2 className="bg-teal-400 text-white text-2xl font-semibold w-64 py-6 px-3 text-center mb-2 justify-center mx-auto">
              Lebuaute Cosmetic
            </h2>
            <p>
              If you are enthusiastic person with a pinch of <br /> talent don’t
              hesitate to join our team
            </p>
          </div>
          <div className="justify-center text-center">
            <h2 className="bg-teal-400 text-white text-2xl font-semibold w-64 py-6 px-3 text-center mb-2 justify-center mx-auto">
              Shufflehound Theme
            </h2>
            <p>
              If you are enthusiastic person with a pinch of <br /> talent don’t
              hesitate to join our team
            </p>
          </div>
          <div className="justify-center text-center">
            <h2 className="bg-teal-400 text-white text-2xl font-semibold w-64 py-6 px-3 text-center mb-2 justify-center mx-auto">
              Ballonbear Theme
            </h2>
            <p>
              If you are enthusiastic person with a pinch of <br /> talent don’t
              hesitate to join our team
            </p>
          </div>
          <div className="justify-center text-center mr-8 ml-8">
            <h2 className="bg-teal-400 text-white text-2xl font-semibold w-64 py-6 px-3 text-center mb-2 justify-center mx-auto">
              Farso Wordpress
            </h2>
            <p>
              If you are enthusiastic person with a pinch of <br /> talent don’t
              hesitate to join our team
            </p>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default ClientsSlider;
