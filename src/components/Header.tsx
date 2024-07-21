import React from "react";

export const Header = () => {
  return (
    <div className="py-4 bg-white drop-shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* <img src="" alt="logo" /> */}
        <h1 className="text-2xl font-bold">GKRCSS</h1>
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
