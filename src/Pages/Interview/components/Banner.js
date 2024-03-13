import React from 'react'

import BannerImg from '../../../Img/BannerIMG.webp'
import InterviewTitle from '../../../Img/Interview_TitleImg.png'

const Banner = () => {
  return (
    <>
    <div className='BannerIMG'>
        <div className='BGimg' style={{backgroundImage:`url(${BannerImg})`}}>
            <div className='TitleImg'>
                <img src={InterviewTitle} />
            </div>
        </div>
    </div>
    <div className='ForPadding'></div>
    </>
  )
}

export default Banner