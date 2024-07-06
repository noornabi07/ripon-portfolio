import React, { useEffect, useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import "./Tab.css";

const Tab = ({ refetch }) => {
  const [activeTab, setActiveTab] = useState("all");
  const [portfolio, setPortfolio] = useState([]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [itemDetails, setItemDetails] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  console.log(portfolio);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    fetch("portfolio.json")
      .then((res) => res.json())
      .then((data) => setPortfolio(data));
  }, []);

  const fetchDataById = async (id) => {
    try {
      const response = await fetch(
        `https://ripon-server-18h0gcjap-noornabi07s-projects.vercel.app/port/${id}`
      );
      const data = await response.json();
      setItemDetails(data);
      setModalOpen(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClick = (item) => {
    setSelectedItem(item);
    fetchDataById(item._id);
  };

  return (
    <div className="mt-8">
      <h2 className="my-2 font-serif text-orange-500 text-2xl">
        Search By Category
      </h2>
      <div className="tab-buttons">
        <button
          className={`tab-button ${activeTab === "all" ? "active" : ""}`}
          onClick={() => handleTabClick("all")}
        >
          All
        </button>
        <button
          className={`tab-button ${activeTab === "seo" ? "active" : ""}`}
          onClick={() => handleTabClick("seo")}
        >
          SEO
        </button>
        <button
          className={`tab-button ${activeTab === "youtube" ? "active" : ""}`}
          onClick={() => handleTabClick("youtube")}
        >
          YouTube SEO
        </button>
        <button
          className={`tab-button ${activeTab === "google" ? "active" : ""}`}
          onClick={() => handleTabClick("google")}
        >
          Google Ads
        </button>
        <button
          className={`tab-button ${activeTab === "facebook" ? "active" : ""}`}
          onClick={() => handleTabClick("facebook")}
        >
          Facebook Ads
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {portfolio
          .filter((item) => activeTab === "all" || item.category === activeTab)
          .map((item) => (
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              key={item._id}
              onClick={() => handleClick(item)}
              className="portfolio-item border-2 border-purple-500 p-2 rounded-md relative cursor-pointer"
            >
              <img
                className="m-auto"
                width="400px"
                height="300px"
                src={item.image}
                alt=""
              />
              <div className="overlay">
                <div className="overlay-content">
                  <p>{item.details}</p>
                  <BsFillEyeFill className="text-5xl text-orange-500" />
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Modal */}
      {/* <Modal></Modal> */}
      {modalOpen && (
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
          open
        >
          {itemDetails && (
            <div className="modal-box">
              <h3 className="font-serif text-3xl text-orange-500">
                {itemDetails.title}
              </h3>
              <img
                className="my-4"
                src={itemDetails.image}
                alt={itemDetails.image}
                width="100%"
                height="100%"
              />
              <p className="text-left text-lg text-purple-500">
                {itemDetails.details}
              </p>
              <div className="modal-action">
                <button
                  className="px-2 py-1 bg-purple-500 text-white rounded-md text-lg font-serif"
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </dialog>
      )}
    </div>
  );
};

export default Tab;
