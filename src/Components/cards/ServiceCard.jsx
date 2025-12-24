import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  const { _id, name, category, shortDescription, pricePerHour, image } =
    service;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          height={200}
          width={200}
          src={image}
          alt={name}
          className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>

        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {shortDescription}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-lg font-bold text-blue-600">
            ৳ {pricePerHour} / hour
          </p>

          <Link
            href={`/services/${_id}`}
            className="text-sm font-medium text-white bg-primary px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
