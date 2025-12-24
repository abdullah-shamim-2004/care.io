import { getSingleService } from "@/actions/server/service";
import BookingForm from "@/Components/booking/BookingForm";
import Protected from "@/provider/Protected";

const BookingPage = async ({ params }) => {
  const { id } = await params;
  const service = await getSingleService(id);

  if (!service) {
    return <p className="text-center text-red-500 mt-10">Service not found</p>;
  }

  return (
    <Protected>
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">
          Book Service: {service.name}
        </h1>

        <BookingForm service={service} />
      </div>
    </Protected>
  );
};

export default BookingPage;
