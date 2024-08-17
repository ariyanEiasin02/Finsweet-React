import React from 'react'
import FeaturesBanner from '../../components/FeaturesBanner/FeaturesBanner'
import BenefitsIcons from '../../components/BenefitsIcons/BenefitsIcons'
import Benefits from '../../components/Benefits/Benefits'
import FeaturesAllFeatures from '../../components/FeaturesAllFeatures/FeaturesAllFeatures'
import Frequently from '../../components/Frequently/Frequently'

const Features = () => {
  return (
    <div>
        <FeaturesBanner />
        <BenefitsIcons />
        <Benefits />
        <FeaturesAllFeatures />
        <Frequently />
    </div>
  )
}

export default Features