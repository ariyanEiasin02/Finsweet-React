import React, { useState } from 'react'
import website from '../../assets/website.png'
import { FaLongArrowAltRight, FaCheckCircle } from 'react-icons/fa'

const Websites = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        figmaUrl: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (!formData.name || !formData.email) {
            alert('⚠️ Please fill in all required fields!')
            return
        }

        // Show success alert
        alert(`✅ Thank you, ${formData.name}! Your inquiry has been submitted successfully. We'll get back to you soon at ${formData.email}`)
        
        // Reset form
        setFormData({
            name: '',
            email: '',
            figmaUrl: ''
        })
    }

    return (
        <div>
            <section className="py-12 md:py-0">
                <div className="max-w-container mx-auto">
                    <div className="md:flex">
                        {/* Left Side - Hero Section */}
                        <div className="md:w-1/2">
                            <div className="relative h-[500px] md:h-[700px] overflow-hidden">
                                <img 
                                    className='w-full h-full object-cover' 
                                    src={website} 
                                    alt="Building stellar websites" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-[#1C1E53]/80 via-[#1C1E53]/70 to-[#1C1E53]/60">
                                    <div className="flex flex-col justify-center h-full px-8 md:px-16">
                                        <div className="max-w-xl">
                                            <div className="inline-block px-4 py-2 bg-[#FCD980] text-[#1C1E53] text-sm font-semibold rounded-full mb-6">
                                                ✨ PREMIUM SERVICE
                                            </div>
                                            <h2 className="font-poppins font-semibold text-white text-4xl leading-[48px] mb-6">
                                                Building Stellar
                                                Websites for
                                                Early Startups
                                            </h2>
                                            <p className="font-poppins text-gray-200 text-base md:text-lg leading-relaxed mb-8">
                                                Transform your vision into reality with our cutting-edge web solutions. 
                                                We specialize in creating stunning, high-performance websites that drive growth.
                                            </p>
                                            <div className="flex items-center gap-4">
                                                <FaCheckCircle className="text-[#FCD980] text-xl flex-shrink-0" />
                                                <p className="text-white font-poppins">Fast turnaround & modern design</p>
                                            </div>
                                            <div className="flex items-center gap-4 mt-3">
                                                <FaCheckCircle className="text-[#FCD980] text-xl flex-shrink-0" />
                                                <p className="text-white font-poppins">Responsive & SEO optimized</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="md:w-1/2 bg-[#1C1E53]">
                            <div className="h-full flex flex-col justify-center py-12 md:py-16 px-8 md:px-16">
                                <div className="max-w-lg mx-auto w-full">
                                    <h3 className="font-poppins font-bold text-white text-3xl md:text-4xl mb-4">
                                        Send Inquiry
                                    </h3>
                                    <p className="font-poppins text-gray-300 text-base mb-8">
                                        Fill out the form below and we'll get back to you within 24 hours.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        {/* Name Input */}
                                        <div>
                                            <label className="block text-white text-sm font-poppins mb-2">
                                                Your Name <span className="text-[#FCD980]">*</span>
                                            </label>
                                            <input 
                                                className="outline-none font-poppins text-white border-2 border-gray-600 rounded-xl bg-transparent font-light text-base p-4 w-full focus:border-[#FCD980] transition-all duration-300 placeholder:text-gray-500" 
                                                type="text" 
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>

                                        {/* Email Input */}
                                        <div>
                                            <label className="block text-white text-sm font-poppins mb-2">
                                                Email Address <span className="text-[#FCD980]">*</span>
                                            </label>
                                            <input 
                                                className="outline-none font-poppins text-white border-2 border-gray-600 rounded-xl bg-transparent font-light text-base p-4 w-full focus:border-[#FCD980] transition-all duration-300 placeholder:text-gray-500" 
                                                type="email" 
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                required
                                            />
                                        </div>

                                        {/* Figma URL Input */}
                                        <div>
                                            <label className="block text-white text-sm font-poppins mb-2">
                                                Figma Design URL (Optional)
                                            </label>
                                            <input 
                                                className="outline-none font-poppins text-white border-2 border-gray-600 rounded-xl bg-transparent font-light text-base p-4 w-full focus:border-[#FCD980] transition-all duration-300 placeholder:text-gray-500" 
                                                type="url" 
                                                name="figmaUrl"
                                                value={formData.figmaUrl}
                                                onChange={handleChange}
                                                placeholder="https://figma.com/your-design"
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <button 
                                            type="submit"
                                            className="w-full bg-[#FCD980] hover:bg-[#ffd700] py-4 px-8 rounded-full text-[#1C1E53] text-base font-poppins font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                                        >
                                            Send Inquiry
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Websites 