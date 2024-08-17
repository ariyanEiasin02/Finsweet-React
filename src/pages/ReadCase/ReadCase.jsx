import React from 'react'
import ReadDesign from '../../components/ReadDesign/ReadDesign'
import Build from '../../components/Bulid/Build'
import ReadAbout from '../../components/ReadAbout/ReadAbout'

const ReadCase = () => {
  return (
    <div className='pt-24'>
        <ReadDesign />
        <ReadAbout />
        <Build />
    </div>
  )
}

export default ReadCase