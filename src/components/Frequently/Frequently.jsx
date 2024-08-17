import React from 'react'
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
const Frequently = () => {
    return (
        <div>
            <section className='py-24'>
                <div className="max-w-container mx-auto">
                    <div className="md:flex justify-between px-4 md:px-0">
                        <div className="md:w-2/5">
                            <h2 className="font-poppins font-medium text-2xl md:text-4xl text-black">Frequently <br /> asked questions</h2>
                            <p className="font-poppins text-[#4797ff] font-semibold text-base mt-2">Contact us for more info</p>
                        </div>
                        <div className="md:w-3/5 mt-6 md:mt-0">
                            <Accordion >
                                <AccordionItem className='p-2 font-poppins text-[#000] font-semibold text-xl md:text-2xl border-b border-[#ccc]' header="01&nbsp; How much time does it take?">
                                    <p className="font-poppins text-[#000] font-light text-base mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </AccordionItem>
                                <AccordionItem className='p-2 font-poppins text-[#000] font-semibold  text-xl md:text-2xl border-b border-[#ccc]' header="02&nbsp; What is your class naming convention?">
                                    <p className="font-poppins text-[#000] font-light text-base mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </AccordionItem>
                                <AccordionItem className='p-2 font-poppins text-[#000] font-semibold  text-xl md:text-2xl border-b border-[#ccc]' header="03&nbsp;How do you communicate?">
                                    <p className="font-poppins text-[#000] font-light text-base mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </AccordionItem>
                                <AccordionItem className='p-2 font-poppins text-[#000] font-semibold  text-xl md:text-2xl border-b border-[#ccc]' header="04&nbsp;I have a bigger project. Can you handle it?">
                                    <p className="font-poppins text-[#000] font-light text-base mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </AccordionItem>
                                <AccordionItem className='p-2 font-poppins text-[#000] font-semibold  text-xl md:text-2xl border-b border-[#ccc]' header="05&nbsp; What is your class naming convention?">
                                    <p className="font-poppins text-[#000] font-light text-base mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </AccordionItem>

                               </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Frequently