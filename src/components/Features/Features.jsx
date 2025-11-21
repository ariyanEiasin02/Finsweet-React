import React from "react";
import { HiUserGroup } from "react-icons/hi2";
import { FaCheckCircle } from "react-icons/fa";
import { FaPenRuler } from "react-icons/fa6";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { MdTimer, MdEditDocument } from "react-icons/md";

const Features = () => {
  const features = [
    {
      icon: <HiUserGroup />,
      title: "Uses Client First",
      desc: "I follow the Client-First class naming system to ensure a clean and scalable structure.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Two Free Revisions",
      desc: "Every project includes revision rounds to refine your UI until it’s perfect.",
    },
    {
      icon: <FaPenRuler />,
      title: "Template Customization",
      desc: "I customize templates to match brand identity and provide a unique user experience.",
    },
    {
      icon: <TbMessageCircleQuestion />,
      title: "24/7 Support",
      desc: "I am available anytime for project discussions, updates, or clarifications.",
    },
    {
      icon: <MdTimer />,
      title: "Quick Delivery",
      desc: "I maintain fast turnaround times while ensuring high quality standards.",
    },
    {
      icon: <MdEditDocument />,
      title: "Hands-On Approach",
      desc: "I work closely with clients in the design & revision process for the best outcome.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F4F6FC]">
      <div className="max-w-container mx-auto">

        {/* Section Heading */}
        <div className="">
          <h2 className="font-medium text-[#1C1E53] text-4xl">
            Features Design
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-6 mt-12">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer rounded-[12px] p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl text-[#3B5BFF] mb-3">
                {item.icon}
              </div>
              <h4 className="text-xl font-semibold text-[#1C1E53]">{item.title}</h4>
              <p className="mt-3 text-[#6B7280] leading-relaxed text-sm font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
