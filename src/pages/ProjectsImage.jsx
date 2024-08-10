import React, { useState } from "react";

const ProjectsImage = ({ src, name }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="image-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={src}
        alt={name}
        className={`hover-image ${hovered ? "hovered" : ""}`}
      />
      <div className={` ${hovered ? "image-name" : ""}`}>{name}</div>
    </div>
  );
};

export default ProjectsImage;
