import React from "react";
import Button from "../Parts/Button";
import CardAddress from "../Parts/CardAddress";
import CardTitle from "../Parts/CardTitle";
import Category from "../Parts/Category";

function ItemsTrip({ category, img, title, address }) {
  return (
    <div className="m-4 w-4/12 rounded-3xl bg-white p-8">
      <img src={img} alt="" className="mx-auto" />
      <div className="flex items-center justify-between">
        <Category names={category} />
        <img
          src="src\assets\ratings.png"
          className="h-[24px] justify-center"
          alt=""
        />
      </div>
      <CardTitle>{title}</CardTitle>
      <CardAddress>{address}</CardAddress>
      <div className="mt-4 flex items-center justify-center">
        <Button names={"Book Now"} variant={"primary"} className={"w-full"} />
        <Button
          names={"View Details"}
          variant={"bluewhite"}
          className={"w-full"}
        />
      </div>
    </div>
  );
}

export default ItemsTrip;
