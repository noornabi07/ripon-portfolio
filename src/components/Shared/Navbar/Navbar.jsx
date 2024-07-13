import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import mainlogo from "../../../assets/ripon-logo.png";
import agency from "../../../assets/agency.png";

import "./Navbar.css";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        {/* <Link to="/">Home</Link> */}
        <ScrollLink to="banner" smooth={true} duration={500}>
          <Link to="/">Home</Link>
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="about" smooth={true} duration={500}>
          <Link to="/">About Me</Link>
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="services" smooth={true} duration={500}>
          <Link to="/">Services & Info</Link>
        </ScrollLink>
      </li>
      <li>
        <Link to="/portfolio">Portfolio & Blog</Link>
      </li>
      <li>
        <ScrollLink to="team" smooth={true} duration={500}>
          <Link to="/">My Team</Link>
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="reviews" smooth={true} duration={500}>
          <Link to="/">Reviews</Link>
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="contact" smooth={true} duration={500}>
          <Link to="/">Contact</Link>
        </ScrollLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-gray-500 bg-opacity-40 text-white xl:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <div className="flex items-center">
            <img className="w-20" src={mainlogo} alt="" />
            <h2 className="text-2xl cursor-pointer w-56 uppercase">
              <Link to="/">
                <h2 className="font-bold font-serif">
                  Rank <span className="text-orange-500">Agency</span>
                </h2>
              </Link>
            </h2>
          </div>
        </div>
        <div className="navbar-center font-serif uppercase text-5xl hidden lg:flex">
          <ul className="menu menu-horizontal px-1 customMenu">{navOptions}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
