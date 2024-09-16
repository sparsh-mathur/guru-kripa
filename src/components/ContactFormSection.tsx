import React from "react";

const QUESTIONS = [
  {
    title: "Can I help 24/7",
    subtitle:
      "Security guards work day and night to keep people and places safe. You can help them by being alert and reporting anything unusual or suspicious that you see.",
  },
  {
    title: "Can I refund payment",
    subtitle:
      "Security guards work day and night to keep people and places safe. You can help them by being alert and reporting anything unusual or suspicious that you see.",
  },
  {
    title: "How many year's exprience",
    subtitle:
      "Security guards work day and night to keep people and places safe. You can help them by being alert and reporting anything unusual or suspicious that you see.",
  },
];

const ContactFormSection = () => {
  return (
    <section className="bg-slate-100 w-full flex flex-col gap-8">
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
