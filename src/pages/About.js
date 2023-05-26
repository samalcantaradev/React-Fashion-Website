import React from "react";
import WomanImg from "../img/about/woman.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-14">
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={WomanImg} alt="" className="lg:pl-14" />
          </div>
          <div className="flex-1 pt-36 pb-12 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">About us</h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              atque rem consequatur perferendis doloribus iste illo dignissimos
              hic facere, vitae quas qui illum quae praesentium, nam, sint
              aliquam sed dolores.
            </p>
            <Link to={"/clothing"} className="btn">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
