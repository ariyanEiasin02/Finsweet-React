import React from 'react'
import readabout from '../../assets/readabout.png'
const ReadAbout = () => {
    return (
        <div>
            <section>
                <div className="max-w-container mx-auto">
                    <div className="px-36">
                        <div className="mt-12">
                            <h3 className='mt-2 font-poppins font-semibold text-[#282938] text-3xl'>About the project</h3>
                            <p className='mt-4 font-poppins font-light text-[#282938] text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <li className='ml-4 mt-4 font-poppins font-light text-[#282938] text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li className='ml-4 mt-2 font-poppins font-light text-[#282938] text-sm md:text-base'>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
                            <li className='ml-4 mt-2 font-poppins font-light text-[#282938] text-sm md:text-base'>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                            <li className='ml-4 mt-2 font-poppins font-light text-[#282938] text-sm md:text-base'>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
                        </div>
                        <div className="mt-8">
                            <img src={readabout} alt="" />
                        </div>
                        <div className="mt-12">
                            <h3 className='mt-2 font-poppins font-semibold text-[#282938] text-3xl'>How we do it</h3>
                            <p className='mt-4 font-poppins font-light text-[#282938] text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <li className='ml-4 mt-4 font-poppins font-light text-[#282938] text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li className='ml-4 mt-2 font-poppins font-light text-[#282938] text-sm md:text-base'>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
                            <li className='ml-4 mt-2 font-poppins font-light text-[#282938] text-sm md:text-base'>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                            <li className='ml-4 mt-2 font-poppins font-light text-[#282938] text-sm md:text-base'>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
                        </div>
                        
                        <div className="mt-12 border-t border-b py-4">
                            <ul className='flex justify-between'>
                                <li>
                                    <a className='text-[#282938] text-base font-poppins font-medium hover:text-[#2405F2]' href="#">Keywords</a>
                                </li>
                                <li>
                                    <a  className='text-[#282938] text-base font-poppins font-medium hover:text-[#2405F2]' href="#">Design</a>
                                </li>
                                <li>
                                    <a  className='text-[#282938] text-base font-poppins font-medium hover:text-[#2405F2]' href="#">UI/UX</a>
                                </li>
                                <li>
                                    <a  className='text-[#282938] text-base font-poppins font-medium hover:text-[#2405F2]' href="#">Wireframing</a>
                                </li>
                                <li>
                                    <a  className='text-[#282938] text-base font-poppins font-medium hover:text-[#2405F2]' href="#">Branding</a>
                                </li>
                                <li>
                                    <a  className='text-[#282938] text-base font-poppins font-medium hover:text-[#2405F2]' href="#">Development</a>
                                </li>
                                <li>
                                    <a  className='text-[#282938] text-base font-poppins font-medium hover:text-[#2405F2]' href="#">webflow</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReadAbout