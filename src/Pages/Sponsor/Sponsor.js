import React from 'react'

import Banner from './components/Banner'
import Section1 from './components/Section1'
import './Sponsor.css'

const Sponsor = () => {
  return (
    <>
    <div className='Sponsor-Wrap'>
      <div className='Sponsor-flex'>
        <div className='Banner'>
          <Banner />
        </div>

        <div className='Section-1'>  
          <Section1 />
        </div>
      </div>
    </div>
    </>
  )
}

export default Sponsor