"use client";

import { useState } from "react";
import { locations } from "@/data/location";
import { useSession } from "next-auth/react";

const BookingForm = ({ service }) => {
  const { data: session } = useSession();
    // console.log(session);

  const [durationType, setDurationType] = useState("hour");
  const [duration, setDuration] = useState(1);

  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");

  const selectedDivision = locations.find((d) => d.division === division);
  const selectedDistrict = selectedDivision?.districts.find(
    (d) => d.district === district
  );

  const price =
    durationType === "hour"
      ? service.pricePerHour * duration
      : service.pricePerDay * duration;
  // handle submit
  const handleSubmit = async () => {
    const bookingInfo = {
      serviceId: service._id,
      serviceName: service.name,
      userEmail: session.user.email,
      durationType,
      duration,
      location: {
        division,
        district,
        area,
        address,
      },
      totalPrice: price,
    };
    console.log(bookingInfo);
  };
  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-6">
      {/* Duration */}
      <div>
        <label className="block font-medium mb-1">Duration</label>
        <div className="flex gap-3">
          <select
            value={durationType}
            onChange={(e) => setDurationType(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="hour">Hour</option>
            <option value="day">Day</option>
          </select>

          <input
            type="number"
            min="1"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="border p-2 rounded w-24"
          />
        </div>
      </div>

      {/* Division */}
      <div>
        <label className="block font-medium mb-1">Division</label>
        <select
          value={division}
          onChange={(e) => {
            setDivision(e.target.value);
            setDistrict("");
            setArea("");
          }}
          className="border p-2 rounded w-full"
        >
          <option value="">Select Division</option>
          {locations.map((d) => (
            <option key={d.division} value={d.division}>
              {d.division}
            </option>
          ))}
        </select>
      </div>

      {/* District */}
      {selectedDivision && (
        <div>
          <label className="block font-medium mb-1">District</label>
          <select
            value={district}
            onChange={(e) => {
              setDistrict(e.target.value);
              setArea("");
            }}
            className="border p-2 rounded w-full"
          >
            <option value="">Select District</option>
            {selectedDivision.districts.map((d) => (
              <option key={d.district} value={d.district}>
                {d.district}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Area */}
      {selectedDistrict && (
        <div>
          <label className="block font-medium mb-1">Area</label>
          <select
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="">Select Area</option>
            {selectedDistrict.areas.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Address */}
      <div>
        <label className="block font-medium mb-1">Full Address</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="House, Road, Details..."
        />
      </div>

      {/* Total Cost */}
      <div className="text-lg font-semibold">
        Total Cost: <span className="text-primary">৳ {price}</span>
      </div>

      {/* Submit */}
      <button onClick={handleSubmit} className="btn btn-primary w-full">
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingForm;
