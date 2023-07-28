import { BriefcaseIcon } from "@heroicons/react/solid";
import React from "react";
import { work } from "../data";

export default function Work() {
    return (
        <section id="work" className="text-gray-400 bg-blue-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <BriefcaseIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Work Experience
                    </h1>
                </div>
                <div className="flex flex-wrap -m-4  bg-gray-800 bg-opacity-40 p-8 rounded">
                    {work.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}
                            className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">
                                <div className="w-full border-4 border-gray-800 bg-gray-900 absolute inset-0 h-full ">
                                    <h2 className="tracking-widest text-lg title-font font-medium text-green-400 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-sm font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <h1 className="title-font text-sm padding:left: 50 font-medium text-white mb-3">
                                        {project.date}
                                    </h1>

                                    <img
                                        alt="gallery"
                                        className="relative w-50 h-1/2 inset:2"
                                        src={project.image}
                                    />
                                </div>
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                        {project.title}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3 opacity-0 ">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}