import React, { useRef, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [category, setCategory] = useState([]);
  const [allCategory, setAllCategory] = useState(true);

  const toolsArray = [
    { img: "/tools/html.png", name: "HTML", type: "language" },
    { img: "/tools/css.png", name: "CSS", type: "language" },
    { img: "/tools/javascript.png", name: "JavaScript", type: "language" },
    { img: "/tools/bootstrap.png", name: "Bootstrap", type: "fra/lib" },
    { img: "/tools/tailwind.png", name: "TailwindCSS", type: "fra/lib" },
    { img: "/tools/tailwind.png", name: "MUI", type: "fra/lib" },
    { img: "/tools/tailwind.png", name: "ShadCN", type: "fra/lib" },
    { img: "/tools/tailwind.png", name: "Radix", type: "fra/lib" },
    { img: "/tools/react.png", name: "React", type: "fra/lib" },
    { img: "/tools/next.png", name: "Next.js", type: "framework" },
    { img: "/tools/html.png", name: "Redux", type: "library" },
    { img: "/tools/html.png", name: "TypeScript", type: "preprocessors" },
    { img: "/tools/html.png", name: "SASS", type: "preprocessors" },
    { img: "/tools/git.png", name: "Git", type: "vc" },
    { img: "/tools/github.png", name: "GitHub", type: "vc" },
    { img: "/tools/html.png", name: "Vite", type: "build-tool" },
    { img: "/tools/html.png", name: "Webpack", type: "build-tool" },
    { img: "/tools/firebase.png", name: "Firebase", type: "backend" },
    { img: "/tools/html.png", name: "npm", type: "pm" },
    { img: "/tools/html.png", name: "pmpm", type: "pm" },
    { img: "/tools/html.png", name: "TanStack", type: "other" },
    { img: "/tools/html.png", name: "GrapQL", type: "other" },
    { img: "/tools/html.png", name: "Vercel", type: "other" },
  ];

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
      className="w-full pt-32 md:pt-0 md:h-screen bg-[#0a192f] dark:bg-gray-100 text-gray-300 dark:text-gray-800"
    >
      <div className="max-w-[950px] mx-auto p-4 flex flex-col justify-center h-full">
        <div className="absolute md:mb-32 md:pb-48 mb-96 sm:pb-2 -mt-10 pb-96 pl-4">
          <p className="opacity-10 text-9xl font-bold inline border-b-4 border-yellow-600">
            Tools
          </p>
        </div>

        <div className="h-[50vh] z-10">
          <div className="z-10 mt-[5rem] flex justify-center items-center text-center gap-[2px] text-gray-900">
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
              Build category
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
              onClick={() => toggleCategory("other")}
              className={`bg-gray-300 py-1 px-2 m-1 rounded-lg cursor-pointer ${
                category.includes("other") ? "bg-orange-400" : ""
              }`}
            >
              Other
            </span>
          </div>

          <div className="w-full z-20 grid grid-cols-4 sm:grid-cols-5 gap-3 text-center py-10">
            {filteredCategory.map(({ name, img }) => (
              <Tool name={name} img={img} key={name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
