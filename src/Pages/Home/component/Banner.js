import React from 'react'

import HomeBanner from '../../../Img/Home_topBanner2_2.webp';
import HomeTopCloud1 from '../../../Img/Home_topCloud1.webp';
import HomeTopCloud2 from '../../../Img/Home_topCloud2.webp';
import HomeTitle from '../../../Img/Home_topTitle.png';


const Banner = () => {
  return (
    <>
    <div className='Banner'>
        <div className='Bottom-Cloud'>
            <img className='Cloud-1' src={HomeTopCloud1} />
            <img className='Cloud-2' src={HomeTopCloud2} />
        </div>
        <div className='MainImg'>
            <div className='LogoImg'>
                <img src={HomeBanner} />
            </div>
            <div  className='Title'>
                <div className='TitleImgCenter'>
                <img src={HomeTitle} />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner