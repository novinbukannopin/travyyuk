import React from "react";
import Navbar from "../Components/Navbar";

function Hero() {
  return (
    <div className="h-[650px] bg-[url('src/assets/hero-img.png')]">
      <div className="container mx-auto px-12">
        <Navbar />
        <div className="text-center">
          <p className="mt-24 mb-4 font-poppins text-2xl font-semibold text-white ">
            life is too short for a wide and beautiful world
          </p>
          <div className="mx-auto w-10/12">
            <h1 className="font-poppins text-5xl font-bold leading-tight tracking-wider text-white">
              Enjoy Your Tour With Heavenly Experience you've never had
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
