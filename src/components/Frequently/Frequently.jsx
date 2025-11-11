import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Frequently = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "What services do you offer?",
      answer:
        "I specialize in front-end development using React, Tailwind CSS, JavaScript, and UI/UX focused responsive design.",
    },
    {
      question: "Do you provide responsive designs?",
      answer:
        "Yes, all websites and applications I design are fully responsive and optimized for all screen sizes.",
    },
    {
      question: "Can you help with website optimization?",
      answer:
        "Absolutely. I work on improving loading speed, reducing bundle size, and refining UI performance.",
    },
    {
      question: "How can I contact you?",
      answer:
        "You can contact me via email or through the contact form available on my portfolio website.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="md:flex md:space-x-6">
          
          {/* Left section */}
          <div className="md:w-1/3 text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-semibold text-[#1C1E53] leading-tight">
              Frequently Ask Questions
            </h2>
            <p className="text-[#3B5BFF] font-medium mt-3">Contact us for more info</p>
          </div>

          {/* Right section */}
          <div className="md:w-2/3 mt-10 md:mt-0 space-y-5">

            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-[#E4E6EE] rounded-[8px] p-4 cursor-pointer transition-all duration-300 hover:shadow-md"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-[16px] md:text-[18px] font-semibold text-[#1C1E53]">
                    {item.question}
                  </h3>

                  <FaChevronDown
                    className={`text-gray-600 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p classname="text-[#6B7280] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Frequently;
