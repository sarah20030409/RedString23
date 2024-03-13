import React from 'react'

import SImg1 from '../../../Img/Sponsor/SponsorImg_1.png'
import SImg2 from '../../../Img/Sponsor/SponsorImg_2.png'
import SImg3 from '../../../Img/Sponsor/SponsorImg_3.png'
import SImg4 from '../../../Img/Sponsor/SponsorImg_4.png'
import SImg5 from '../../../Img/Sponsor/SponsorImg_5.png'
import SImg6 from '../../../Img/Sponsor/SponsorImg_6.png'
import SImg7 from '../../../Img/Sponsor/SponsorImg_7.png'
import SImg8 from '../../../Img/Sponsor/SponsorImg_8.png'
import SImg9 from '../../../Img/Sponsor/SponsorImg_9.png'
import SImg10 from '../../../Img/Sponsor/SponsorImg_10.png'
import SImg11 from '../../../Img/Sponsor/SponsorImg_11.png'
import SImg12 from '../../../Img/Sponsor/SponsorImg_12.png'
import SImg13 from '../../../Img/Sponsor/SponsorImg_13.png'
import SImg14 from '../../../Img/Sponsor/SponsorImg_14.png'
import SImg16 from '../../../Img/Sponsor/SponsorImg_16.png'
import SImg17 from '../../../Img/Sponsor/SponsorImg_17.png'

import BGimg from '../../../Img/About_Line2.webp'

const Section1 = () => {
  return (
    <>
    <div className='Section-1'>
        <div className='BG-2' style={{backgroundImage:`url(${BGimg})`}}>
            <div data-aos="fade-up" className='SponsorsList'>
                {/* 贊助廠商 */}
                <ul>
                    {/* 01*/}
                    <li className='Sponsor_Item S_1'>
                        <img src={SImg1}/>
                        <p>WePlay - 線上桌遊吧</p>
                    </li>

                    {/* 02*/}
                    <li className='Sponsor_Item S_2'>
                        <img src={SImg2}/>
                        <p>海馬91譜</p>
                    </li>

                    {/* 03*/}
                    <li className='Sponsor_Item S_3'>
                        <img src={SImg3}/>
                        <p>葡萄王生技</p>
                    </li>

                    {/* 04*/}
                    <li className='Sponsor_Item S_4'>
                        <img src={SImg4}/>
                        <p>創勝文教</p>
                    </li>

                    {/* 05*/}
                    <li className='Sponsor_Item S_5'>
                        <img src={SImg5}/>
                        <p>森韻木吉他工作室<br/>ForestGuitar</p>
                    </li>

                    {/* 06*/}
                    <li className='Sponsor_Item S_6'>
                        <img src={SImg6}/>
                        <p>創見資訊</p>
                    </li>

                    {/* 07*/}
                    <li className='Sponsor_Item S_7'>
                        <img src={SImg7}/>
                        <p>統一數位翻譯</p>
                    </li>

                    {/* 08*/}
                    <li className='Sponsor_Item S_8'>
                        <img src={SImg8}/>
                        <p>財團法人華研<br/>文化基金會</p>
                    </li>

                    {/* 12*/}
                    <li className='Sponsor_Item S_12'>
                        <img src={SImg12}/>
                        <p>補給站樂器連鎖<br/>（圓環店）</p>
                    </li>

                    {/* 13*/}
                    <li className='Sponsor_Item S_13'>
                        <img src={SImg13}/>
                        <p>MUST</p>
                    </li>

                    {/* 14*/}
                    <li className='Sponsor_Item S_14'>
                        <img src={SImg14}/>
                        <p>存在音樂</p>
                    </li>

                    {/* 16*/}
                    <li className='Sponsor_Item S_16'>
                        <img src={SImg16}/>
                        <p>峰聲樂器行</p>
                    </li>
                    {/* 17*/}
                    <li className='Sponsor_Item S_17'>
                        <img src={SImg17}/>
                        <p>小拾光攝影工作室</p>
                    </li>
                </ul>

                <div className='divider'>
                <div className='Line'> </div>
                <h2>協辦單位</h2>
                <div className='Line'> </div>
                </div>

                {/* 協辦單位 */}
                <ul>
                    {/* 09*/}
                    <li className='Sponsor_Item S_9'>
                        <img src={SImg9}/>
                        <p>禧樂音樂</p>
                    </li>

                    {/* 10*/}
                    <li className='Sponsor_Item S_10'>
                        <img src={SImg10}/>
                        <p>學長映像</p>
                    </li>
                    {/* 11*/}
                    <li className='Sponsor_Item S_11'>
                        <img src={SImg11}/>
                        <p>噴火蟲工作室</p>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Section1