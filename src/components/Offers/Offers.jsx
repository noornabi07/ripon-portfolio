import React from "react";
import Container from "../Shared/Container/Container";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { FaFacebook, FaDesktop } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";

const Offers = () => {
  return (
    <Container>
      <div id="services" className="mt-5 xl:mt-20">
        <h2 className="font-serif text-4xl pb-6">What We Are offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-10">
          <div className="shadow-md shadow-gray-600 p-4 rounded-sm cursor-pointer hover:scale-110 hover:duration-500">
            <div className="flex items-center gap-4">
              <div className="text-3xl text-orange-500">
                <BsFillBarChartLineFill />
              </div>
              <h4 className="text-3xl font-serif">SEO</h4>
            </div>
            <p className="text-left text-pretty mt-4 text-gray-600 text-md">
              SEO is an important part in today's online marketing world. In
              order to rank well on search engines, your website needs both
              on-page and off-page search engine optimization. My service will
              help your website get indexed properly as well as improve its
              online visibility.
            </p>
          </div>

          <div className="shadow-md shadow-gray-600 p-4 rounded-sm cursor-pointer hover:scale-110 hover:duration-500">
            <div className="flex items-center gap-4">
              <div className="text-3xl text-orange-500">
                <FaComputer />
              </div>
              <h4 className="text-3xl font-serif">Google Ads</h4>
            </div>
            <p className="text-left text-pretty mt-4 text-gray-600 text-md">
              Want To Take Your Business To The Next Level and Boost Revenue
              Through Successful Google Ads AdWords PPC Campaigns? Look no
              further than a Google Ads expert who can help you achieve the
              profitable results you're after.
            </p>
          </div>

          <div className="shadow-md shadow-gray-600 p-4 rounded-sm cursor-pointer hover:scale-110 hover:duration-500">
            <div className="flex items-center gap-4">
              <div className="text-3xl text-orange-500">
                <FaUsers />
              </div>
              <h4 className="text-3xl font-serif">Digital Marketing</h4>
            </div>
            <p className="text-left text-pretty mt-4 text-gray-600 text-md">
              Supercharge your online presence with our comprehensive digital
              marketing services. Our strategies are designed to increase
              visibility, drive traffic, and boost conversions, ensuring your
              brand reaches its full potential.
            </p>
          </div>

          <div className="shadow-md shadow-gray-600 p-4 rounded-sm cursor-pointer hover:scale-110 hover:duration-500">
            <div className="flex items-center gap-4">
              <div className="text-3xl text-orange-500">
                <FaFacebook />
              </div>
              <h4 className="text-3xl font-serif">Facebook Ads</h4>
            </div>
            <p className="text-left text-pretty mt-4 text-gray-600 text-md">
              Facebook Advertising Services helps businesses and individuals
              create, manage and optimize advertising campaigns on Facebook's
              platform These services are essential for reaching target
              audience, increasing brand awareness, driving website traffic and
              increasing sales.
            </p>
          </div>

          <div className="shadow-md shadow-gray-600 p-4 rounded-sm cursor-pointer hover:scale-110 hover:duration-500">
            <div className="flex items-center gap-4">
              <div className="text-3xl text-orange-500">
                <BsYoutube />
              </div>
              <h4 className="text-3xl font-serif">YouTube SEO</h4>
            </div>
            <p className="text-left text-pretty mt-4 text-gray-600 text-md">
              YouTube SEO is the process of optimizing your YouTube channel and
              videos to rank higher in YouTube’s search results. This can help
              you attract more views, subscribers, and engagement to your
              channel.
            </p>
          </div>

          <div className="shadow-md shadow-gray-600 p-4 rounded-sm cursor-pointer hover:scale-110 hover:duration-500">
            <div className="flex items-center gap-4">
              <div className="text-3xl text-orange-500">
                <FaDesktop/>
              </div>
              <h4 className="text-3xl font-serif">Graphic Design</h4>
            </div>
            <p className="text-left text-pretty mt-4">
              Explore the boundless world of graphic design with our expertly
              crafted services.
            </p>
          </div>

          <div className="shadow-md shadow-gray-600 p-4 rounded-sm cursor-pointer hover:scale-110 hover:duration-500">
            <div className="flex items-center gap-4">
              <div className="text-3xl text-orange-500">
                <IoMdAnalytics />
              </div>
              <h4 className="text-3xl font-serif">Website Traffic</h4>
            </div>
            <p className="text-left text-pretty mt-4 text-gray-600 text-md">
              Explore the boundless world of website traffic with our expertly
              crafted services. This can help you attract more views, and
              engagement to your website.
            </p>
          </div>

          <div className="shadow-md shadow-gray-600 p-4 rounded-sm cursor-pointer hover:scale-110 hover:duration-500">
            <div className="flex items-center gap-4">
              <div className="text-3xl text-orange-500">
                <CgWebsite />
              </div>
              <h4 className="text-3xl font-serif">Website Design</h4>
            </div>
            <p className="text-left text-pretty mt-4 text-gray-600 text-md">
              Elevate your online presence with our exceptional website design
              services. We craft visually stunning, user-friendly, and
              responsive websites that captivate your audience and drive
              engagement
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Offers;
