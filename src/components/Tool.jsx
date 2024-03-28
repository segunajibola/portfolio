import React from "react";

const Tool = ({name, img}) => {
  return (
    <div className="rounded-lg shadow-xl shadow-gray-600 hover:scale-110 hover:shadow-xl duration-500">
      <img className="w-[60px] mx-auto" src={img} alt="HTML icon" />
      <p className="my-4">{name}</p>
    </div>
  );
};

export default Tool;
