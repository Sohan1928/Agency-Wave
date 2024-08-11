import React from "react";

const Contacts = () => {
  return (
    <div className="bg-[#6040ffd6] mb-24">
      <div className="px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl pt-6 md:text-5xl text-white font-bold pb-10 text-center items-center uppercase">
          Contact Us
        </h1>
        <div className="lg:flex space-x-6 py-10 text-white px-4 justify-around ">
          <div className="">
            <h1 className="text-3xl mb-4 lg:text-5xl font-bold pb-4">
              We love to collab with, Let’s do great together!
            </h1>
            <div className="px-2 py-4 space-x-3 space-y-1 flex items-center justify-around lg:w-3/5 h-32 border border-[#2bbeb9]  rounded-3xl mb-3">
              <img src="contact-1.svg" alt="" />
              <div>
                <h2 className="text-xl pb-2 font-bold">Our Address</h2>
                <p className="opacity-80">Satkhira, Khulna, Bangladesh.</p>
              </div>
            </div>
            <div className="px-2 py-4 space-x-3 space-y-1 flex items-center justify-around lg:w-3/5 h-32 border border-[#2bbeb9]  rounded-3xl">
              <img src="contact-2.svg" alt="" />
              <div>
                <h2 className="text-xl pb-2 font-bold">Contact Info</h2>
                <p className="opacity-80">
                  Open a chat or given us call at <br />
                  <span>310 841 5500</span>
                </p>
              </div>
            </div>
          </div>
          <div className="pt-6 pr-5 text-center justify-center">
            <div className="md:flex gap-4">
              <input
                className="px-6 py-4 mb-3 bg-[#1b5b7c]  rounded-full"
                type="name"
                placeholder="Full Name"
                name="name"
                id="name"
              />
              <input
                className="px-6 py-4 mb-3 bg-[#1b5b7c]  rounded-full"
                type="email"
                name="email"
                placeholder="Email"
                id="email"
              />
            </div>
            <div className="px-3">
              <textarea
                className="w-full p-2 bg-[#1b5b7c] rounded-lg textarea-accent "
                placeholder="Message"
                name="postContent"
                rows={8}
                cols={50}
              />
            </div>
            <div className="pt-4 px-3">
              <button className="px-6 py-3 font-bold rounded-full border border-[#48adac] transition duration-300 delay-150 hover:bg-[#56b4c1]">
                Send a message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
