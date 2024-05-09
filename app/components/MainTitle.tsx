"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import cowsayTemplate from "../../assets/cowsayWhite.png";
import Image from "next/image";

function MainTitle() {
  return (
    <div>
      <p className="text-white font-bold font-sans text-main-name flex justify-center pt-9 ">
        Rishab Gupta
      </p>
      <div className="flex justify-center mt-5 ml-[25px]">
        <TypeAnimation
          sequence={[
            "I'm a Visionary.",
            2000,
            "I'm a Developer.",
            2000,
            "I'm a Builder.",
            2000,
            "I'm an Entrepreneur.",
            2000,
            "I'm a Software Engineer.",
            2000,
            "I'm a College Student.",
            2000,
          ]}
          speed={25}
          repeat={Infinity}
          style={{
            fontSize: "2em",
            color: "white",
            fontFamily: "monospace",
          }}
        />
      </div>
      <div className="flex justify-center pr-[150px] mt-[-58px]">
        <Image
          src={cowsayTemplate}
          alt="Cow with templated speech bubble"
          className="w-[635px] h-[255px]"
        />
      </div>
    </div>
  );
}
export default MainTitle;
