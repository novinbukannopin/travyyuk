import React from "react";

function Category({ names }) {
  return (
    <div className="my-5">
      <a className="rounded-lg bg-blue-100 py-2 px-4 font-poppins text-base font-semibold text-blue-900">
        {names}
      </a>
    </div>
  );
}

export default Category;
