import React from "react";
import image1 from "../img/clothing/1.png";
import image2 from "../img/clothing/2.png";
import image3 from "../img/clothing/3.png";
import image4 from "../img/clothing/4.png";
import { Link } from "react-router-dom";

const Clothing = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-14">
          <div className="flex flex-col lg:items-start">
            <h1 className="h1">
              Clothing <br /> Collection
            </h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              atque rem consequatur perferendis doloribus iste illo dignissimos
              hic facere.
            </p>
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Contact Us
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:gap-2">
            <div className="max-w-[250px] lg:max-w[340px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={image1}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={image2}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={image3}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={image4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clothing;
