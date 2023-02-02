import React from "react";

function CardAddress({ children }) {
  return (
    <div className="mt-1 flex items-center">
      <img src="src\assets\location.png" alt="" className="mr-1 h-[18px]" />
      <a href="" className="text-sm font-semibold text-gray-600">
        {children}
      </a>
    </div>
  );
}

export default CardAddress;
