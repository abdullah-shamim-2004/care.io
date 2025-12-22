import Image from "next/image";
import React from "react";

const Bannar = () => {
  return (
    <div className="h-[70vh] bg-base-100 shadow-sm flex justify-center items-center">
      <figure className="flex-1">
        <Image
          src="https://i.ibb.co.com/rGnX9ZSH/Lucid-Origin-A-modern-professional-website-hero-banner-for-a-s-3.jpg"
          alt="Movie"
          width={500}
          height={500}
        />
      </figure>
      <div className="flex-1 space-y-1.5">
        <h2 className="text-4xl font-bold">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <button className="btn btn-primary">Service</button>
      </div>
    </div>
  );
};

export default Bannar;
