import React from 'react'


import Num01 from '../../../Img/Home_NumTitle_1.png'
import Num02 from '../../../Img/Home_NumTitle_2.png'
import Num03 from '../../../Img/NumTitle_3.png'
import InfoBG1 from '../../../Img/About_BG3.png'
import InfoBG2 from '../../../Img/Home_BGImg2.webp'

const Section1 = () => {
  return (
    <>
    <div className='InfoWrap2'>
        <div className='BackgroundContent'>
            <div className='InfoBG-1' style={{backgroundImage:`url(${InfoBG1})`}}>
                <div className='InfoBG-2' style={{backgroundImage:`url(${InfoBG2})`}}>
                    <div data-aos="fade-up"  className='InnerInfo3'>
            {/* 初賽比賽資訊 */}
            <div className='ForWidth InfoDayOne'>
                <div className='Info'>
                    <div className='InnerInfo'>
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
                                <p>11/18 - 11/19國立臺北科技大學中正館中正廳</p>
                                <div className='Line' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 決賽比賽資訊 */}
            <div className='ForWidth InfoDayTwo'>
                <div className='Info'>
                     <div className='InnerInfo'>
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

            {/* 報名時間 */}
            <div className='ForWidth SignUp'>
                <div className='Info'>
                     <div className='InnerInfo'>
                        {/*03大字圖*/}
                        <div className='Img03'><img className='NumImg' src={Num03} /></div>
                        <div className='GameInfo SignUpInfo'>
                            {/*第一行*/}
                            <div className='Line1'>
                            <div className='Line' />
                            <h3>報名時間</h3>
                            </div>
                            {/*第二行*/}
                            <div className='Line2'>
                                <p>網路報名：9/30 - 10/31 &emsp; 攤位報名：10/16 - 10/20</p>
                                <div className='Line' />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                </div>

                {/* 月台按鈕 */}
            <div data-aos="fade-up" className='McipBTN'>
                <a href='https://app.mcip.app/school' target='_blank'>樂台報名</a>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Section1