import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaEnvelope, FaHeart } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content px-4 py-10 mt-20">
      <div className="bg-neutral text-neutral-content rounded-xl p-10 max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold mb-3">
            💙 Care<span className="text-primary">.io</span>
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Trusted caregiving services for babies, elderly, and sick family
            members. We connect you with verified caregivers you can rely on.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5 text-lg">
            <a href="https://www.facebook.com" className="hover:text-primary">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" className="hover:text-primary">
              <FaInstagram />
            </a>
            <a href="https://x.com" className="hover:text-primary">
              <FaXTwitter />
            </a>
            <a href="mailto:support@care.io" className="hover:text-primary">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col">
          <h6 className="footer-title text-primary">Services</h6>
          <Link href="/services" className="link link-hover">
            Baby Care
          </Link>
          <Link href="/services" className="link link-hover">
            Elderly Care
          </Link>
          <Link href="/services" className="link link-hover">
            Sick Patient Care
          </Link>
          <Link href="/services" className="link link-hover">
            Home Nursing
          </Link>
        </div>

        {/* Company */}
        <div className="flex flex-col">
          <h6 className="footer-title text-primary">Company</h6>
          <Link href="/about" className="link link-hover">
            About Us
          </Link>
          <Link href="/contact" className="link link-hover">
            Contact
          </Link>
          <Link href="/register" className="link link-hover">
            Become a Caregiver
          </Link>
          <Link href="/login" className="link link-hover">
            Login
          </Link>
        </div>

        {/* Legal */}
        <div className="flex flex-col">
          <h6 className="footer-title text-primary">Legal</h6>
          <Link href="/terms" className="link link-hover">
            Terms of Service
          </Link>
          <Link href="/privacy" className="link link-hover">
            Privacy Policy
          </Link>
          <Link href="/refund" className="link link-hover">
            Refund Policy
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-600 mt-8 pt-5 text-center text-sm text-gray-400 flex flex-col sm:flex-row justify-center items-center gap-2">
        <span>© {new Date().getFullYear()} Care.io. All rights reserved.</span>
        <span className="flex items-center gap-1">
          Made with <FaHeart className="text-red-500" /> for families
        </span>
      </div>
    </footer>
  );
};

export default Footer;
