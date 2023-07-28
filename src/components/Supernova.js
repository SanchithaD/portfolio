import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { images } from "../data";

export default function Supernova() {
    return (
        <section id="supernova">
            <div className="container px-5 py-5 mx-auto bg-gray-800 bg-opacity-40 rounded">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Supernova Hackathon 2023
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        <a target="_blank" href="https://supernovahack.com/">
                            Supernova Hackathon
                        </a>
                    </p>

                </div>

                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2" style={{ paddingLeft: 5 + "cm" }}>
                    <div class="responsive1">
                        <a target="_blank" href="https://medium.com/@sanchunila/supernova-hackathon-an-event-at-fremont-high-school-by-lynbrook-students-to-empower-women-in-stem-7b773ce61741">
                            <div class="gallery">
                                <img src="./supernovamedium.png" alt="Supernova" />

                                <div class="desc bg-pink-300 text-white mb-3">Supernova Hackathon 2023 Medium writeup</div>
                            </div>
                        </a>
                    </div>

                    <div class="responsive1">
                        <a target="_blank" href="https://supernovahack.com">
                            <div class="gallery">

                                <img src="./supernovahack.png" alt="Supernova" />
                                <div class="desc bg-yellow-300 text-white mb-3">Supernova Hackathon 2023 Website</div>
                            </div>
                        </a>
                    </div>
            </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">

                    {images.map((skill) => (
                        <div class="responsive">
                            <a target="_blank" href={skill}>
                                <div class="gallery">

                                    <img src={skill.image} alt="Cinque Terre" />

                                    <div class="desc">{skill.title}</div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}