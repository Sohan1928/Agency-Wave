import React from "react";
import ServiceCart from "../layouts/ServiceCart";

const Services = () => {
  return (
    <div className="max-w-6xl mx-auto px-3 text-center mt-14 pb-20">
      <div>
        <h2 className="py-16 text-3xl md:text-5xl font-bold">Services</h2>
      </div>
      <div className="">
        <ServiceCart></ServiceCart>
      </div>
    </div>
  );
};

export default Services;
