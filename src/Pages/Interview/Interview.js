import React from 'react'

import Banner from './components/Banner';
import Section1 from './components/Section1'
import './Interview.css'

const Interview = () => {
  return (
    <>
    <div className='Interview-flex'>
        <div className='Interview-wrap'>
            <div className='Banner'>
                < Banner />
            </div>

            <div className='Section_1'>
                <Section1 />
            </div>
        </div>
    </div>
    </>
  )
}

export default Interview