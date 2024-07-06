import { FaCalendarAlt } from "react-icons/fa";
import React from 'react';
import Container from '../Shared/Container/Container';
import Progress from './Progress';

const Skills = () => {
    return (
      <Container>
        <div className="mt-5 md:mt-10 xl:mt-20">
          <h2 className="font-serif text-4xl">Skills & Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-5 xl:gap-20 mt-10 px-5 md:px-10 xl:px-20 bg-gray-600 p-10">
            <div>
              <Progress></Progress>
            </div>
            <div className="text-left flex items-center mt-5 border-l-2">
              <div className="text-md md:text-lg pl-8 text-white">
                <h4>Full Name:</h4>
                <h4 className="my-3">Passion:</h4>
                <h4>Address:</h4>
                <h4 className="mt-2">Freelance:</h4>
                <h4 className="my-3">What's App:</h4>
                <h4>Gmail:</h4>
                <h4 className="text-md md:text-lg bg-orange-600 mt-2 md:px-2 rounded-lg">
                  Online Status
                </h4>
              </div>
              <div className="ml-10 xl:ml-20 text-md md:text-lg  text-white">
                <p>Ripon Chandra Dev Sharma</p>
                <p className="my-3">Freelancer</p>
                <p>Dinajpur - Bangladesh</p>
                <p className="mt-2">Till July 17, 2020</p>
                <p className="my-3">+8801734-992626</p>
                <p>rankagency289@gmail.com</p>
                <p className="mt-2 flex items-center gap-3">
                  {" "}
                  <FaCalendarAlt /> 24/7 Hours Online Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default Skills;