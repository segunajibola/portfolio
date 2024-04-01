import React, { useState } from "react";
import Tool from "./Tool";
import { toolsArray } from "../data";

const Tools = () => {
  const [category, setCategory] = useState([]);
  const [allCategory, setAllCategory] = useState(true);

  const toggleCategory = (value) => {
    if (value === "") {
      setCategory([]);
      setAllCategory(true);
    } else {
      setAllCategory(false);
      setCategory((prevCategory) =>
        prevCategory.includes(value)
          ? prevCategory.filter((item) => item !== value)
          : [...prevCategory, value]
      );
    }
  };

  const filteredCategory = category.length
    ? toolsArray.filter((tool) => category.includes(tool.type))
    : toolsArray;

  return (
    <div
      id="tools"
      className="relative w-full pt-24 md:pt-0 md:h-screen bg-[#0a192f] dark:bg-gray-100 text-gray-300 dark:text-gray-800"
    >
      <div className="max-w-[950px] mx-auto p-4 flex flex-col justify-center h-full">
        <div className="absolute top-16 pl-4">
          <p className="opacity-10 text-9xl font-bold inline border-b-4 border-yellow-600">
            Tools
          </p>
        </div>

        <div className="h-auto z-10">
          <div className="mt-8 text-2xl">
            <p>What I use</p>
          </div>
          <div className="mt-[1rem] flex flex-wrap justify-center items-center text-center gap-[2px] text-gray-900">
            <span
              className={`bg-gray-300 py-1 px-2 m-1 rounded-lg cursor-pointer ${
                allCategory ? "bg-orange-400" : ""
              }`}
              onClick={() => toggleCategory("")}
            >
              All
            </span>
            <span
              onClick={() => toggleCategory("language")}
              className={`bg-gray-300 py-1 px-2 m-1 rounded-lg cursor-pointer ${
                category.includes("language") ? "bg-orange-400" : ""
              }`}
            >
              Languages
            </span>
            <span
              onClick={() => toggleCategory("framework")}
              className={`bg-gray-300 py-1 px-2 m-1 rounded-lg cursor-pointer ${
                category.includes("framework") ? "bg-orange-400" : ""
              }`}
            >
              Frameworks
            </span>
            <span
              onClick={() => toggleCategory("library")}
              className={`bg-gray-300 py-1 px-2 m-1 rounded-lg cursor-pointer ${
                category.includes("library") ? "bg-orange-400" : ""
              }`}
            >
              Libraries
            </span>
            <span
              onClick={() => toggleCategory("preprocessors")}
              className={`bg-gray-300 py-1 px-2 m-1 rounded-lg cursor-pointer ${
                category.includes("preprocessors") ? "bg-orange-400" : ""
              }`}
            >
              Preprocessors
            </span>
            <span
              onClick={() => toggleCategory("vc")}
              className={`bg-gray-300 py-1 px-2 m-1 rounded-lg cursor-pointer ${
                category.includes("vc") ? "bg-orange-400" : ""
              }`}
            >
              Version Control
            </span>
            <span
              onClick={() => toggleCategory("build-tool")}
              className={`bg-gray-300 py-1 px-2 m-1 rounded-lg cursor-pointer ${
                category.includes("build-tool") ? "bg-orange-400" : ""
              }`}
            >
              Build tools
            </span>
            <span
              onClick={() => toggleCategory("pm")}
              className={`bg-gray-300 py-1 px-2 m-1 rounded-lg cursor-pointer ${
                category.includes("pm") ? "bg-orange-400" : ""
              }`}
            >
              Package Manager
            </span>
            <span
              onClick={() => toggleCategory("backend")}
              className={`bg-gray-300 py-1 px-2 m-1 rounded-lg cursor-pointer ${
                category.includes("backend") ? "bg-orange-400" : ""
              }`}
            >
              Backend Services
            </span>
            <span
              onClick={() => toggleCategory("hosting")}
              className={`bg-gray-300 py-1 px-2 m-1 rounded-lg cursor-pointer ${
                category.includes("hosting") ? "bg-orange-400" : ""
              }`}
            >
              Hosting Services
            </span>
            <span
              onClick={() => toggleCategory("other")}
              className={`bg-gray-300 py-1 px-2 m-1 rounded-lg cursor-pointer ${
                category.includes("other") ? "bg-orange-400" : ""
              }`}
            >
              Other
            </span>
          </div>

          <div className="w-full z-20 grid grid-cols-4 sm:grid-cols-5 gap-3 text-center py-10">
            {filteredCategory.map(({ name, img }, index) => (
              <Tool name={name} img={img} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
