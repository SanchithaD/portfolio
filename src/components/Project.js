import { CodeIcon } from "@heroicons/react/solid";
import { LightBulbIcon } from "@heroicons/react/solid";
import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import { MLprojects } from "../data";
import {CircuitProjects} from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import {
    faYoutube,
    faLinkedin,
    faGithubSquare,
    faDev
  } from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-blue-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <h2 className="title-font sm:text-2xl text-l mb-4 font-medium text-white">
            Some of my cool iOS App projects. 
          
          <a href="https://devpost.com/SanchithaD"
            className="dev social text-green-400 mb-1">
            Full list @ Devpost
          </a>
          <a href="https://github.com/SanchithaD"
            className="github social">
            My Github
          </a>
          </h2>
        </div>
        <div className="flex flex-wrap -m-4  px-5 py-10  bg-gray-800 bg-opacity-40 rounded">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 h-100 p-4">
              <div className="container bg-gray-600 bg-opacity-40 p-4 rounded">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.info}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.subtitle}
                    </h1>
                    <p className="leading-relaxed opacity-0">{project.description}</p>
                  </div>
                </div>

                <br></br>
                <h1 className="title-font text-2xl font-bold text-green-200 mb-3">
                  {project.title}
                </h1>
                <p className="title-font text-lg font-medium text-white mb-3">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <LightBulbIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Science fair projects
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
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-0">
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

      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <ChipIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          Circuit projects & Robotics
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex flex-wrap -m-4  px-5 py-10 bg-gray-800">
          {CircuitProjects.map((project) => (
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
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-0">
                    <h2 className="tracking-widest text-sm title-font font-small text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>

                <br></br>
                <h1 className="title-font text-lg font-bold text-green-200 mb-3">
                  {project.title}
                </h1>
                <p className="title-font text-sm font-weight:200 text-white mb-3">{project.description}</p>
                <br></br>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    
  );
}