import React from "react";
import { SiBrandfolder } from "react-icons/si";
import { BsBarChartFill } from "react-icons/bs";
import { FaFistRaised } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { TfiMobile } from "react-icons/tfi";
import { TfiPaintRoller } from "react-icons/tfi";

const ServiceCart = () => {
  return (
    <div className="grid md:grid-cols-3 gap-16">
      <div className="flex text-center mx-auto">
        <div className="text-2xl">
          <SiBrandfolder />
        </div>
        <div className="pl-3">
          <h3 className="text-xl font-semibold pb-2 text-start">
            Brand Identity
          </h3>
          <p className="opacity-40 w-48 text-start">
            There live the blind texts. Separated they live in Bookmarksgrove
            right
          </p>
        </div>
      </div>
      <div className="flex text-center mx-auto justify-center">
        <div>
          <h3 className="text-2xl">
            <BsBarChartFill />
          </h3>
        </div>
        <div className="pl-3">
          <h3 className="text-xl font-semibold pb-2 text-start">Marketing</h3>
          <p className="opacity-40 w-48 text-start">
            Far far away, behind the word mountains, far from the countries
            Vokalia
          </p>
        </div>
      </div>
      <div className="flex text-center mx-auto justify-center">
        <div>
          <h3 className="text-2xl">
            <FaFistRaised />
          </h3>
        </div>
        <div className="pl-3">
          <h3 className="text-xl font-semibold pb-2 text-start">Strategy</h3>
          <p className="opacity-40 w-48 text-start">
            A small river named Duden flows by their place and supplies it with
            the necessary
          </p>
        </div>
      </div>
      <div className="flex text-center mx-auto justify-center">
        <div>
          <h3 className="text-2xl">
            <FaLaptopCode />
          </h3>
        </div>
        <div className="pl-3">
          <h3 className="text-xl font-semibold pb-2 text-start">Web Design</h3>
          <p className="opacity-40 w-48 text-start">
            It is a paradisematic country, in which roasted parts of sentences
          </p>
        </div>
      </div>
      <div className="flex text-center mx-auto justify-center">
        <div>
          <h3 className="text-2xl">
            <TfiMobile />
          </h3>
        </div>
        <div className="pl-3">
          <h3 className="text-xl font-semibold pb-2 text-start">UI & UX</h3>
          <p className="opacity-40 w-48 text-start">
            Fly into your mouth even the all-powerful Pointing on that
          </p>
        </div>
      </div>
      <div className="flex text-center mx-auto justify-center">
        <div>
          <h3 className="text-2xl">
            <TfiPaintRoller />
          </h3>
        </div>
        <div className="pl-3">
          <h3 className="text-xl font-semibold pb-2 text-start">
            Graphic Design
          </h3>
          <p className="opacity-40 w-48 text-start">
            Has no control about the blind texts it is an almost unorthographic
            life
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
