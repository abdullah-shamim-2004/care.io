"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const BookingButton = ({ service }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleBooking = () => {
    if (status === "authenticated") {
      // Redirect to booking page for this service
      router.push(`/booking/${service._id}`);
    } else {
      // Redirect to login page with callback
      router.push(`/login?callbackUrl=/booking/${service.id}`);
    }
  };

  return (
    <div>
      <button
        onClick={handleBooking}
        disabled={isLoading}
        className={`btn btn-primary btn-outline ${isLoading ? "loading" : ""}`}
      >
        {isLoading ? "Processing..." : "Book Service"}
      </button>
    </div>
  );
};

export default BookingButton;
