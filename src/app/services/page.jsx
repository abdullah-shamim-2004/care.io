import React from "react";
import services from "@/data/services.json";
import ServiceCard from "@/Components/cards/ServiceCard";

const page = () => {
  //   console.log(services);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service}></ServiceCard>
      ))}
    </div>
  );
};

export default page;
