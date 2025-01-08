import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [show, setShow] = useState(false)
    const handleNavbar = () => {
        setShow(!show)
    }
    return (
        <div>
            <nav className='bg-navbar py-6 z-50 fixed w-full top-0 left-0'>
                <div className="max-w-container mx-auto">
                    <div className="flex items-center px-4 md:px-0 justify-between">
                        <div className="">
                            <Link to="/">
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <div className="">
                            <div onClick={handleNavbar} className="text-white md:hidden block">
                                {
                                    show ? <i><IoClose className='text-white text-2xl' /></i> : <i><CiMenuFries className='text-white text-2xl' /></i>
                                }
                            </div>
                            <ul className={`absolute md:static md:flex gap-x-10 duration-300 ${show ? 'top-[75px] w-full left-0 bg-white text-[#333] px-4 py-6' : 'top-16 w-full -left-40'}`}>
                                <li className='mt-2 md:mt-0'>
                                <Link className={`${show ? "text-[#333]" : "text-white"} text-base font-poppins font-medium hover:text-navbarhover`} to="/">Home</Link>
                                </li>
                                <li className='mt-2 md:mt-0'>
                                    <Link className={`${show ? "text-[#333]" : "text-white"} text-base font-poppins font-medium hover:text-navbarhover`} to="Home/About">About us</Link>
                                </li>
                                <li className='mt-2 md:mt-0'>
                                    <Link className={`${show ? "text-[#333]" : "text-white"} text-base font-poppins font-medium hover:text-navbarhover`} to="Home/Features">Features</Link>
                                </li>
                                <li className='mt-2 md:mt-0'>
                                    <Link className={`${show ? "text-[#333]" : "text-white"} text-base font-poppins font-medium hover:text-navbarhover`} to="Home/Pricing">Pricing</Link>
                                </li>
                                <li className='mt-2 md:mt-0'>
                                    <Link className={`${show ? "text-[#333]" : "text-white"} text-base font-poppins font-medium hover:text-navbarhover`} to="Home/Privacy">FAQ</Link>
                                </li>
                                <li className='mt-2 md:mt-0'>
                                    <Link className={`${show ? "text-[#333]" : "text-white"} text-base font-poppins font-medium hover:text-navbarhover`} to="Home/Blog">Blog</Link>
                                </li>
                                <li className='mt-6 md:mt-0'>
                                    <Link className={`${show ? "text-[#333]" : "text-white"} text-base font-poppins border-2 border-navbarhover py-2 px-8 rounded-full font-medium hover:bg-red-500 hover:border-red-500`} to="Home/contact">Contact us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar