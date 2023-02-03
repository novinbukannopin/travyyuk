import React from "react";

function UserFeedBack({ img, user, role }) {
  return (
    <>
      <div className="w-2/12">
        <img src={img} width={48} alt="" />
      </div>
      <div className="-ml-4 w-10/12 justify-start">
        <div className="flex items-center space-x-2">
          <div className="w-fit font-poppins text-lg font-semibold">{user}</div>
          <div> • </div>
          <div
            href=""
            className="font-poppins text-xs font-light tracking-widest text-gray-600"
          >
            {role}
          </div>
        </div>
        <img src="src\assets\ratings.png" className="h-[18px]" alt="" />
      </div>
    </>
  );
}

export default UserFeedBack;
