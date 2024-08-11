import React from "react";
import ClientsSlider from "./ClientsSlider";

const Clients = () => {
  return (
    <div className="max-w-6xl mx-auto mb-36">
      <div>
        <h2
          data-aos="fade-up"
          data-aos-duration="1800"
          className="text-5xl md:text-6xl opacity-90 font-bold text-center items-center uppercase"
        >
          Our Clients
        </h2>
        <ClientsSlider></ClientsSlider>
      </div>
    </div>
  );
};

export default Clients;
