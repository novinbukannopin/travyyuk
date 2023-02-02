import React from "react";
import Button from "../Parts/Button";
import Subtitle from "../Parts/Subtitle";
import Title from "../Parts/Title";

function SearchSec() {
  return (
    <div className=" bg-white">
      <div className="py-16 px-12">
        <div className="flex ">
          <div className="w-6/12">
            <div className=" grid grid-cols-2 gap-2">
              <div className="h-[240px] w-[290px] ">
                <img src="src\assets\img1.png" alt="" />
              </div>
              <div className="500 h-[240px] w-[295px]">
                <img src="src\assets\img3.png" alt="" />
              </div>
              <div className="500 h-[240px] w-[290px]">
                <img src="src\assets\img2.png" alt="" />
              </div>
            </div>
          </div>
          <div className=" w-6/12 justify-center px-10">
            <Subtitle>New For You</Subtitle>

            <Title>Enjoy Your Vacation with a New Experience</Title>
            <div className="mb-6 font-poppins text-sm font-light text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </div>
            <div className="mb-12 flex w-6/12">
              <div className="mr-8 w-4/12">
                <h1 className="mb-1 text-2xl font-bold text-black">560+</h1>
                <p className="text-base text-gray-600">Destination</p>
              </div>
              <div className="mr-8 w-4/12">
                <h1 className="mb-1 text-2xl font-bold text-black">560+</h1>
                <p className="text-base text-gray-600">Destination</p>
              </div>
              <div className="mr-4 w-4/12">
                <h1 className="mb-1 text-2xl font-bold text-black">560+</h1>
                <p className="text-base text-gray-600">Destination</p>
              </div>
            </div>
            <div className="space-x-6">
              <Button names={"Get Started"} variant={"primary"} />
              <Button names={"View More"} variant={"grey"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchSec;
