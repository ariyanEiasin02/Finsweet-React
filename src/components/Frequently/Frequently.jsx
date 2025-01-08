import React, { useState } from 'react'
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
const Frequently = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqItems = [
        {
            question: "What services do you offer?",
            answer: "I specialize in front-end development using HTML, CSS, JavaScript, React, and modern CSS frameworks like Tailwind and Bootstrap."
        },
        {
            question: "Do you provide responsive designs?",
            answer: "Yes, I ensure all websites and applications are fully responsive and optimized for various screen sizes."
        },
        {
            question: "Can you help with website optimization?",
            answer: "Absolutely! I focus on performance optimization to deliver fast and efficient web solutions."
        },
        {
            question: "How can I contact you?",
            answer: "You can contact me via email or through the contact form available on my portfolio."
        }
    ];
    return (
        <div>
            <section className='md:py-20 py-12'>
                <div className="max-w-container mx-auto">
                    <div className="md:flex justify-between px-4 md:px-0">
                        <div className="md:w-2/5">
                            <h2 className="font-poppins font-medium text-2xl md:text-4xl text-black">Frequently <br /> asked questions</h2>
                            <p className="font-poppins text-[#4797ff] font-semibold text-base mt-2">Contact us for more info</p>
                        </div>
                        <div className="md:w-3/5 mt-6 md:mt-0">
                            <div className="space-y-6">
                                {faqItems.map((item, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                                        className="bg-[#F4F4F9] shadow-md rounded-lg py-4 px-5 cursor-pointer hover:shadow-lg transition-shadow"
                                    >
                                        <div className="flex justify-between items-center">
                                            <h3 className="font-poppins font-semibold text-[20px] text-gray-800">{item.question}</h3>
                                            {index === activeIndex ? (
                                                <FaChevronUp className="text-gray-600" />
                                            ) : (
                                                <FaChevronDown className="text-gray-600" />
                                            )}
                                        </div>
                                        {index === activeIndex && (
                                            <p className="font-poppins text-base font-normal mt-4 text-[#A9ACC6]">{item.answer}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Frequently