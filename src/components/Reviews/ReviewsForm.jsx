import React from "react";
import Swal from "sweetalert2";

const ReviewsForm = ({ setRefetch, refetch }) => {
  const handleReviews = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const review = form.review.value;
    const rating = form.rating.value;
    const image = form.image.files[0];

    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;

    try {
      const imgRes = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const imgData = await imgRes.json();

      if (imgData.success) {
        const imgUrl = imgData.data.display_url;
        const newReview = { name, email, details: review, rating, img: imgUrl };

        // Send review data to the backend server
        const backendUrl = "https://ripon-sharma-server.vercel.app/addreview"; // Replace with your backend URL
        const reviewRes = await fetch(backendUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newReview),
        });

        const data = await reviewRes.json();
        if (data.acknowledged) {
          setRefetch(!refetch);
        }

        if (reviewRes.ok) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your provide review done",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }

    document.getElementById("my_modal_5").close();
  };

  return (
    <div className="modal-box">
      <h3 className="font-bold text-lg text-orange-500">Provide Your Review</h3>
      <form className="py-4" onSubmit={handleReviews}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="review"
          >
            Your Review
          </label>
          <textarea
            id="review"
            name="review"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Write your review here..."
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-4 flex items-center justify-center gap-4">
          <p className="block text-orange-500 text-sm font-bold">Your Rating</p>
          <div className="rating">
            <input
              type="radio"
              id="star5"
              name="rating"
              value="1"
              className="mask mask-star-2 bg-orange-400"
            />
            <label htmlFor="star5" className="mr-2">
              1
            </label>
            <input
              type="radio"
              id="star4"
              name="rating"
              value="2"
              className="mask mask-star-2 bg-orange-400"
            />
            <label htmlFor="star4" className="mr-2">
              2
            </label>
            <input
              type="radio"
              id="star3"
              name="rating"
              value="3"
              className="mask mask-star-2 bg-orange-400"
            />
            <label htmlFor="star3" className="mr-2">
              3
            </label>
            <input
              type="radio"
              id="star2"
              name="rating"
              value="4"
              className="mask mask-star-2 bg-orange-400"
            />
            <label htmlFor="star2" className="mr-2">
              4
            </label>
            <input
              type="radio"
              id="star1"
              name="rating"
              value="5"
              className="mask mask-star-2 bg-orange-400"
            />
            <label htmlFor="star1" className="mr-2">
              5
            </label>
          </div>
        </div>
        <div className=" p-4 bg-white w-full  m-auto rounded-lg">
          <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
            <div className="flex flex-col w-max mx-auto text-center">
              <label>
                <input
                  className="text-sm cursor-pointer w-36 hidden"
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  hidden
                />
                <div className="bg-orange-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                  Upload Your Profile
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="modal-action">
          <button
            type="submit"
            className="btn bg-orange-500 text-white px-4 py-2 rounded-md"
          >
            Submit Review
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-rose-600 rounded-md text-white"
            onClick={() => document.getElementById("my_modal_5").close()}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewsForm;
