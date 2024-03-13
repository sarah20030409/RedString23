import React from 'react'
import './Footer.css'

import footerBG1 from './Img/Footer_Bgimg1.png'
import footerBG2 from './Img/Footer_Bgimg2.png'
import FBicon from './Img/FBIcon.png'
import IGicon from './Img/IGIcon.png'
import YTicon from './Img/YTIcon.png'
import footerLogo from './Img/Logo_2.png'

const Footer = () => {
  return (
    <>
    <footer>
      <div className='Footer-Wrap'>
        {/* <div className='footerBackground'>
          <img className="BGImg1" src={footerBG1}/>
          <img className="BGImg2" src={footerBG2}/>
        </div> */}
        <div className='BG1' style={{backgroundImage:`url(${footerBG1})`}}>
          <div className='BG2' style={{backgroundImage:`url(${footerBG2})`}}>
        {/* 上方資訊 */}
        <div className='Info'>
          {/*左*/}
      <div className='Left'> 
      <p className='Info_1'>
        <span>總召</span><br/>曾楷翔 0978-025-073<br/>
        <span> 副召 </span><br/>張敏琪 0970-046-610<br/>
      </p>
      <p className='Info_2'>
        <span>公關</span><br/>
        林子容 0988-512-226<br/>
        郭道申 0988-611-231
      </p>
      <p className='Info_3'>
      <span>赤弦獎官方gmail : </span>ntutredstring@gmail.com
      </p>
        </div>
        {/*右*/}
        <div className='Right'>
          <div className='Out'>
          <div className='Icon'>
              <div className='Icon3'>
                <a href='https://www.instagram.com/redstring_23rd/' target='_blank'> <img src={IGicon} alt='赤弦獎IG' /> </a>
                <a href='https://www.facebook.com/NTUT.TsaiYin.RedString/?locale=zh_TW' target='_blank'> <img src={FBicon} alt='赤弦獎FB' /> </a>
                <a href='https://www.youtube.com/@ntut1272/featured' target='_blank'> <img src={YTicon} alt='赤弦獎TY'/> </a>
              </div>
          </div>
          <div className='Logo'>
            <div className='LogoImg'>
              <img src={footerLogo} alt='浮聲如夢' />
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      </div>
      {/* 下方版權 */}
      <div className='Copyright'>
        <p>Copyright © 2023 采音吉他社. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer