import React from 'react'
import AboutBanner from '../../components/AboutBanner/AboutBanner'
import Focussed from '../../components/Focussed/Focussed'
import Process from '../../components/Process/Process'
import Mission from '../../components/Mission/Mission'
import Benefits from '../../components/Benefits/Benefits'
import Meet from '../../components/Meet/Meet'
import BenefitsIcons from '../../components/BenefitsIcons/BenefitsIcons'

const About = () => {
  return (
    <div className='pt-24'>
        <AboutBanner />
        <Focussed />
        <Process />
        <Mission />
        <Benefits />
        <BenefitsIcons />
        <Meet />
    </div>
  )
}

export default About