import React from 'react'

import Banner from './components/Banner'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import '../../Global/Global.css'
import './About.css'
import './AboutRWD.css'

const About = () => {
  return (
    <>
    <div className='About-wrap'>
      <div className='About-flex'>
        <div className='About-Banner'>
          <Banner />
        </div>

        <div className='Section-1'>
          <Section1 />
        </div>

        <div className='Section-2'>
          <Section2 />
        </div>
      </div>
    </div>
    </>
  )
}

export default About