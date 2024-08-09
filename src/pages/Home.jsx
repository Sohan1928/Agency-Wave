import React from "react";
import Banner from "../components/Banner";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Banner></Banner>
      </div>
      <div className="bg-[#6040ffd6] text-white">
        <Services></Services>
      </div>
    </div>
  );
};

export default Home;
