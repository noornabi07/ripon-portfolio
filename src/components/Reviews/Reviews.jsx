import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Reviews.css";

// import required modules
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Container from "../Shared/Container/Container";
import ReviewsForm from "./ReviewsForm";

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState([]);

  console.log(reviewsData);

  useEffect(() => {
    fetch(
      "reviews.json"
    )
      .then((res) => res.json())
      .then((data) => setReviewsData(data));
  }, []);

  return (
    <Container>
      <div id="reviews" className="my-10 md:my-14 xl:my-20">
        <h2 className="font-serif text-xl md:text-3xl">
          Read What Our Customer Says
        </h2>
      </div>
      <Swiper
        data-aos="zoom-in"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {reviewsData.map((review, index) => (
          <div key={index}>
            <SwiperSlide>
              <div className="card w-full mb-10 bg-slate-700 border-4 border-gray-600 text-white">
                <figure>
                  <div className="avatar">
                    <div className="w-24 my-2 mt-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={review.img} />
                    </div>
                  </div>
                </figure>
                <div className="card-body text-center">
                  <h2 className="text-xl font-bold -mt-6">{review.name}</h2>
                  <div className="card-actions justify-center">
                    <Rating
                      style={{ maxWidth: 150 }}
                      value={review.rating}
                      readOnly
                    ></Rating>
                    <p className="">{review.details}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>

      <div className="mt-5">
        <button
          className="px-4 py-2 bg-orange-500 rounded-md text-lg font-serif text-white"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Get Review
        </button>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <ReviewsForm></ReviewsForm>
      </dialog>
    </Container>
  );
};

export default Reviews;
