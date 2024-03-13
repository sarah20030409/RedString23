import React from 'react'

import AboutTitle from '../../../Img/About_Title.png'
import BG1 from '../../../Img/Home_topCloud2.webp'
import BG2 from '../../../Img/About_introLine.png'
import BG3 from '../../../Img/About_BG3.png'

const Section1 = () => {
  return (
    <>
    <div className='Section1'>
      <div className='Background'>
        {/* 好多層的背景 */}
        <div className='BG-1 BG' style={{backgroundImage:`url(${BG1})`}}>
          <div className='BG-2 BG' style={{backgroundImage:`url(${BG2})`}}>
            <div className='BG-3 BG' style={{backgroundImage:`url(${BG3})`}}>
              <div data-aos='fade-down' className='Info'>
              {/* 浮聲如夢小標題 */}
              <div className='TitleImg'>
                <img src={AboutTitle} alt='浮聲如夢'/>
              </div>
              <div className='Intro'>
                <h3>「吾生夢幻間，何事紲塵羈。」</h3>
                <p>我們這一生，無非是庸庸碌碌、在人海裡浮沉，被無數人忽略、被某些人深愛，在人生的道路上一邊失去、一邊獲得。<br/>
不斷地告別、不停地遇見，走過數次的日出日落、花開與凋零，恍惚回首此生，也不過是一場太過清晰的夢。<br/>
不過是夢啊，我們又為何要被世俗的塵囂羈絆呢？我們該心向四方、永遠熱淚盈眶、永遠熱烈且不遺餘力地熱愛一切。<br/>
我們還要比夏日灼烈陽光更燦爛、比冬日纏雪更婉約，用力奔跑、盡情吶喊，做一場別人都不敢做的夢。<br/>
我們該高聲歌唱，不畏世俗眼光地用音樂綻放光芒，讓世界聽見我們張揚的夢想與遠方，活成自己嚮往的模樣。</p>
              </div>
            </div>
            </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Section1