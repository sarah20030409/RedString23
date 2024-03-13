import React from 'react'
import { Link } from 'react-router-dom'

import DayOneBG from'../../../Img/Home_BGImg.webp'
import DayTwoBG from '../../../Img/Home_BGImg2.webp'
import BGImg3 from '../../../Img/Home_BGImg3.webp'
import Num01 from '../../../Img/Home_NumTitle_1.png'
import Num02 from '../../../Img/Home_NumTitle_2.png'
import HomeImg1 from '../../../Img/Home_1.webp'
import HomeImg2 from '../../../Img/Home_2.webp'

import CustomLink from '../../../Global/CustomLink'


const Section1 = () => {
  return (
    <>
    {/* 第一段喔 */}
    <div className='Section1_Wrap'>
        <div className='container'>
            <div data-aos="fade-up" className='infoTitle'>
               <h2>◇ 比賽資訊 ◇</h2> 
               <div className='bottomLine'> </div>
            </div>
            {/* 初賽比賽資訊 */}
            <div data-aos="fade-up" className='DayOne'>
                {/* 背景圖 */}
                <div className='background' style={{backgroundImage:`url(${DayOneBG})`}}>
                <div className='Info'>
                    <div className='InfoWrap'>
                       {/* 左字 */}
                    <div data-aos="fade-right" className='leftInfo'>
                        {/*01大字圖*/}
                        <div className='Img01'><img className='NumImg' src={Num01} /></div>
                        <div className='GameInfo'>
                            {/*第一行*/}
                            <div className='Line1'>
                            <div className='Line' />
                            <h3>初賽</h3>
                            </div>
                            {/*第二行*/}
                            <div className='Line2'>
                                <p>11/18 - 11/19 國立臺北科技大學中正館中正廳</p>
                                <div className='Line' />
                            </div>
                        </div>
                    </div>
                    </div>

                     {/* 右圖 */}
                     <div className='rightInfo'>
                        <div className='ImgFlex'>
                            <img className='GameImg' src={HomeImg1} />
                        </div>
                    </div>
                </div>
                </div>
            </div>

            {/* 決賽比賽資訊 */}
            <div data-aos="fade-up" className='DayTwo'>
                {/* 背景圖 */}
                <div className='background' style={{background:`url(${DayTwoBG})`}}>
                <div className='Info'>
                       {/* 左圖 */}
                    <div className='leftInfo'>
                    <div className='ImgFlex'>
                        <img className='GameImg' src={HomeImg2} />
                    </div>
                    </div>

                    <div className='InfoWrap'>
                     {/* 右字 */}
                     <div data-aos="fade-left" className='rightInfo'>
                        {/*02大字圖*/}
                        <div className='Img02'><img className='NumImg' src={Num02} /></div>
                        <div className='GameInfo'>
                            {/*第一行*/}
                            <div className='Line1'>
                            <div className='Line' />
                            <h3>決賽</h3>
                            </div>
                            {/*第二行*/}
                            <div className='Line2'>
                                <p>12/17 國立臺北科技大學中正館中正廳</p>
                                <div className='Line' />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* 按鈕 */}
            <div className='LinkToInfo'>
                <div className='background' style={{backgroundImage:`url(${BGImg3})`}}>
                    <ul data-aos='fade-up'>
                    <CustomLink className='BTN' to='/Information'>比賽資訊</CustomLink>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}



export default Section1