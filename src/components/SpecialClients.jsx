import React from "react";
import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa6";
import { RiDoubleQuotesL } from "react-icons/ri";

const SpecialClients = () => {
  return (
    <div className="max-w-6xl mx-auto pb-24">
      <Marquee pauseOnHover={true}>
        <div className="flex gap-3 pt-6">
          <div className="w-72 ml-3 bg-teal-400 rounded-xl">
            <div className="p-3 divide-y divide-blue-200">
              <div>
                <div className="flex items-center justify-between pb-3">
                  <h4 className="bg-[#394145] rounded-full p-1 items-center text-center justify-center">
                    <RiDoubleQuotesL />
                  </h4>
                  <p className="flex items-center gap-1 pt-2 text-[#e17f00]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                </div>
                <p className="pb-3">
                  They not only understand what I say but read between the lines
                  and also give me ideas of my own.
                </p>
              </div>

              <div className="flex items-center pt-3">
                <img src="av-7.png" alt="" />
                <div className="pl-2">
                  <h2 className="">Annette Black</h2>
                  <p className="">Nursing Assistant</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-72 bg-teal-400 rounded-xl">
            <div className="p-3 divide-y divide-blue-200">
              <div>
                <div className="flex items-center justify-between pb-3">
                  <h4 className="bg-[#394145] rounded-full p-1 items-center text-center justify-center">
                    <RiDoubleQuotesL />
                  </h4>
                  <p className="flex items-center gap-1 pt-2 text-[#e17f00]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                </div>
                <p className="pb-3">
                  They not only understand what I say but read between the lines
                  and also give me ideas of my own.
                </p>
              </div>
              <div className="flex items-center pt-3">
                <img src="av-6.png" alt="" />
                <div className="pl-2">
                  <h2 className="">Floyd Miles</h2>
                  <p className="">Dog Trainer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-72 bg-teal-400 rounded-xl">
            <div className="p-3 divide-y divide-blue-200">
              <div>
                <div className="flex items-center justify-between pb-3">
                  <h4 className="bg-[#394145] rounded-full p-1 items-center text-center justify-center">
                    <RiDoubleQuotesL />
                  </h4>
                  <p className="flex items-center gap-1 pt-2 text-[#e17f00]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                </div>
                <p className="pb-3">
                  They not only understand what I say but read between the lines
                  and also give me ideas of my own.
                </p>
              </div>

              <div className="flex items-center pt-3">
                <img src="av-8.png" alt="" />
                <div className="pl-2">
                  <h2 className="">Esther Howard</h2>
                  <p className="">Nursing Assistant</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-72 bg-teal-400 rounded-xl">
            <div className="p-3 divide-y divide-blue-200">
              <div>
                <div className="flex items-center justify-between pb-3">
                  <h4 className="bg-[#394145] rounded-full p-1 items-center text-center justify-center">
                    <RiDoubleQuotesL />
                  </h4>
                  <p className="flex items-center gap-1 pt-2 text-[#e17f00]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                </div>
                <p className="pb-3">
                  They not only understand what I say but read between the lines
                  and also give me ideas of my own.
                </p>
              </div>

              <div className="flex items-center pt-3">
                <img src="av-5.png" alt="" />
                <div className="pl-2">
                  <h2 className="">Brooklyn Simmons</h2>
                  <p className="">President of Sales</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-72 bg-teal-400 rounded-xl">
            <div className="p-3 divide-y divide-blue-200">
              <div>
                <div className="flex items-center justify-between pb-3">
                  <h4 className="bg-[#394145] rounded-full p-1 items-center text-center justify-center">
                    <RiDoubleQuotesL />
                  </h4>
                  <p className="flex items-center gap-1 pt-2 text-[#e17f00]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                </div>
                <p className="pb-3">
                  They not only understand what I say but read between the lines
                  and also give me ideas of my own.
                </p>
              </div>

              <div className="flex items-center pt-3">
                <img src="av-6.png" alt="" />
                <div className="pl-2">
                  <h2 className="">Kristin Watson</h2>
                  <p className="">Medical Assistant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default SpecialClients;
