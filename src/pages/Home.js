import React from "react";
import WomanImg from "../img/home/woman.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col justify-center">
          <div className="w-full pt-36 pb-6 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute lg:top-[130px] flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">
              Discover <br />
              Your Style
            </h1>
            <p className="text-[15px] lg:text-[24px] font-primary mb-4 lg:mb-12 text-left">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Sed ullamcorper congue eros, <br /> eget tincidunt ipsum eleifend
              ut.
            </p>
            <Link to={"/contact"} className="btn mb-[30px]">
              CONTACT US
            </Link>
          </div>
          <div className="flex justify-end max-h-96 lg:max-h-max">
            <div className="relative lg:-right-40 overflow-hidden">
              <img src={WomanImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
