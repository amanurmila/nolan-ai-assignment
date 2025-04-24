"use client";

import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="bg-[#0B0E14] pb-7">
      <div className="flex flex-col md:flex-row items-center justify-between w-11/12 mx-auto gap-4 text-center md:text-left">
        <div>
          <h1 className="text-3xl font-bold">Nolan AI</h1>
        </div>
        <div>
          {year && <div>© Nolan AI, INC {year}</div>}
          <div className="text-sm">
            Testimonials | Privacy Policy | Terms of Service | Referral Program
            | Releases | FAQ
          </div>
        </div>
        <div className="flex justify-center md:justify-end gap-5 items-center text-xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
}
