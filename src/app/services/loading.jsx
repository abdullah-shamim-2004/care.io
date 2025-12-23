import React from "react";
import ServiceSkeleton from "@/Components/skeleton/ServiceSkeleton";
const loading = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      {[...Array(20)].map((_, index) => (
        <ServiceSkeleton key={index}></ServiceSkeleton>
      ))}
    </div>
  );
};

export default loading;
