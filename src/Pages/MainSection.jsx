import React from "react";
import Subtitle from "../Parts/Subtitle";
import Title from "../Parts/Title";
import Button from "../Parts/Button";
import UserFeedBack from "../Components/UserFeedBack";

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
            <UserFeedBack
              img={"src/assets/user.png"}
              user={"Novin Ardian Yulianto"}
              role={"Pramuka Nyell"}
            />
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
