import React, { useRef, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [filter, setFilter] = useState("");
  const spanRef = useRef(null);

  const handleFilterChange = (value) => {
    setFilter(value === "all" ? "" : value);
  };

  const getContent = () => {
    if (spanRef.current) {
      const content = spanRef.current.textContent;
      console.log(content);
    }
  };

  const tools = [
    { img: "/tools/html.png", name: "HTML", type: "lang" },
    { img: "/tools/css.png", name: "CSS", type: "lang" },
    { img: "/tools/javascript.png", name: "JavaScript", type: "lang" },
    { img: "/tools/bootstrap.png", name: "Bootstrap", type: "fra/lib" },
    { img: "/tools/tailwind.png", name: "TailwindCSS", type: "fra/lib" },
    { img: "/tools/tailwind.png", name: "MUI", type: "fra/lib" },
    { img: "/tools/tailwind.png", name: "ShadCN", type: "fra/lib" },
    { img: "/tools/tailwind.png", name: "Radix", type: "fra/lib" },
    { img: "/tools/react.png", name: "React", type: "fra/lib" },
    { img: "/tools/next.png", name: "Next.js", type: "fra/lib" },
    { img: "/tools/html.png", name: "Redux", type: "fra/lib" },
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
  ];

  const filteredTools = filter
    ? tools.filter((tool) => tool.type === filter)
    : tools;

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
              onClick={() => handleFilterChange("")}
              className="bg-gray-300 py-1 px-2 m-1 rounded-lg cursor-pointer"
            >
              All
            </span>
            <span
              onClick={() => handleFilterChange("lang")}
              className="bg-gray-300 py-1 px-2 m-1 rounded-lg cursor-pointer"
            >
              Languages
            </span>
            <span
              onClick={() => handleFilterChange("fra/lib")}
              className="bg-gray-300 py-1 px-2 m-1 rounded-lg cursor-pointer"
            >
              Frameworks/Libraries
            </span>
            <span
              onClick={() => handleFilterChange("preprocessors")}
              className="bg-gray-300 py-1 px-2 m-1 rounded-lg cursor-pointer"
            >
              Preprocessors
            </span>
            <span
              onClick={() => handleFilterChange("vc")}
              className="bg-gray-300 py-1 px-2 m-1 rounded-lg cursor-pointer"
            >
              Version Control
            </span>
            <span
              onClick={() => handleFilterChange("build-tool")}
              className="bg-gray-300 py-1 px-2 m-1 rounded-lg cursor-pointer"
            >
              Build Tools
            </span>
            <span
              onClick={() => handleFilterChange("pm")}
              className="bg-gray-300 py-1 px-2 m-1 rounded-lg cursor-pointer"
            >
              Package Manager
            </span>
            <span
              onClick={() => handleFilterChange("backend")}
              className="bg-gray-300 py-1 px-2 m-1 rounded-lg cursor-pointer"
            >
              Backend Services
            </span>
            <span
              onClick={() => handleFilterChange("other")}
              className="bg-gray-300 py-1 px-2 m-1 rounded-lg cursor-pointer"
            >
              Other
            </span>
          </div>

          <div className="w-full z-20 grid grid-cols-4 sm:grid-cols-5 gap-3 text-center py-10">
            {filteredTools.map(({ name, img }) => (
              <Tool name={name} img={img} key={name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
