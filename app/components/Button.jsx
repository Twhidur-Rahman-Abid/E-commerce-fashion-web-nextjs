import React from "react";

const Button = ({ variante = "default", children }) => {
  let vclassNamees;
  if (variante === "default") {
    vclassNamees = "bg-Primary text-white";
  }
  if (variante === "secondary") {
    vclassNamees = "bg-Secondary text-dark";
  }
  return (
    <button
      className={` ${vclassNamees} py-2 px-6 text-dark text-lg font-medium rounded-full border-[1px] border-dark border-r-[3px] border-b-[3px]`}
    >
      {children}
    </button>
  );
};

export default Button;
