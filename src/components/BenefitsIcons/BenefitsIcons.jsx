import React from 'react'
import LogoNumber from '../../assets/Logo Number.png'
import LogoNumberOne from '../../assets/Logo 1.png'
import LogoNumberTwo from '../../assets/Logo 2.png'
import LogoNumberThree from '../../assets/Logo 3.png'
import LogoNumberFour from '../../assets/Logo 4.png'
import LogoNumberFive from '../../assets/Logo 5.png'
const BenefitsIcons = () => {
  return (
    <div>
        <section className='py-6'>
            <div className="max-w-container mx-auto">
            <div className="md:flex px-4 md:px-0 items-center gap-x-8 justify-between mt-12">
                        <div className="md:mt-0 mt-6">
                            <img src={LogoNumber} alt="" />
                        </div>
                        <div className="md:mt-0 mt-6">
                            <img src={LogoNumberOne} alt="" />
                        </div>
                        <div className="md:mt-0 mt-6">
                            <img src={LogoNumberTwo} alt="" />
                        </div>
                        <div className="md:mt-0 mt-6">
                            <img src={LogoNumberThree} alt="" />
                        </div>
                        <div className="md:mt-0 mt-6">
                            <img src={LogoNumberFour} alt="" />
                        </div>
                        <div className="md:mt-0 mt-6">
                            <img src={LogoNumberFive} alt="" />
                        </div>
                    </div>
            </div>
        </section>
    </div>
  )
}

export default BenefitsIcons