import { serviceCategories } from "@/data/serviceCategories";
import Image from "next/image";
import Link from "next/link";

const ServicesOverview = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Care Services</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {serviceCategories.map((category) => (
          <div
            key={category.id}
            className=" rounded-lg shadow-md p-5 text-center hover:shadow-xl"
          >
            <Image
              width={100}
              height={80}
              src={category.image}
              alt={category.title}
              className="h-40 w-full object-cover rounded"
            />

            <h3 className="text-xl font-semibold mt-4">{category.title}</h3>

            <p className="text-gray-600 mt-2">{category.description}</p>

            <Link
              href={"/services"}
              //   href={`/services?category=${category.id}`}
              className="inline-block btn-primary mt-4 btn btn-outline  px-5 py-2 rounded"
            >
              View Services
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;
