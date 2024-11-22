import React from "react";

const QUESTIONS = [
  {
    title: "24*7 Availability",
    subtitle:
      "Security concerns can arise at any moment, and we understand the importance of immediate assistance. Our round-the-clock availability guarantees that you can reach us at any time, day or night, ensuring a swift and effective response to any security issues that may arise.",
  },
  {
    title: "PSARA License Registration",
    subtitle:
      "Guru Kripa R.C. Security Services is proud to be registered under the Private Security Agencies Regulation Act (PSARA). This certification signifies our compliance with legal standards, assuring clients of the legitimacy and reliability of our security services.",
  },
  {
    title: "How many year's exprience",
    subtitle:
      "With a decade of experience, GKRCSS has earned the trust of numerous clients. Our long-standing presence in the security industry attests to our reliability, professionalism, and the consistent delivery of high-quality security solutions.",
  },
];

const ContactFormSection = () => {
  return (
    <section className="bg-slate-100 w-full flex flex-col gap-8" id="contact">
      <div className="grid grid-rows-1 grid-cols-2">
        <div className="pl-32 pr-8 h-96 flex flex-col justify-around">
          {QUESTIONS.map((item, index) => (
            <div key={index} className="flex flex-row items-center gap-4">
              <div className="bg-[#fab90a] rounded-full p-3">
                <img
                  src="/assets/icons/question.png"
                  alt="question image"
                  height={50}
                  width={50}
                />
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-2xl">{item.title}</h2>
                <p className="text-xs">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pr-32 h-96 flex justify-center items-center">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfACutfsszRjneYE5mJOkGabZ7NQSAPb7EIOtnGQJ-JrD7rfg/viewform?pli=1">
            <button className="bg-sky-800 text-white px-4 py-2 rounded-md text-lg">
              Get A Quote
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
