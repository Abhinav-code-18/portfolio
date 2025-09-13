import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {

    // Smooth Scroll Function
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if(section) {
            section.scrollIntoView({ behaviour: "smooth"});
        }
    };

    return (
        <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
            <div className="container mx-auto text-center">
                <h2 className="text-xl font-semibold text-purple-500">
                    Abhinav Deshmukh
                </h2>
                {/* Navigation Link */}
                <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
                    {[
                        {name:"About", id:"about"},
                        {name:"Skills", id:"skills"},
                        {name:"Experience", id:"experience"},
                        {name:"Projects", id:"work"},
                        {name:"Education", id:"education"},
                    ].map((item, index) => (
                        <button
                        key={index}
                        onClick={() => handleScroll(item.id)}
                        className="hover:text-purple-500 text-sm text-sm sm:text-base my-1"
                        >
                            {item.name}
                        </button>
                    ))}
                </nav>

                {/* Social Media Links */}
                <div className="flex flex-wrap justify-center space-x-4 mt-6">
                    {[
                        { icons: <FaFacebook />, link:"https://www.facebook.com/share/1CbJNLqT7m/" },
                        { icons: <FaTwitter />, link:"https://x.com/AbhinavD18_07?t=hDThHlazB3Wmn-ByuK-wfg&s=09" },
                        { icons: <FaLinkedin />, link:"https://www.linkedin.com/in/abhinav-deshmukh-2a913325a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
                        { icons: <FaInstagram />, link:"https://www.instagram.com/abhi9_deshmukh_07?igsh=ZXA3MjlmMm94Z25n" },
                    ].map((item, index) => (
                        <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl hover:text-purple-500 transition-transform transform hover:scale:110"
                        >
                            {item.icons}
                        </a>
                    ))}
                </div>

                {/* Copyright Text */}
                <p className="text-sm text-gray-400 mt-6">
                    @ 2025 Abhianv Deshmukh. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;