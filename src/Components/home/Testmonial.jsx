"use client";

import React from "react";
import { FaStar, FaUsers, FaUserNurse, FaSmile } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahima Akter",
    role: "Mother",
    feedback:
      "Care.io helped me find a reliable babysitter within hours. I finally feel safe leaving my child at home.",
    rating: 5,
  },
  {
    name: "Abdul Karim",
    role: "Son of Elderly Patient",
    feedback:
      "Professional caregivers and excellent service. My father is receiving proper care every day.",
    rating: 5,
  },
  {
    name: "Nusrat Jahan",
    role: "Working Professional",
    feedback:
      "Very trustworthy platform. Booking was simple and the caregiver was well trained.",
    rating: 4,
  },
];

const TestimonialsMetrics = () => {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">
            Trusted by <span className="text-primary">Thousands</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Families across the country rely on Care.io for safe, reliable, and
            professional caregiving services.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="stat bg-base-100 shadow rounded-xl text-center">
            <div className="stat-figure text-primary text-3xl mx-auto">
              <FaUsers />
            </div>
            <div className="stat-title">Happy Families</div>
            <div className="stat-value text-primary">10k+</div>
          </div>

          <div className="stat bg-base-100 shadow rounded-xl text-center">
            <div className="stat-figure text-primary text-3xl mx-auto">
              <FaUserNurse />
            </div>
            <div className="stat-title">Verified Caregivers</div>
            <div className="stat-value text-primary">2k+</div>
          </div>

          <div className="stat bg-base-100 shadow rounded-xl text-center">
            <div className="stat-figure text-primary text-3xl mx-auto">
              <FaStar />
            </div>
            <div className="stat-title">Average Rating</div>
            <div className="stat-value text-primary">4.8</div>
          </div>

          <div className="stat bg-base-100 shadow rounded-xl text-center">
            <div className="stat-figure text-primary text-3xl mx-auto">
              <FaSmile />
            </div>
            <div className="stat-title">Successful Bookings</div>
            <div className="stat-value text-primary">15k+</div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card bg-base-100 shadow-md hover:shadow-xl transition"
            >
              <div className="card-body">
                <div className="flex gap-1 mb-3 text-yellow-400">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <FaStar key={idx} />
                  ))}
                </div>

                <p className="text-gray-600 italic">“{t.feedback}”</p>

                <div className="mt-4">
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMetrics;
