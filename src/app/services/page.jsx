import React from "react";
import ServiceCard from "@/Components/cards/ServiceCard";
// import services from "@/data/services";
import { getServices } from "@/actions/server/service";

const page = async () => {
  const services = (await getServices()) || [];
  //   if (!services || services.length === 0) {
  //     return <p className="text-center text-gray-500">No services available</p>;
  //   }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
      {services.map((service) => (
        <ServiceCard key={service._id} service={service}></ServiceCard>
      ))}
    </div>
  );
};

export default page;
