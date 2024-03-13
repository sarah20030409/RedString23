import React from 'react'

import BannerImg from '../../../Img/BannerIMG.webp'
import InfoTitle from '../../../Img/Info_bannerTitle.png'

const Banner = () => {
  return (
    <>
    <div className='BannerIMG'>
        <div className='BGimg' style={{backgroundImage:`url(${BannerImg})`}}>
            <div className='TitleImg infoTitleImg'>
                <img src={InfoTitle} />
            </div>
        </div>
    </div>
    <div className='ForPadding'></div>
    </>
  )
}

export default Banner