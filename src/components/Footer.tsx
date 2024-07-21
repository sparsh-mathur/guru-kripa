import React from "react";

export const Footer = () => {
  return (
    <div className="h-48 py-4 bg-sky-800">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Footer</h1>

        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="">
                About
              </a>
            </li>
            <li>
              <a href="#" className="">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
