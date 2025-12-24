"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { MdEmail, MdLock } from "react-icons/md";
import SocialButtons from "./SocialButtons";

const LoginForm = () => {
  const params = useSearchParams();
  const router = useRouter();
  const callback = params.get("callbackUrl") || "/";
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10 px-4">
      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="flex items-center gap-3 bg-base-100 px-6 py-4 rounded-xl shadow-lg">
            <AiOutlineLoading size={32} className="animate-spin text-primary" />
            <h2 className="text-lg font-semibold">Processing Login...</h2>
          </div>
        </div>
      )}

      {/* Login Card */}
      <div className="w-full max-w-md rounded-2xl bg-base-100/80 backdrop-blur-xl shadow-2xl border border-base-300">
        <div className="p-8 space-y-6 text-center">
          {/* Header */}
          <div className="text-center space-y-1">
            <h2 className="text-3xl font-bold">Welcome Back</h2>
            <p className="text-sm text-gray-500">
              Login to continue to your account
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Email */}
            <div className="relative">
              <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="input input-bordered w-full pl-10 focus:outline-none focus:border-primary"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <MdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full pl-10 focus:outline-none focus:border-primary"
                required
              />
            </div>

            {/* Submit */}
            <button
              disabled={loading}
              type="submit"
              className="btn btn-primary w-full text-base tracking-wide hover:scale-[1.01] transition-transform"
            >
              Login
            </button>
          </form>
          <div className="divider">or</div>
          <SocialButtons></SocialButtons>

          {/* Footer */}
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              href={`/register?callbackUrl=${callback}`}
              className="font-medium text-primary hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
