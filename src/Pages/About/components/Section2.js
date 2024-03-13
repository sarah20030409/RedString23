import React from 'react'


//背景圖片
import MBG1 from '../../../Img/About_Line1.png'
import MBG2 from '../../../Img/About_BGimg1.webp'
import MBG3 from '../../../Img/About_Line2.webp'

// 成員圖片
import M1 from '../../../Img/Members/Member1.webp'
import M2 from '../../../Img/Members/Member2.webp'
import M3 from '../../../Img/Members/Member3.webp'
import M4 from '../../../Img/Members/Member4.webp'
import M5 from '../../../Img/Members/Member5.webp'
import M6 from '../../../Img/Members/Member6.webp'
import M7 from '../../../Img/Members/Member7.webp'
import M8 from '../../../Img/Members/Member8.webp'
import M9 from '../../../Img/Members/Member9.webp'
import M10 from '../../../Img/Members/Member10.webp'
import M11 from '../../../Img/Members/Member11.webp'
import M12 from '../../../Img/Members/Member12.webp'
import M13 from '../../../Img/Members/Member13.webp'
import M14 from '../../../Img/Members/Member14.webp'


const Section2 = () => {
  return (
    <>
    <div className='Section2'>
        <div className='Background'>
            <div className='MBG-1' style={{backgroundImage:`url(${MBG1})`}}>
                <div className='MBG-2' style={{backgroundImage:`url(${MBG2})`}}>
                    <div className='MBG-3' style={{backgroundImage:`url(${MBG3})`}}>
                    {/* 內部成員 */}
                    <div className='MembersArea'>
                        {/* 標題 */}
                        <div className='Title'>
                            <h3>◇ 籌備團隊 ◇</h3>
                            <div className='Line'> </div>
                            <p>采音吉他社</p>
                        </div>

                        {/* 成員 */}
                        <div className='Members'>
                            <div className='Member-Intro'>
                                {/* 總召(2) */}
                                <div data-aos='fade-up' className='Mflex Mflex-1'>
                                    <div className='M M-1'> {/*楷翔*/}
                                    <img src={M1} />
                                    <h4>總召</h4>
                                    <p>曾楷翔</p>
                                    </div>
                                    <div className='M M-2'> {/*米奇*/}
                                    <img src={M2} />
                                    <h4>副召</h4>
                                    <p>張敏琪</p>
                                    </div>
                                </div>
                                 {/* 活動(2) */}
                                 <div data-aos='fade-up' className='Mflex Mflex-2'>
                                    <div className='M M-3'> {/*玉珍*/}
                                    <img src={M3} />
                                    <h4>活動</h4>
                                    <p>蔡玉珍</p>
                                    </div>
                                    <div className='M M-4'> {/*以均*/}
                                    <img src={M4} />
                                    <h4>活動</h4>
                                    <p>陳以均</p>
                                    </div>
                                </div>
                                {/* 公關(2) */}
                                <div data-aos='fade-up' className='Mflex Mflex-3'>
                                    <div className='M M-5'> {/*子容*/}
                                    <img src={M5} />
                                    <h4>公關</h4>
                                    <p>林子容</p>
                                    </div>
                                    <div className='M M-6'> {/*道申*/}
                                    <img src={M6} />
                                    <h4>公關</h4>
                                    <p>郭道申</p>
                                    </div>

                                </div>  
                                {/* 宣傳(2) */}
                                <div data-aos='fade-up' className='Mflex Mflex-4'>
                                    <div className='M M-7'> {/*盈蓁*/}
                                    <img src={M7} />
                                    <h4>宣傳</h4>
                                    <p>陳盈蓁</p>
                                    </div>
                                    <div className='M M-8'> {/*粘*/}
                                    <img src={M8} />
                                    <h4>宣傳</h4>
                                    <p>粘芸綺</p>
                                    </div>

                                </div>
                                {/* 報名(3) */}
                                <div data-aos='fade-up' className='Mflex Mflex-5'>
                                    <div className='M M-9'> {/*甯*/}
                                    <img src={M9} />
                                    <h4>報名</h4>
                                    <p>許舒甯</p>
                                    </div>
                                    <div className='M M-10'> {/*乙瑄*/}
                                    <img src={M10} />
                                    <h4>報名</h4>
                                    <p>蔡乙瑄</p>
                                    </div>
                                    <div className='M M-11'> {/*豪*/}
                                    <img src={M11} />
                                    <h4>報名</h4>
                                    <p>程子豪</p>
                                    </div>

                                </div>
                                {/* 器材(2) */}
                                <div data-aos='fade-up' className='Mflex Mflex-6'>
                                    <div className='M M-12'> {/*蔡*/}
                                    <img src={M12} />
                                    <h4>器材</h4>
                                    <p>蔡承志</p>
                                    </div>
                                    <div className='M M-13'> {/*品聿*/}
                                    <img src={M13} />
                                    <h4>器材</h4>
                                    <p>陳品聿</p>
                                    </div>

                                </div>
                                {/* 美宣(1) */}
                                <div data-aos='fade-up' className='Mflex Mflex-7'>
                                    <div className='M M-14'> {/*嬨*/}
                                    <img src={M14} />
                                    <h4>美宣</h4>
                                    <p>俞卉嬨</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                    </div>                    
                </div>
            </div>
        </div>
        <div className='BottomMargin'> </div>
    </div>
    </>
  )
}

export default Section2