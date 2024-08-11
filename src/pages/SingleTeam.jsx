import React from "react";
import { Link } from "react-router-dom";

const SingleTeam = () => {
  return (
    <div className="max-w-6xl mx-auto px-2 mb-20">
      <div className="pt-8 pb-16">
        <h1
          data-aos="fade-right"
          data-aos-duration="1200"
          className="text-4xl md:text-6xl font-bold uppercase text-center"
        >
          Our Partner
        </h1>
      </div>
      <div className="md:flex justify-center space-y-10 md:space-y-0 gap-8">
        <div
          data-aos="fade-right"
          data-aos-duration="1800"
          className="flex mx-2 md:mx-0 border rounded-lg shadow-xl gap-8 items-center"
        >
          <div className="">
            <img
              className="h-64 md:h-80 rounded-l-lg bg-[#ffd1d7]"
              src="../../public/Images/female.png"
              alt=""
            />
          </div>
          <div className="pr-8">
            <h2 className="text-2xl font-bold pb-3 uppercase">KATE WILSON</h2>
            <h5 className="text-xl text-teal-400">Advertising</h5>
            <p className="opacity-60">
              Highly experienced professional <br /> that is going to make{" "}
              <br /> amazing things for you
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1800"
          className="flex mx-2 md:mx-0 border rounded-lg shadow-xl gap-8 items-center"
        >
          <div className="">
            <img
              className="h-64 md:h-80 rounded-l-lg bg-[#ff445d]"
              src="../../public/Images/male.png"
              alt=""
            />
          </div>
          <div className="pr-8">
            <h2 className="text-2xl font-bold pb-3 uppercase">JOHN BROWN</h2>
            <h5 className="text-xl text-teal-400">Web Developer</h5>
            <p className="opacity-60">
              Highly experienced professional <br /> that is going to make{" "}
              <br /> amazing things for you
            </p>
          </div>
        </div>
      </div>
      <div className="text-center my-10">
        <Link to="/team">
          <button
            data-aos="fade-up"
            data-aos-duration="2200"
            className="bg-teal-400 px-4 py-3 rounded-xl text-white font-bold"
          >
            Meet the teem
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleTeam;
