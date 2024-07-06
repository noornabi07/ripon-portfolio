import React from 'react';
import contactImg from '../../assets/images/contactImg.png'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from 'react-router-dom';


const ContactInfo = () => {
    return (
      <div>
        <div
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="linear"
          className="h-auto w-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne"
        >
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="linear"
            className="w-full h-64 object-cover rounded-lg mb-2"
            src={contactImg}
            alt=""
          />

          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold text-white">Ripon Chandra Dev</h3>
            <p className="text-lg font-normal text-orange-400">
              Specialist SEO Experts
            </p>
            <p className="text-base text-gray-400 tracking-wide text-start">
              I’m Ripon Sharma. I’m a professional Digital Marketer ( SEO &
              Social Media Marketing Expert ) Just to give you a quick brief
              about me, I started my career in the world of internet marketing
              back in 2020. I have 150+ reviews on the Fiverr marketplace & 300+
              satisfied buyers out of the marketplace. Anyway, I now provide –
              SEO, Social Media marketing & Google Ads services.
            </p>
            <p className="text-base text-gray-400 flex items-center gap-2">
              Phone: <span className="text-lightText">+880 1734-992626</span>
            </p>
            <p className="text-base text-gray-400 flex items-center gap-2">
              Email:{" "}
              <span className="text-lightText">rankagency289@gmail.com</span>
            </p>
          </div>
          <div className="mt-2 flex items-center gap-3">
            <h2 className="text-base text-gray-400">Find Me In:</h2>
            <div className="flex gap-2 items-center">
              <Link
                to="https://www.facebook.com/profile.php?id=61561676831607"
                target="_blank"
              >
                <FaFacebookF className="text-xl font-bold text-white hover:text-orange-500 hover:scale-150 duration-300"></FaFacebookF>
              </Link>
              <Link
                to="https://www.linkedin.com/in/ripon-sharma-145b95233/"
                target="_blank"
              >
                <FaLinkedinIn className="text-2xl font-bold text-white hover:text-orange-500 hover:scale-150 duration-300"></FaLinkedinIn>
              </Link>
              <Link
                to="https://www.instagram.com/riponsharma71/"
                target="_blank"
              >
                <FaInstagram className="text-2xl font-bold text-white hover:text-orange-500 hover:scale-150 duration-300"></FaInstagram>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ContactInfo;