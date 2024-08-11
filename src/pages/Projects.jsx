import React, { useState } from "react";
import ProjectsImage from "./ProjectsImage";
import { Link } from "react-router-dom";

const Projects = () => {
  const images = [
    { src: "../../public/Images/portfolio1-1.jpg", name: "Coffee Cup" },
    { src: "../../public/Images/portfolio11-1.jpg", name: "Paint" },
    { src: "../../public/Images/portfolio10-1.jpg", name: "Iconic Magazine" },
    { src: "../../public/Images/portfolio7-1.jpg", name: "Shopping Bag" },
    { src: "../../public/Images/portfolio5.jpg", name: "Parcel Box" },
    { src: "../../public/Images/portfolio6-1.jpg", name: "Print House" },
  ];

  return (
    <div className="max-w-6xl mx-auto pt-20 pb-20">
      <div className="text-center">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-3xl md:text-6xl font-bold uppercase"
        >
          Our Projects
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 mt-20 gap-5 justify-center px-4">
        {images.map((img, index) => (
          <ProjectsImage
            key={index}
            src={img.src}
            name={img.name}
          ></ProjectsImage>
        ))}
      </div>
      <div className="text-center items-center py-10 text-white font-bold">
        <Link to="/projects">
          <button
            data-aos="fade-up"
            data-aos-duration="2000"
            className="bg-orange-500 px-4 py-3 rounded-xl"
          >
            View All Projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
