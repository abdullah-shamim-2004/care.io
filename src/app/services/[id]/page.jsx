import { getSingleService } from "@/actions/server/service";
import BookingButton from "@/Components/buttons/BookingButton";
import Image from "next/image";

const ServiceDetailsPage = async ({ params }) => {
  const { id } = await params;
  const service = await getSingleService(id);

  if (!service) {
    return <p className="text-center text-red-500 mt-10">Service not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Service Image */}
      <div className="w-full h-64 relative rounded-lg overflow-hidden shadow-lg">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Service Info */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{service.name}</h1>
        <p className="text-gray-600">{service.shortDescription}</p>
        <p>{service.description}</p>

        {/* Features */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Features:</h2>
          <ul className="list-disc list-inside space-y-1">
            {service.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Pricing */}
        <div className="flex space-x-4">
          <p>
            <span className="font-semibold">Per Hour:</span> ৳
            {service.pricePerHour}
          </p>
          <p>
            <span className="font-semibold">Per Day:</span> ৳
            {service.pricePerDay}
          </p>
        </div>

        {/* Availability */}
        <p
          className={`font-semibold ${
            service.available ? "text-green-600" : "text-red-600"
          }`}
        >
          {service.available ? "Available" : "Not Available"}
        </p>
      </div>
      <div>
        <BookingButton service={service}></BookingButton>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
