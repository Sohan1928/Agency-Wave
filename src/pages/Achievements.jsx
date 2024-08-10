import React from "react";

const Achievements = () => {
  return (
    <div className="max-w-6xl mx-auto text-center pt-28 pb-28">
      <div>
        <h2 className="text-3xl md:text-5xl uppercase font-bold">
          Achievements
        </h2>
        <p className="text-xl pt-2">We are proud of</p>
      </div>
      <div className="pt-16 space-y-10 md:flex md:space-y-0 justify-around">
        <div className="">
          <h1 className="text-8xl font-bold pb-8">18</h1>
          <p className="text-2xl pb-1">Awards</p>
          <p className="text-green-400">Winnings</p>
        </div>
        <div>
          <h1 className="text-8xl font-bold pb-8">24</h1>
          <p className="text-2xl pb-1">Adweek</p>
          <p className="text-green-400">Reviews</p>
        </div>
        <div>
          <h1 className="text-8xl font-bold pb-8">9</h1>
          <p className="text-2xl pb-1">The Weeby</p>
          <p className="text-green-400">Awards</p>
        </div>
        <div>
          <h1 className="text-8xl font-bold pb-8">12</h1>
          <p className="text-2xl pb-1">Design Pick</p>
          <p className="text-green-400">Reviews</p>
        </div>
        <div>
          <h1 className="text-8xl font-bold pb-8">19</h1>
          <p className="text-2xl pb-1">Omma</p>
          <p className="text-green-400">Winnings</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
