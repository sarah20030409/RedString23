import React from 'react'

import BannerImg from '../../../Img/BannerIMG.webp'
import AboutTitle from '../../../Img/About_bannerTitle.png'

const Banner = () => {
  return (
    <>
    <div className='BannerIMG'>
        <div className='BGimg' style={{backgroundImage:`url(${BannerImg})`}}>
            <div className='TitleImg'>
                <img src={AboutTitle} />
            </div>
        </div>
    </div>
    <div className='ForPadding'></div>
    </>
  )
}

export default Banner