import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    role: "Product Manager",
    title: "Mark Wilson",
    description:
      "Discover a seamless way to book your next appointment with trusted professionals. Fast, reliable, and effortless.",
    image: "/src/assets/ban1.jpg",
  },
  {
    role: "Sales Manager",
    title: "Kathrine Wilson",
    description:
      "Our platform connects you instantly with verified experts, so you can focus on what really matters.",
    image: "/src/assets/ban2.jpg",
  },
  {
    role: "Supply Chain Manager",
    title: "Jack Elson",
    description:
      "Explore thousands of listings and find the service that fits your needs perfectly.",
    image: "/src/assets/ban3.jpg",
  },
];

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <div className="w-full flex justify-center items-center py-12 bg-gray-50">
      <div className="w-full max-w-6xl">
        <Slider {...settings}>
          {data.map((d, i) => (
            <div key={i}>
              <div className="flex flex-row items-center justify-between bg-white p-10 gap-10 rounded-2xl shadow-md">
                {/* Left: Image */}
                <div className="w-1/2 flex justify-center">
                  <img
                    src={d.image}
                    alt={d.title}
                    className="w-[350px] h-[350px] object-cover rounded-xl shadow-md"
                  />
                </div>

                {/* Right: Details */}
                <div className="w-1/2 text-left space-y-4">
                  <h2 className="text-3xl font-bold text-gray-800">{d.title}</h2>
                  <h3 className="text-xl font-semibold text-orange-600">{d.role}</h3>
                  <p className="text-gray-600 leading-relaxed">{d.description}</p>
                  <button className="bg-black text-white text-sm px-6 py-2 rounded-lg hover:bg-orange-600 transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
