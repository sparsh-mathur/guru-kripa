import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="bg-sky-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <Image
                src="/assets/icons/logo.jpg"
                alt="Proman Logo"
                width={100}
                height={100}
                className="mb-4"
              />
              <p className="text-sm mb-4">
                Best Security Service Provider in Delhi, Noida, Gurgaon & All
                Across The Ncr. Proman Securitech Pvt. Ltd. – (ISO 9001:2015
                Certified. Proman Securitech was established some 19 years ago .
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-white hover:text-gray-300">
                  <Facebook />
                </Link>
                <Link href="#" className="text-white hover:text-gray-300">
                  <Twitter />
                </Link>
                <Link href="#" className="text-white hover:text-gray-300">
                  <Instagram />
                </Link>
              </div>
            </div>

            {/* Service Links */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Service Links</h3>
              <ul className="space-y-2">
                {[
                  "Private Security Guards",
                  "Event Security",
                  "Bouncer Services",
                  "Facility Management",
                  "Personal Security Officer",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-gray-300">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Support Links</h3>
              <ul className="space-y-2">
                {[
                  "About Us",
                  "Blog",
                  "Contact Us",
                  "Brochures",
                  "Privacy Policy",
                  "Terms & Conditions",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-gray-300">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Contact us</h3>
              <p className="mb-2">
                305, 3rd Floor Ashok Bhawan 93, Nehru Place
              </p>
              <p className="mb-2">
                sales@promansecuritech.com, jobs@promansecuritech.com
              </p>
              <p className="mb-2">+91-7353031222</p>
              <p>+91-9999176075</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
