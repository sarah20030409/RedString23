import React from 'react'

import BannerImg from '../../../Img/BannerIMG.webp'
import SponsorTitle from '../../../Img/Sponsor_bannerTitle.png'

const Banner = () => {
  return (
    <>
    <div className='BannerIMG'>
        <div className='BGimg' style={{backgroundImage:`url(${BannerImg})`}}>
            <div className='TitleImg SponsorTitleImg'>
                <img src={SponsorTitle} />
            </div>
        </div>
    </div>
    <div className='ForPadding'></div>
    </>
  )
}

export default Banner