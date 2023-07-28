import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";


export default function SocialFollow() {
    return (
        <div class="social-container">
            <a
                href="#about"
                className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                &copy; Sanchitha Dinesh
            </a>
        </div>

    );
}