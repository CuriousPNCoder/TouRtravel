import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
const Heroslider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) {
    return <div>No images to display.</div>;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <Navbar />

      <div className="w-full h-56 sm:h-64 xl:h-96 2xl:h-96 object-cover">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}>
            <img
              src={imageUrl}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
              <h1 className="text-white text-4xl font-bold mb-3">
                Where luxury and exploration meet
              </h1>
              <p className="text-white">
                "Travel with us. We promise not to lose you!"
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute z-10 flex items-center justify-between w-full px-4">
        <button
          type="button"
          className="text-white text-2xl focus:outline-none"
          onClick={handlePrev}></button>
        <button
          type="button"
          className="text-white text-2xl focus:outline-none"
          onClick={handleNext}></button>
      </div>
    </div>
  );
};

export default Heroslider;
