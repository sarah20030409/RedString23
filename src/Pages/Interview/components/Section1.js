import React ,{useState , useEffect ,useRef} from 'react'


import Intro1 from './Intro1'
import Intro2 from './Intro2'
import Intro3 from './Intro3'
import Intro4 from './Intro4'
import Intro5 from './Intro5'
import Intro6 from './Intro6'
import Intro7 from './Intro7'
import Intro8 from './Intro8'

import LuImg from '../../../Img/Interview/LuImg_5.jpg'
import YangImg from '../../../Img/Interview/YangImg_1.jpg'
import rongImg from '../../../Img/Interview/SR (1).webp'
import weiImg from '../../../Img/Interview/GW (1).webp'
import commentaryImg1 from '../../../Img/Interview/InterImg1.png'
import commentaryImg2 from '../../../Img/Interview/InterImg2.webp'
import commentaryImg3 from '../../../Img/Interview/InterImg3.webp'
import commentaryImg4 from '../../../Img/Interview/InterImg4.webp'

const Section1 = () => {
    const [InterviewInfo,SetInterviewInfo ] = useState()
    // 寫切換

    const targetRef = useRef();

    const scrollToTarget = () => {
        targetRef.current.scrollIntoView({behavior:'smooth'});
    }

  return (
    <>
    <div className='Section1'>
        {/* 致中對其 */}
        <div className='S1Flex'>
            <p className='ClickHint'>↓ 點擊任一圖卡查看資訊 ↓</p>
        <div data-aos="fade-up" className='VisitorList'>
        <div className='colume01'>
            {/* 呂允 */}
            <div onClick={scrollToTarget}>
            <button className='Visitor1' onClick={() => SetInterviewInfo(<Intro1 />)}>
                <div className='InnerInfo'>
                    <h1>呂允</h1>
                    <img src={LuImg}/>
                </div>
            </button>
            </div>

            {/* 楊峻綱 */}
            <div  onClick={scrollToTarget}>
            <button className='Visitor2' onClick={() => SetInterviewInfo(<Intro2 />)}>
            <div className='InnerInfo'>
                    <h1>楊峻綱</h1>
                    <img src={YangImg }/>
                </div>
            </button>
            </div>
            </div>

            <div className='colume02'>
            {/* 張瑄容 */}
            <div onClick={scrollToTarget}>
                <button className='Visiter3' onClick={() => SetInterviewInfo(<Intro3 />)}>
                <div className='InnerInfo'>
                    <h1>張瑄容</h1>
                    <img src={rongImg} />
                </div>
                </button>
            </div>
            {/* 朱冠瑋 */}
            <div onClick={scrollToTarget}>
                <button className='Visiter4' onClick={() => SetInterviewInfo(<Intro4 />)}>
                <div className='InnerInfo'>
                    <h1>朱冠維</h1>
                    <img src={weiImg}/>
                </div>
                </button>
            </div>
            </div>

            <div className='dividTitle'>
                <h1>評審講評</h1>
            </div>

            <div className='colume03'>
            
            {/*初賽大專個人團體講評*/}
            <div onClick={scrollToTarget}>
                <button className='Visiter5' onClick={() => SetInterviewInfo(<Intro5 />)}>
                    <div className='InnerInfo'>
                        <h1>23rd赤弦初賽<br/>大專個人、大專團體講評</h1>
                        <img src={commentaryImg1}/>
                    </div>
                </button>
            </div>

            {/*初賽大專演奏組、大專創作組體講評*/}
            <div onClick={scrollToTarget}>
                <button className='Visiter6' onClick={() => SetInterviewInfo(<Intro6 />)}>
                    <div className='InnerInfo'>
                        <h1>23rd赤弦初賽<br/>大專演奏、大專創作講評</h1>
                        <img src={commentaryImg2}/>
                    </div>
                </button>
            </div>
            
            </div>

            <div className='colume04'>
            {/*高中演唱組、高中演奏組 體講評*/}
            <div onClick={scrollToTarget}>
                <button className='Visiter7' onClick={() => SetInterviewInfo(<Intro7 />)}>
                    <div className='InnerInfo'>
                        <h1>23rd赤弦初賽<br/>高中演唱、高中演奏講評</h1>
                        <img src={commentaryImg3}/>
                    </div>
                </button>
            </div>

             {/*決賽講評*/}
            <div onClick={scrollToTarget}>
                <button className='Visiter8' onClick={() => SetInterviewInfo(<Intro8 />)}>
                    <div className='InnerInfo'>
                        <h1>23rd赤弦決賽<br/>評審講評</h1>
                        <img src={commentaryImg4}/>
                    </div>
                </button>
            </div>
            </div>

        </div>

        <div className='divider_1'> </div>
        <div className='InterviewInfo' ref={targetRef}>{InterviewInfo}</div>
        </div>
    </div>   
    </>
  )
}

export default Section1