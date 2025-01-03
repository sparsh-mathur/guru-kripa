import { CardWithImage } from "@/components";
import { Carousel } from "@/components/Carousel";
import ContactFormSection from "@/components/ContactFormSection";
import { SERVICES } from "@/constants/services";
import { CLIENTS } from "@/constants/clients";
import React from "react";

const page = () => {
  return (
    <div className="relative flex flex-col gap-2">
      {/* carousel section */}
      <section>
        <div className="absolute top-[8%] left-[15%] z-40 bg-[#fff]/50 backdrop-blur-sm shadow-lg p-8 rounded-sm flex flex-col gap-8">
          <h1 className="text-4xl text-black font-bold text-center">
            Welcome to Guru Kripa R.C. Security Services Since 2013
          </h1>
          <p className="text-black text-left">
            PASARA Certified Security Service Agency
          </p>
          <div className="flex gap-4">
            {/* <a href="#aboutus">
            <button className="border-sky-800 border-4 text-amber-900 px-4 py-2 rounded-md text-lg">
              Learn More
            </button>
            </a> */}
            <a href="#contact">
              <button className="bg-sky-800 text-white px-4 py-2 rounded-md text-lg">
                Contact Us
              </button>
            </a>
          </div>
        </div>
        <Carousel />
      </section>

      {/* our services section */}
      <section className="container m-auto mt-8">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold text-center">
            OUR <span className="text-sky-800">SERVICES</span>
          </h1>
          <p className="text-center px-20">
            At Guru Kripa R.C. Security Services, we are committed to delivering
            security excellence that goes beyond the ordinary. With a team of
            highly trained and certified security professionals, we stand as
            your trusted partners in safeguarding your assets, property, and
            ensuring your peace of mind.
          </p>
          <div className="flex flex-wrap gap-4 my-4 justify-center">
            {SERVICES.map((service, index) => (
              <CardWithImage key={index} data={service} />
            ))}
          </div>
        </div>
      </section>

      {/* industries we have served */}
      <section className="bg-slate-100 w-full p-8 flex flex-col gap-8">
        <h1 className="text-4xl text-black font-bold text-center">
          INDUSTRIES
          <span className="text-sky-800"> WE HAVE SERVED</span>
        </h1>
        <div className="flex gap-4 overflow-scroll container m-auto no-scrollbar">
          {[...CLIENTS].map((industry, index) => (
            <div
              key={index}
              className="min-w-[240px] h-full border bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                className="rounded-t-lg w-full aspect-video"
                src={industry.img}
                alt={industry.title}
              />
              <div className="p-4 border text-center flex flex-col items-center py-10">
                <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                  {industry.title}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactFormSection />
    </div>
  );
};

export default page;
