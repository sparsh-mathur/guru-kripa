import React from "react";

const AboutUsSection = () => {

    return (
        <section className="bg-slate-100 w-full p-8 flex flex-col gap-8" id="management">
            <h1 className="text-4xl text-black font-bold text-center">
                OUR <span className="text-sky-800">MANAGEMENT</span>
            </h1>

            <div className="flex gap-8 items-center justify-center ">
                {[
                    { imageUrl: "/assets/images/mrp_2.jpeg", name: "Ramesh Chandra Srivastava", role: "Managing Director" },
                    { imageUrl: "/assets/images/mrp.jpeg", name: "Maharana Pratap", role: "Manager" },
                ].map(({ imageUrl, name, role }, index) => (
                    <div
                        key={index}
                        className="bg-gray-200 rounded-2xl px-3 py-8 w-80 h-full flex flex-col items-center shadow-md gap-8"
                    >
                        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 ">
                            <img
                                src={imageUrl}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-gray-900 font-bold text-xl tracking-wider mb-2 text-center">
                            {name}
                        </h2>
                        <div className="bg-red-500 px-4 py-1 rounded-md">
                            <span className="text-white font-medium text-sm">{role}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutUsSection;