import React from "react";
import Subtitle from "../Parts/Subtitle";
import Title from "../Parts/Title";
import Button from "../Parts/Button";

function MainSection() {
  return (
    <div className=" bg-gray-100 py-16 px-12">
      <div className="flex ">
        <div className="w-6/12 justify-center">
          <img src="src\assets\main.png" alt="" />
        </div>
        <div className="mt-12 w-6/12 justify-center px-10">
          <Subtitle>What They Say</Subtitle>

          <Title>
            What Our Customer <br />
            Say About Us{" "}
          </Title>
          <div className="mb-10 font-poppins text-sm font-light text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </div>
          <div className="mb-10 flex w-full">
            <div className="w-2/12">
              <img src="src\assets\user.png" width={48} alt="" />
            </div>
            <div className="-ml-4 w-10/12 justify-start">
              <div className="flex items-center space-x-2">
                <div className="font-poppins text-lg font-semibold">
                  Novin Ardian Y
                </div>
                <div> • </div>
                <div
                  href=""
                  className="font-poppins text-xs font-light tracking-widest text-gray-600"
                >
                  Backpacker
                </div>
              </div>
              <img src="src\assets\ratings.png" className="h-[18px]" alt="" />
            </div>
          </div>
          <div className="space-x-6">
            <Button names={"All Stories"} variant={"primary"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
