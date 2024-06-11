import React from "react";
import Swal from "sweetalert2";

const PortfolioForm = ({ setRefetch, refetch }) => {
  const handlePortfolioSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const title = form.title.value;
    const category = form.category.value;
    const details = form.details.value;
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
        const newPortfolio = { name, title, category, details, image: imgUrl };

        // Send review data to the backend server
        const backendUrl =
          "https://ripon-sharma-server.vercel.app/addportfolio"; // Replace with your backend URL
        const reviewRes = await fetch(backendUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPortfolio),
        });
        const data = await reviewRes.json();
        if (data.acknowledged) {
          setRefetch(!refetch);
        }

        if (reviewRes.ok) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your portfolio upload done",
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

    document.getElementById("my_modal_6").close();
  };

  return (
    <div className="modal-box">
      <h3 className="font-bold text-lg text-purple-500">Add Your Portfolio</h3>
      <form className="py-4" onSubmit={handlePortfolioSubmit}>
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
            htmlFor="title"
          >
            Portfolio Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Type your title"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="" disabled selected>
              Select category
            </option>
            <option value="seo">SEO</option>
            <option value="youtube">YouTube SEO</option>
            <option value="google">Google Ads</option>
            <option value="facebook">Facebook Ads</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="review"
          >
            Portfolio Details
          </label>
          <textarea
            id="details"
            name="details"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Write your portfolio details here..."
            rows="4"
            required
          ></textarea>
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
                <div className="bg-purple-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                  Upload Portfolio
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="modal-action">
          <button
            type="submit"
            className="btn bg-purple-500 text-white px-4 py-2 rounded-md"
          >
            Submit Portfolio
          </button>
          <button
            type="button"
            className="px-4 py-1 bg-pink-600	 text-white font-serif rounded-md"
            onClick={() => document.getElementById("my_modal_6").close()}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default PortfolioForm;
