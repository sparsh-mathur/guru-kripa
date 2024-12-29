import React from "react";
// redeploy
const AboutUsSection = () => {

    return (
        <section className="min-h-screen bg-[#005580] p-8" id="aboutus">
            {/* About Us Title */}
            <div className="text-center">
                <h1 className="text-white text-7xl font-bold">About Us</h1>
            </div>
            <div className="min-h-screen bg-[#005580] p-8">
                <div className="container mx-auto">
                    {/* Three Column Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {/* Mission Section */}
                        <div className="bg-gray-900 text-white p-8 rounded-lg">
                            <h2 className="text-4xl font-bold mb-6">Mission</h2>
                            <ul className="space-y-4">
                                <li>• Empowering safety and trust with proactive security solutions.</li>
                                <li>• Providing unparalleled protection using cutting-edge technology.</li>
                                <li>• Utilizing expert personnel and personalized strategies.</li>
                                <li>• Safeguarding lives, assets, and peace of mind for clients.</li>
                                <li>• Committed to innovation, integrity, and unwavering dedication.</li>
                            </ul>
                        </div>

                        {/* Vision Section */}
                        <div className="bg-white p-8 rounded-lg">
                            <h2 className="text-4xl font-bold mb-6">Vision</h2>
                            <ul className="space-y-4">
                                <li>• Securing tomorrow with advanced safety measures.</li>
                                <li>• Redefining safety and protection standards.</li>
                                <li>• Shielding individuals, assets, and endeavors with unwavering security.</li>
                                <li>• Leveraging innovation, expertise, and excellence.</li>
                                <li>• Building trust by safeguarding what matters most to clients.</li>
                                <li>• Setting new benchmarks in security services.</li>
                                <li>• Adapting and evolving to anticipate and mitigate risks.</li>
                                <li>• Ensuring peace of mind in a constantly changing world.</li>
                            </ul>
                        </div>

                        {/* Our Story Section */}
                        <div className="bg-white p-8 rounded-lg">
                            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                            <div className="space-y-4">
                                <p>
                                    Welcome to Guru Kripa RC Security Services. Established in 2013, our company has experienced impressive growth, thanks to our commitment to progress and excellence. This dedication has helped us become one of the leading security guard companies in Delhi NCR and UP.
                                </p>
                                <p>
                                    Guru Kripa RC Security was founded in Noida, Delhi NCR, with a strong focus on providing top-tier security solutions. We take pride in offering a comprehensive range of services tailored to meet the diverse needs of our clients.
                                </p>
                                <p>
                                    Being a leader in the Delhi NCR region is a significant achievement. This success is a reflection of the hard work and dedication of the entire GKRCSS team. We are excited to continue contributing to the growth and success of the company.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Image Section */}
                <div className="flex gap-8 bg-[#005580] items-center justify-center ">
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
            </div>
        </section>
    );
};
export default AboutUsSection;