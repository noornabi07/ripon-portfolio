import React, { useState } from "react";
import Container from "../Shared/Container/Container";
import "./Portfolio.css";
import Tab from "./Tab";
import PortfolioForm from "./PortfolioForm";

const Portfolio = () => {
  const [refetch, setRefetch] = useState(false);
  return (
    <Container>
      <div className="pt-20 pb-10">
        <div className=" text-orange-500 my-10 w-full md:w-2/3 flex items-start mx-auto rounded-lg text-2xl font-serif text-center">
          <marquee>
            <h1>
              Welcome to our portfolio gallery. Here is have now more services
              gallery and my work result. Please show this and decide your goal
            </h1>
          </marquee>
        </div>

        <div className="portfolio_wrapper flex flex-col justify-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold">Portfolio</h1>
            <h4 className="font-serif">{`Home > Portfolio`}</h4>
            <button
              onClick={() => document.getElementById("my_modal_6").showModal()}
              className="px-4 py-2 bg-orange-500 text-white font-serif mt-4 rounded-md hover:bg-green-500 hover:duration-500"
            >
              Add Portfolio
            </button>
          </div>
        </div>

        <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
          <PortfolioForm
            setRefetch={setRefetch}
            refetch={refetch}
          ></PortfolioForm>
        </dialog>

        <div>
          <Tab refetch={refetch}></Tab>
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;
