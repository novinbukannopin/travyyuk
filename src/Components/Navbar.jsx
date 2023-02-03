import React from "react";
import Button from "../Parts/Button";
import LogoBrand from "../Parts/LogoBrand";
import Nav from "../Parts/Nav";
import NavItems from "../Parts/NavItems";

function Navbar() {
  return (
    <div className="flex items-center py-10">
      <div className="w-3/12">
        <LogoBrand />
      </div>
      <div className="w-6/12  ">
        <Nav />
      </div>
      <div className="w-3/12 space-x-2 text-right">
        <Button names={"Sign In"} variant="secondary" />
        <Button names={"Sign In"} variant="primary" />
      </div>
    </div>
  );
}

export default Navbar;
