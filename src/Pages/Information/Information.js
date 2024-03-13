import React from 'react'

import Banner from '../Information/components/Banner'
import Section1 from '../Information/components/Section1';

import '../../Global/Global.css';
import './Information.css';
import './InformationRWD.css';

const Information = () => {
  return (
    <>
    <div className='Info-wrap'>
      <div className='Info-flex'>
        <div className='Info-Banner'>
          <Banner />
        </div>

        <div className='Section-1 SectionInfo'>
          <Section1 />
        </div>
      </div>
    </div>
    </>
  )
}

export default Information