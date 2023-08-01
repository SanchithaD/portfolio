import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { MLprojects } from "../data";

export default function MLProjects() {
  return (
    <section id="mlprojects" className="text-gray-400 bg-blue-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          </p>
        </div>
        <div className="flex flex-wrap -m-4  px-5 py-10 bg-gray-800">
          {MLprojects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 h-100 p-4">
              <div className="container bg-gray-600 border-bottom-left-radius:25px border-bottom-right-radius:25px">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>

                <br></br>
                <h1 className="title-font text-2xl font-bold text-green-200 mb-3">
                  {project.title}
                </h1>
                <p className="title-font text-lg font-medium text-white mb-3">{project.description}</p>
                <br></br>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}