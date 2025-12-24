"use client";

import React from "react";
import { bannerData } from "@/data/bannerData";
import Image from "next/image";

const Bannar = () => {
  return (
    <div className="carousel w-full h-[70vh] rounded-xl overflow-hidden shadow-xl">
      {bannerData.map((slide, index) => (
        <div
          key={slide.id}
          id={`slide${index + 1}`}
          className="carousel-item relative w-full"
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex items-center">
            <div className="max-w-2xl px-6 md:px-16 space-y-4 text-white">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                {slide.title}
              </h1>
              <p className="text-base md:text-lg text-gray-200">
                {slide.subtitle}
              </p>

              <div className="flex gap-3 pt-4">
                <a href="/services" className="btn btn-primary">
                  Explore Services
                </a>
                <a href="/booking" className="btn btn-outline text-white">
                  Book Now
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={`#slide${index === 0 ? bannerData.length : index}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide${index + 2 > bannerData.length ? 1 : index + 2}`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bannar;
