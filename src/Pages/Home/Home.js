import React from 'react'
import './Home.css'
import './HomeRWD.css'
// import './Home2.css' 有點失敗的滾動視差
import Banner from './component/Banner';
import Section1 from './component/Section1';
import Section2 from './component/Section2';


const Home = () => {
  return (
    <>
    <div className='Home-flex'>
    <div className='Home-wrap'>
      <div className='Home-Banner'>
      <Banner />
      </div>
    <div className='SectionScroll'>

    <div className='Section-1 SectionInfo'>
    <Section1 />
    </div>

    <div className='Section-2'>
    <Section2 />
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Home