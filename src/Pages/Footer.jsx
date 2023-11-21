import React from "react";
import Subtitle from "../Parts/Subtitle";

function Footer() {
  return (
    <div className="bg-white py-16 px-12">
      <Subtitle>Trvelyuk</Subtitle>
      <div className="flex">
        <div className="w-3/12 space-y-2 ">
          <h2 className="font-regular font-poppins text-sm text-gray-700">
            Profile
          </h2>
          <h2 className="font-regular font-poppins text-sm text-gray-700">
            Featured
          </h2>
          <h2 className="font-regular font-poppins text-sm text-gray-700">
            Service
          </h2>
          <h2 className="font-regular font-poppins text-sm text-gray-700">
            Contact Us
          </h2>
        </div>
        <div className="w-3/12 space-y-2 ">
          <h2 className="font-regular font-poppins text-sm text-gray-700">
            Profile
          </h2>
          <h2 className="font-regular font-poppins text-sm text-gray-700">
            Featured
          </h2>
          <h2 className="font-regular font-poppins text-sm text-gray-700">
            Service
          </h2>
          <h2 className="font-regular font-poppins text-sm text-gray-700">
            Contact Us
          </h2>
        </div>
        <div className="w-6/12 justify-end space-y-2 text-end">
          <h2 className="font-regular font-poppins text-sm text-gray-700">
            Profile
          </h2>
          <h2 className="font-regular font-poppins text-sm text-gray-700">
            Featured
          </h2>
          <h2 className="font-regular font-poppins text-sm text-gray-700">
            Service
          </h2>
          <h2 className="font-regular font-poppins text-sm text-gray-700">
            Contact Us
          </h2>
        </div>
      </div>
      <div className="mt-[35px] mb-10 text-center font-poppins text-sm font-light text-gray-600">
        copyright at reserved 2022 @nityasadev
      </div>
    </div>
  );
}

export default Footer;
