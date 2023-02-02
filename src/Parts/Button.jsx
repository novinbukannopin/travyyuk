import React from "react";

function Button({ names, variant, className }) {
  const addClassNames = className ? `${className}` : "";
  const variants = {
    primary: "bg-blue-800 text-white",
    secondary: "text-white",
    grey: "text-gray-800",
    bluewhite: "text-blue-800 bg-white",
  };
  const pickVariant = variants[variant];
  return (
    <button
      className={`${pickVariant} rounded-lg px-4 py-2 font-semibold ${addClassNames} `}
    >
      {names}
    </button>
  );
}

export default Button;
