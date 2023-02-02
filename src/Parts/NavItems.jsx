import React from "react";

function NavItems({ children, isActive }) {
  return (
    <li>
      <a
        href=""
        className={`${
          isActive ? "text-white" : "text-gray-800"
        } font-poppins text-sm font-medium tracking-wider text-white`}
      >
        {children}
      </a>
    </li>
  );
}

export default NavItems;
