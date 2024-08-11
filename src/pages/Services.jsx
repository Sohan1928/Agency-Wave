import React from "react";
import ServiceCart from "../layouts/ServiceCart";

const Services = () => {
  return (
    <div className="max-w-6xl mx-auto px-3 md:px-0 text-center mt-14 pb-20">
      <div data-aos="fade-up" data-aos-duration="1000">
        <h2 className="py-16 text-3xl md:text-5xl font-bold">Services</h2>
      </div>
      <div data-aos="zoom-in" data-aos-duration="3000">
        <ServiceCart></ServiceCart>
      </div>
    </div>
  );
};

export default Services;
