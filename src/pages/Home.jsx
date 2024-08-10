import React from "react";
import Banner from "../components/Banner";
import Services from "./Services";
import Achievements from "./Achievements";
import Projects from "./Projects";
import Master from "../layouts/Master";
import SingleTeam from "./SingleTeam";
import Clients from "../components/Clients";
import SpecialClients from "../components/SpecialClients";
import Awards from "../components/Awards";
import Faq from "../components/Faq";
import Contacts from "./Contacts";

const Home = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Banner></Banner>
      </div>
      <div className="bg-[#6040ffd6] text-white">
        <Services></Services>
      </div>
      <div className="bg-[#6040ffd6] text-white">
        <Projects></Projects>
      </div>
      <div className="bg-gray-600 text-white">
        <Achievements></Achievements>
      </div>
      <div className="py-20">
        <Master></Master>
      </div>
      <SingleTeam></SingleTeam>
      <Clients></Clients>
      <SpecialClients></SpecialClients>
      <div className="bg-[#6040ffd6]">
        <Faq></Faq>
        <Awards></Awards>
      </div>
      <Contacts></Contacts>
    </div>
  );
};

export default Home;
