import React from "react";

const Tool = ({ name, img }) => {
  return (
    <div className="rounded-lg shadow-xl flex flex-col justify-around shadow-gray-600 hover:scale-110 hover:shadow-xl duration-500">
      <img className="w-[50px] mx-auto" src={img} alt={`${name} icon`} />
      <p className="my-2">{name}</p>
    </div>
  );
};

export default Tool;
