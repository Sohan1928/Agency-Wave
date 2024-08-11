import React from "react";

const Master = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="md:flex justify-around items-center">
        <div className="text-center md:text-start pb-8">
          <h2
            data-aos="fade-right"
            data-aos-duration="1200"
            className="text-3xl md:text-6xl font-bold opacity-90"
          >
            Master Crew
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            className="text-xl pt-3"
          >
            Our professional team will <br /> be happy to bring <br /> amazing
            ideas and projects to life
          </p>
        </div>
        <div className="flex mx-2 md:mx-0 border rounded-lg shadow-xl gap-8 items-center">
          <div>
            <img
              data-aos="fade-left"
              data-aos-duration="2400"
              className="h-64 md:h-80 rounded-md "
              src="../../public/Images/coding.png"
              alt=""
            />
          </div>
          <div data-aos="fade-left" data-aos-duration="2800" className="pr-8">
            <h2 className="text-2xl font-bold pb-3 uppercase">Designer</h2>
            <h5 className="text-xl text-teal-400">Web Designer</h5>
            <p className="opacity-60">
              If you are enthusiastic person <br /> with a pinch of talent don’t{" "}
              <br />
              hesitate to join our team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Master;
