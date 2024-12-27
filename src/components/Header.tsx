import React from "react";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="bg-white drop-shadow-md">
      <div className="bg-sky-800 w-full h-10 flex items-center">
        <div className="container m-auto w-full flex justify-end">
          <p className="text-white text-sm">{`Sales, Job/भर्ती :+91-7982606235, +91-9958226437`}</p>
        </div>
      </div>
      <div className="py-4 container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/icons/logo.jpg"
            height={50}
            width={50}
            alt="Your Name"
          />
          <h1 className="text-2xl font-bold">
            Guru Kripa R.C. Security Services
          </h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/home" className="">
                Home
              </a>
            </li>
            <li>
              <a href="/about-us" className="">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
