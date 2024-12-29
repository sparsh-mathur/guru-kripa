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
                alt="Logo"
                width={100}
                height={100}
                className="mb-4"
              />
              <p className="text-sm mb-4">
                Best Security Service Provider in Delhi, Noida, Gurgaon & All Across The Ncr.
                <br />
                Guru Kripa R.C. Security Services is PASARA Certified, established in 2013.
              </p>
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
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfACutfsszRjneYE5mJOkGabZ7NQSAPb7EIOtnGQJ-JrD7rfg/viewform?pli=1" className="hover:text-gray-300">
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
                  { name: "About Us", link: "/about-us" },
                  { name: "Contact Us", link: "https://docs.google.com/forms/d/e/1FAIpQLSfACutfsszRjneYE5mJOkGabZ7NQSAPb7EIOtnGQJ-JrD7rfg/viewform?pli=1" },
                  { name: "Brochure", link: "/assets/pdfs/Brochure.pdf" },
                  { name: "Privacy Policy", link: "/privacy-policy" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.link}
                      className="hover:text-gray-300"
                      target={item.name === "Contact Us" ? "_blank" : undefined} // Open Contact Us in a new tab
                      rel={item.name === "Contact Us" ? "noopener noreferrer" : undefined} // Add security attributes
                      download={item.name === "Brochure" ? "Brochure.pdf" : undefined} // Add download attribute
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>


            {/* Contact Us */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Contact us</h3>
              <p className="mb-2">
                Village Gijhore, Sector 53, main market near CNG pump, Noida, GB Nagar, Uttar Pradesh, 201301
              </p>
              <p className="mb-2">
                <a href="mailto:MaharanaPratap.gkrcss@gmail.com" className="text-white-500 hover:underline">
                  MaharanaPratap.gkrcss@gmail.com
                </a>
              </p>
              <p className="mb-2">
                <a href="tel:+917982606235" className="text-white-500 hover:underline">
                  +91-7982606235
                </a>
              </p>
              <p>
                <a href="tel:+919958226437" className="text-white-500 hover:underline">
                  +91-9958226437
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
