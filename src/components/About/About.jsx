import React from "react";
import Container from "../Shared/Container/Container";
import person from "../../assets/images/black-person.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container>
      <div
        id="about"
        className="grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-0 justify-center items-center md:mt-5 xl:mt-20"
      >
        <div data-aos="flip-left">
          <img
            className="w-full xl:w-96 rounded-lg mx-auto"
            src={person}
            alt="white-person"
          />
        </div>
        <div data-aos="flip-right" className="text-left w-full">
          <span className="hello-txt text-lg">Hello</span>
          <div>
            <h2 className="text-2xl md:text-2xl font-serif font-bold text-orange-500">
              I'm Ripon Sharma
            </h2>
            <p className="text-lg font-serif mt-2 text-gray-600 pb-4 border-b-2">
              I'm a professional Digital Marketer ( SEO & Social Media Marketing
              Expert ).
            </p>
          </div>
          <div className="mt-5">
            <p className="text-lg">
              I’m Ripon Sharma. I’m a professional Digital Marketer ( SEO &
              Social Media Marketing Expert ) Just to give you a quick brief
              about me, I started my career in the world of internet marketing
              back in 2020. I have 150+ reviews on the Fiverr marketplace & 400+
              satisfied buyers out of the marketplace. Anyway, I now provide –
              SEO, Social Media marketing & Google Ads services.
            </p>
            <h4 className="font-xl font-bold text-orange-500 my-2">
              Best Regards!
            </h4>
          </div>
          <div className="flex gap-5">
            <Link to="https://www.facebook.com/ripon.sorkar.9235199">
              <button className="px-10 py-2 text-white font-serif shadow-lg shadow-black hover:bg-green-500 hover:duration-500 border-black border-2 bg-orange-500 rounded-2xl">
                Hire Me
              </button>
            </Link>
            <button className="px-10 py-2 text-white font-serif shadow-lg shadow-black hover:bg-green-500 hover:duration-500 border-black border-2 bg-orange-500 rounded-2xl">
              Thank you
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
