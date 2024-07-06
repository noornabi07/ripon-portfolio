import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaAngleDoubleDown,
} from "react-icons/fa";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Ripon Sharma",
      "an SEO & Social Media Marketing Expert"
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  // I am

  return (
    <>
      <div id="banner" className="banner_wrapper">
        <div className="content pt-28 xl:pt-80">
          <h2 className="text-3xl font-bold font-serif text-white mb-5">
            Welcome To Our Rank Agency
          </h2>
          <div className="flex items-center text-2xl lg:text-4xl xl:text-6xl font-bold font-serif justify-center">
            <span className="mr-4">I Am </span>
            <p className="text-orange-600">{text}</p>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            />
          </div>
          <div className="flex justify-center items-center text-white mt-5 gap-4 text-3xl">
            <Link
              to="https://www.facebook.com/profile.php?id=61561724795557"
              target="_blank"
            >
              <FaFacebook className="cursor-pointer hover:scale-150 hover:duration-150 hover:text-orange-600" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/ripon-sharma-145b95233/"
              target="_blank"
            >
              <FaLinkedinIn className="cursor-pointer hover:scale-150 hover:duration-150 hover:text-orange-600" />
            </Link>
            <Link to="https://www.instagram.com/riponsharma71/" target="_blank">
              <FaInstagram className="cursor-pointer hover:scale-150 hover:duration-150 hover:text-orange-600" />
            </Link>
          </div>
        </div>

        <div className="dropdown-container content mt-10">
          <div className="dropdown-icon-wrapper">
            <div className="text-4xl font-bold text-orange-500">
              <FaAngleDoubleDown></FaAngleDoubleDown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
