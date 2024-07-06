import React from "react";
import Countdown from "react-countdown";
import "./FlipClock.css";

const FlipUnit = ({ value, unit }) => (
  <div className="flip-unit">
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">{value}</div>
        <div className="flip-card-back">{value}</div>
      </div>
    </div>
    <div className="flip-unit-label">{unit}</div>
  </div>
);

const FlipClock = ({ date }) => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="bg-teal-700 py-5">
        <h2 className="text-5xl font-serif text-white  py-4">Super Offer - Contact Now</h2>
        <div className="flip-countdown">
          <FlipUnit value={days} unit="Days" />
          <FlipUnit value={hours} unit="Hours" />
          <FlipUnit value={minutes} unit="Minutes" />
          <FlipUnit value={seconds} unit="Seconds" />
        </div>
      </div>
    );
  };

  return <Countdown date={date} renderer={renderer} />;
};

export default FlipClock;
