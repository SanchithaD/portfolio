import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import {
    faYoutube,
    faLinkedin,
    faGithubSquare,
    faDev
  } from "@fortawesome/free-brands-svg-icons";


export default function About() {
    return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Sanchitha!
            </h1>
            <h2 className="title-font sm:text-2xl text-l mb-4 font-medium text-white">
               Senior @ Lynbrook High School
            </h2>
            <p className="mb-8 leading-relaxed text-gray-300">
            I am deeply passionate about engineering & computer science. I began developing iOS apps in eighth grade. 
            I taught myself Machine Learning by completing machine learning courses and started creating my own machine learning algorithms and models to compliment the iOS apps I've been developing. 
            </p>
            <div className="flex justify-center">
              <a
                href="mailto:sanchunila@gmail.com"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Contact Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 hover:text-white rounded text-lg">
               My Projects
              </a>
            </div>
            <div class="social-container bg-blue-900">
              <a href="https://www.linkedin.com/in/sanchitha-dinesh"
                className="linkedin social">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://github.com/SanchithaD"
                className="github social">
                <FontAwesomeIcon icon={faGithubSquare} size="2x" />
              </a>
              <a href="mailto:sanchunila@gmail.com"
                className="mail social">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>

              <a href="https://devpost.com/SanchithaD"
                className="dev social">
                <FontAwesomeIcon icon={faDev} size="2x" />
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-1/6 md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./sanchu.jpg"
            />
          </div>
        </div>
      </section>
    );
  }
