import React from "react";
import ServiceCard from "@/Components/cards/ServiceCard";
// import services from "@/data/services";
import { getServices } from "@/actions/server/service";

const page = async () => {
  const services = (await getServices()) || [];
  if (!services || services.length === 0) {
    return <p className="text-center text-gray-500">No services available</p>;
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">
            Our <span className="text-primary">Care Services</span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Choose from trusted caregiving services designed to support your
            family with care, safety, and compassion.
          </p>

          {/* Decorative line */}
          <div className="flex justify-center mt-5">
            <span className="h-1 w-20 bg-primary rounded-full" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
