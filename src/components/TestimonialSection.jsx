"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Michael D. Korolenko",
    title: "Writer • Producer • Director",
    image:
      "https://assets.mycast.io/actor_images/actor-alex-watson-86607_large.jpg",
    text: `I am incredibly pleased with NolanAI for scriptwriting—so much so that I’m recommending it to my college scriptwriting class.

NolanAI offers script editing capabilities, catching spelling and grammar mistakes like most good scriptwriting software. But what truly sets it apart is its Script Coverage. The feedback is incredibly in-depth and almost unbelievable that it’s done by AI...`,
  },
  {
    name: "Boubkar Benzabat",
    title: "Director of Photography • Editor • Producer • Director",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/keanu-reeves-9454211-1-402.jpg",
    text: `NOLANAI is the best value-for-money AI tool you can find for preparing and developing your movie. It’s exciting to be part of a pioneering adventure that will shape the future of the film industry...`,
  },
  {
    name: "Jane Doe",
    title: "Screenwriter • Filmmaker",
    image:
      "https://cdn.shopify.com/s/files/1/0523/8521/8751/files/c5c11ebc-954e-4d9c-abf9-d4f47d88fea4.jpg",
    text: `NolanAI helped me organize my screenplay like never before. The script formatting tools and the AI suggestions for characters made a real difference in my workflow.`,
  },
];

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2 right-4 z-10`}
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2 left-4 z-10`}
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );
}

export default function TestimonialSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    adaptiveHeight: true,
  };

  return (
    <section className="bg-[#0B0E14] text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-16">
        What our customers say
      </h2>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((item, idx) => (
            <div key={idx} className="px-4">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 bg-[#11141b] rounded-2xl shadow-lg p-8">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-36 h-36 md:w-48 md:h-48 object-cover rounded-full border-4 border-white shadow-md"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold">{item.name}</h3>
                  <p className="text-gray-400 mb-4">{item.title}</p>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="text-center mt-14">
          <button className="bg-[#3B82F6] hover:bg-[#2563eb] text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-200">
            All Testimonials →
          </button>
        </div>
      </div>
    </section>
  );
}
