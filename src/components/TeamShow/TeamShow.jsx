import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./TeamShow.css";

// import required modules
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";

const TeamShow = () => {
  const [teams, setTeams] = useState([]);
  console.log(teams);

  useEffect(() => {
    fetch('team.json')
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);

  return (
    <div id="team" className="mt-20 team_wrapper">
      <Swiper
        cssMode={true}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper team_content"
      >
        {teams.map((team) => (
          <SwiperSlide key={team.id}>
            <div className="flex flex-col justify-center items-center">
              <div className="avatar">
                <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={team?.img} />
                </div>
              </div>
              <div>
                <h2 className="my-4 text-lg px-10 xl:text-3xl font-serif italic">
                  {team?.about}
                </h2>
                <h3 className="font-semibold font-serif text-orange-400">
                  {team?.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamShow;
