import React from "react";
import NavItems from "./NavItems";

function Nav() {
  return (
    <ul className="flex justify-center space-x-6 ">
      <NavItems isActive={true}>Profile</NavItems>
      <NavItems>Featured</NavItems>
      <NavItems>Service</NavItems>
      <NavItems>Contact Us</NavItems>
    </ul>
  );
}

export default Nav;
