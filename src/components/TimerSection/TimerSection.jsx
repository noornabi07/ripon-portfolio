import React, { useState } from "react";
import FlipClock from "../FlipClock/FlipClock";
import Container from "../Shared/Container/Container";
import { BiSolidOffer } from "react-icons/bi";

const TimerSection = () => {
  const [inputValue, setInputValue] = useState(7);

  const time = inputValue>0 

  const futureDate =
    new Date().getTime() + parseFloat(inputValue) * 24 * 60 * 60 * 1000; // 7 days from now

  const submitDays = (event) => {
    event.preventDefault();
    const days = event.target.days.value;
    setInputValue(days);
  };

  return (
    <Container>
      <div className="mt-10">
        <div className="flex justify-center items-center gap-3">
          <h1 className="text-4xl font-serif mb-7">We Have Offer Now</h1>
          <BiSolidOffer
            onClick={() => document.getElementById("my_modal_4").showModal()}
            className="text-5xl text-orange-500 font-serif -mt-6"
          ></BiSolidOffer>
        </div>
        <FlipClock date={futureDate}></FlipClock>
      </div>

      <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-purple-500">Set Future Date</h3>
          <form className="py-4" onSubmit={submitDays}>
            <input
              type="text"
              name="days"
              required
              id="days"
              placeholder="Enter number of days"
              className="py-2 px-4"
            />

            <div className="modal-action">
              <button
                type="submit"
                className="px-4 py-1 bg-purple-500	 text-white font-serif rounded-md"
                onClick={() =>
                   document.getElementById("my_modal_4").close()
                }
              >
                Submit Days
              </button>
              <button
                type="submit"
                className="px-4 py-1 bg-rose-500	 text-white font-serif rounded-md"
                onClick={() => document.getElementById("my_modal_4").close()}
              >
                close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </Container>
  );
};

export default TimerSection;
