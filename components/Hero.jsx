import React from "react";
import Navbar from "./Navbar/Navbar";
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="container mx-auto my-10 font-[Poppins] ">
      <div className="bg-[#fff5f1] px-6 lg:px-16 py-10 rounded-3xl">
   
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
          <div className="flex flex-col gap-5 lg:gap-10">
            <p className=" text-2xl sm:text-4xl md:text-5xl lg:text-4xl font-medium">
            Découvrez nos collections de tenues traditionnelles revisitées, caftans, jellabas, kimonos
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500">
             Des pièces indémodables qui allient modernité et tradition, cousues 100% à la main par nos maitres artisans.
            </p>
            <button className="bg-rose-300 btn btn-sm lg:btn-lg text-white  px-6 py-2 border-none w-36 lg:w-44  rounded-full">Catalogue</button>
          </div>
          <Image src={"/assets/logoCaftan.jpeg"} width={400} height={400} alt=""   className="  rounded-3xl " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
