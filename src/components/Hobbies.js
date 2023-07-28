import { SunIcon, BookOpenIcon } from "@heroicons/react/solid";
import React from "react";
import { hobbies } from "../data";

export default function Hobbies() {
  return (
    <section id="hobbies">
      <div className="container px-5 py-10 mx-auto ">
        <div className="text-center mb-20">
          <BookOpenIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Hobbies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 bg-gray-800 bg-opacity-40 rounded">
          {hobbies.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="rounded flex h-full items-center">
                <SunIcon className="text-yellow-400 w-4 h-4 flex-shrink-0 mr-4" />
                <span className="title-font font-small text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}