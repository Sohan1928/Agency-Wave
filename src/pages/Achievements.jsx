import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Achievements = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="max-w-6xl mx-auto text-center pt-28 pb-28">
      <div>
        <h2 className="text-3xl md:text-5xl uppercase font-bold">
          Achievements
        </h2>
        <p className="text-xl pt-2">We are proud of</p>
      </div>
      <div className="pt-16 space-y-10 md:flex md:space-y-0 justify-around">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="">
            <h1 className="text-8xl font-bold pb-8">
              {counterOn && (
                <CountUp start={0} end={18} duration={4} delay={0}></CountUp>
              )}
            </h1>
            <p className="text-2xl pb-1">Awards</p>
            <p className="text-green-400">Winnings</p>
          </div>
        </ScrollTrigger>

        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div>
            <h1 className="text-8xl font-bold pb-8">
              {" "}
              {counterOn && (
                <CountUp start={0} end={24} duration={4} delay={0}></CountUp>
              )}
            </h1>
            <p className="text-2xl pb-1">Adweek</p>
            <p className="text-green-400">Reviews</p>
          </div>
        </ScrollTrigger>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div>
            <h1 className="text-8xl font-bold pb-8">
              {" "}
              {counterOn && (
                <CountUp start={0} end={9} duration={4} delay={0}></CountUp>
              )}
            </h1>
            <p className="text-2xl pb-1">The Weeby</p>
            <p className="text-green-400">Awards</p>
          </div>
        </ScrollTrigger>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div>
            <h1 className="text-8xl font-bold pb-8">
              {counterOn && (
                <CountUp start={0} end={12} duration={4} delay={0}></CountUp>
              )}
            </h1>
            <p className="text-2xl pb-1">Design Pick</p>
            <p className="text-green-400">Reviews</p>
          </div>
        </ScrollTrigger>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div>
            <h1 className="text-8xl font-bold pb-8">
              {" "}
              {counterOn && (
                <CountUp start={0} end={19} duration={4} delay={0}></CountUp>
              )}
            </h1>
            <p className="text-2xl pb-1">Omma</p>
            <p className="text-green-400">Winnings</p>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default Achievements;
