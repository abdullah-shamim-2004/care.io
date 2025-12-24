"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import SocialButtons from "./SocialButtons";

const RegisterForm = () => {
  const router = useRouter();
  const params = useSearchParams();
  const callback = params.get("callbackUrl") || "/booking";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("Register Data:", data);

      // 🔹 backend api call here
      // await fetch("/api/register", {...})

    //   router.push(callback); // redirect to booking
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-2xl p-8 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold">Create Account</h2>
          <p className="text-sm text-gray-500 mt-1">Register to continue</p>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* NID */}
          <div>
            <input
              placeholder="NID Number"
              className="input input-bordered w-full"
              {...register("nid", {
                required: "NID is required",
              })}
            />
            {errors.nid && (
              <p className="text-red-500 text-sm mt-1">{errors.nid.message}</p>
            )}
          </div>

          {/* Name */}
          <div>
            <input
              placeholder="Full Name"
              className="input input-bordered w-full"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Contact */}
          <div>
            <input
              placeholder="Contact Number"
              className="input input-bordered w-full"
              {...register("contact", {
                required: "Contact number is required",
              })}
            />
            {errors.contact && (
              <p className="text-red-500 text-sm mt-1">
                {errors.contact.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z]).*$/,
                  message:
                    "Password must contain 1 uppercase & 1 lowercase letter",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Info */}
          <p className="text-xs text-gray-500">
            Password must be 6+ characters, include 1 uppercase & 1 lowercase.
          </p>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary w-full"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>{" "}
        <div className="divider">or</div>
        <SocialButtons></SocialButtons>
        {/* Footer */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
