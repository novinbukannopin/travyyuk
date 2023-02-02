import React from "react";
import ItemsTrip from "../Components/ItemsTrip";
import Button from "../Parts/Button";
import Subtitle from "../Parts/Subtitle";
import Title from "../Parts/Title";

function TripSpecial() {
  return (
    <div className="bg-gray-100">
      <div className="py-16 px-12">
        <div className="text-center">
          <Subtitle>Best Offer From Us</Subtitle>
          <Title>Special Trip Package</Title>
          <div className="row mt-12 mb-12 space-x-4">
            <Button names={"Solo"} variant={"primary"} />
            <Button names={"Couple"} variant={"bluewhite"} />
            <Button names={"Group"} variant={"bluewhite"} />
          </div>
        </div>
        <div className="flex">
          <ItemsTrip
            category={"Beach"}
            img={"src/assets/item1.png"}
            title={"Mereum Sanctuary"}
            address={"NGL, Indonesia"}
          />
          <ItemsTrip
            category={"Beach"}
            img={"src/assets/item2.png"}
            title={"Negan Seasides"}
            address={"Lombok, Indonesia"}
          />
          <ItemsTrip
            category={"Building"}
            img={"src/assets/item3.png"}
            title={"Ascent Tower"}
            address={"Bali, Indonesia"}
          />
        </div>
        <div className="flex">
          <ItemsTrip
            category={"Beach"}
            img={"src/assets/item4.png"}
            title={"Half Heaven"}
            address={"Lombok, Indonesia"}
          />
          <ItemsTrip
            category={"Beach"}
            img={"src/assets/item6.png"}
            title={"Maldive Islands"}
            address={"NGL, Indonesia"}
          />
          <ItemsTrip
            category={"Beach"}
            img={"src/assets/item5.png"}
            title={"Ascent Tower"}
            address={"Bali, Indonesia"}
          />
        </div>
      </div>
    </div>
  );
}

export default TripSpecial;
