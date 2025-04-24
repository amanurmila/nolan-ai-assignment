import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#0B0E14] pb-7">
      <div className="flex items-center justify-between w-11/12 mx-auto">
        <div>
          <h1 className="text-3xl font-bold">Nolan AI</h1>
        </div>
        <div className="text-center">
          <div>© Nolan AI, INC {new Date().getFullYear()}</div>
          <div className="text-sm">
            Testimonials | Privacy Policy | Terms of Service | Referral Program
            | Releases | FAQ
          </div>
        </div>
        <div className="flex justify-between gap-5 items-center">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
}
