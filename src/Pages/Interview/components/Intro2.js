import React from 'react'
import Fade from 'react-reveal/Fade';


import MBG3 from '../../../Img/About_Line2.webp'
import MBG1 from '../../../Img/About_Line1.png'
import YangImg1 from '../../../Img/Interview/YangImg_1.jpg'
import YangImg2 from '../../../Img/Interview/YangImg_2.jpg'
import YangImg3 from '../../../Img/Interview/YangImg_3.jpg'

import '../Intro.css'
import '../IntroRWD.css'
const Intro2 = () => {
  return (
    <>
    <div className='intro1-flex intro2' style={{backgroundImage:`url(${MBG3})`}}>
      <div className='BG_Img2' style={{backgroundImage:`url(${MBG1})`}}>
      <div className='intro1-wrap'>
        {/* 楊峻綱的文章 */}
        {/* 第一段 */}
        <div data-aos="fade-right"  className='interviewer'><p>採訪/文章：陳品聿</p></div>
        <div data-aos="fade-up" className='article article_1'>
          <img src={YangImg1} />
          <h2><Fade bottom cascade>創作出嚮往的聲音<br/>
          楊峻綱：感謝所有幸運成就我</Fade></h2>
        </div>

         {/* 第二段 */}
         <div data-aos="fade-up" className='article article_2'>
          <p>楊峻綱：「雖然身為製作人，但我小時候也不愛練琴。」
1999年出生於台南，楊峻綱從小就接觸鋼琴，但相較於古典音樂，反而著迷於流行音樂。國中時透過iPad 的 GarageBand程式對編曲產生濃厚的興致，發現編曲對他而言是一件很新奇的事，就自然而然地朝這條道路前進。</p>
        </div>

        {/* 第三段 */}
        <div data-aos="fade-up" className='article article_3'>
          <h2>音樂公司實習，開啟製作人之路。</h2>
          <p>20歲時在大禾音樂實習時，楊峻綱被老闆尚德老師推薦參加音樂製作甄選，並獲得Youtuber 經紀公司青睞，為40位左右的創作者製作年度活動單曲。那是他第一次以製作人的身分進行單曲製作和錄音。楊峻綱：「那時候被掛上了製作人的名號，認知到原來我有這個能力能擔當這個角色，覺得我十分幸運。」看到YouTuber們會緊張嗎？楊峻綱回憶起當時的景象，臉上彷彿滯留了20歲時前往錄音室的興奮感，眉開眼笑地回答：「超級緊張，很多螢幕上的面孔出現在我面前，還要壓抑自己的興奮跟緊張，展現專業幫他們錄音。」
這段難忘經歷，讓楊峻綱更堅信地朝著自己的夢想前進。不過音樂這條道路並不好走，想要讓大眾看見自己，除了要有一定的水準外，很重要的還是運氣。</p>
        </div>

        {/* 第四段 */}
        <div data-aos="fade-up" className='article article_4'>
        <img src={YangImg2}/>
        <img src={YangImg3}/>
        </div>

        {/* 第五段 */}
          <div data-aos="fade-up" className='article article_5'>
          <h2>「五年後，期盼我持續在做自己喜歡的音樂。」</h2>
          <p>楊峻綱坦言，在初期發展階段，音樂這條路並沒有穩定的收入，或許擁有一些不同的專長，可以創造更多可能，例如自己創作編製、學影音、學企劃、學行銷，不會只有單一面向的收入或經濟來源。對於一個音樂工作者來說，你會得越多、你就能承接更多不同的案子，在製作上也能找出更多好玩的部分，看到更多可能。
例如當時楊峻綱與呂允共同製作的《記得呼吸》中，楊峻綱更擔任導演，將此次MV成為他廣電系的畢業製作，每個畫面的切換都和音樂搭配，隨著輕快的音樂步伐，視覺與聽覺跳躍在音符上，每個重拍都顯得踏實，譜出一幅完整的作品。</p>
          <p>這樣的影像製作，也和楊峻綱在廣電系的所做所學有相關聯。現在的音樂作品可能都不只一個音檔，大部分都會和影像做搭配，更奪人眼球。楊峻綱提到，他很喜歡DPR IAN，DPR IAN是導演出身，所以他的MV跟音樂絕大多數都有相關聯，在音樂上再疊加一種效果，達到畫龍點睛的作用。楊峻綱：「從影像回到編曲，設計一些Breakdown、空拍，或者音效，可以聯想到MV的拍攝，在前期做音樂時就先想好影像，搭配得好就會很精彩。」
不過，想提升自己作品的品質，楊峻綱提及了目前的挑戰。對音樂人而言，更新設備也相當重要，像是騎士的戰袍和武器，那都是很高額的花費。要如何同時更新設備也有足夠的收入，製作自己喜歡的音樂、展示自己的想表達的東西，這也是他正在經歷的一切。楊峻綱：「未來，我會想去世界各地聽當地不同文化的音樂。畢竟現在很多都是串流、影音平台，但我相信身在其中會有不同的體驗，現場的氣氛、張力，感受他們的文化，一定會擴展自己的視野、提升自己的音樂。」
即使這份職業比較不穩定，但時時刻刻都能收到內在或外在的回饋，楊峻綱覺得是一個很幸福的事情。期盼楊峻綱當前的努力能讓他在未來，繼續穩紮穩打地成為一個做自己喜歡的音樂的製作人。</p>
        </div>

        {/* 第六段 */}
        <div data-aos="fade-up" className='article article_6'>
          <h2>楊峻綱：我只是個音樂工程師</h2>
          <p>楊峻綱：「當別人聽到我的職業是音樂工作者、製作人，大部分人會覺得很酷。實際上，他也只是一個角色，假如你是一個程式工程師，我也就只是一個音樂工程師的概念。」
以前的人總認為做音樂沒出息，但現在的人其實都不太會去質疑，反而是鼓勵和肯定。甚至更多人會覺得這是一件出眾的事情，因為是明星偶像的第一線接觸者，難免會聽到小八卦或接觸藝人，大家反而會好奇。
因為楊峻綱本身的詞曲創作比較少，大部分都還是編曲跟混音，而他近期的小目標，是能將自己錄製的許多小碎片整理成完整的歌曲去發佈。</p>
        </div>
        
        {/* 第七段 */}
        <div data-aos="fade-up" className='article article_7'>
          <h2>與呂允合作，激盪出新的火花。</h2>
          <p>同為臺灣藝術大學的楊峻綱與呂允，在2021年，因緣際會下認識，兩人一拍即合，成為音樂與生活中的知己。在《等待你那天》、《記得呼吸》、《夏夕夏景》中，楊峻綱和呂允一起共同編曲、編合聲，合作過程相當愉快。楊峻綱：「我和呂允喜歡的東西很像，雙方互丟想法的時候都能激發出新的火花，跟對的人一起做音樂，真的會很開心。」
楊峻綱：「呂允就是我音樂上的救贖。」做呂允的音樂，可以把我想表達的音樂做出來，讓我一直保有音樂的熱情。」品味相同的兩個人，呂允在赤弦獎第21屆邀請楊峻綱參加比賽，兩個人都是抱持學習的心態參加，雖然說沒有名次壓力，但還是不負眾望地以《空拍》拿下大專創作組第一名及最佳伴奏獎有、改編《STAY》榮獲大專團體組第一名及最佳編曲獎。
除了音樂上的默契外，呂允對音樂很有立場、清楚自己要什麼，心態也比較不容易動搖，讓楊峻綱在某些時刻不會遺失自己。「我在他身上學到很多，也會更勇於表達自己，當然這是互相的。」楊峻綱：「我的身分需要接觸到不同類型的人，做不同的製作，我的內心也要比較靈活的去搭配別人。身為一個製作的角色，如果固執己見，在工作上會比較難去配合。」
有趣的是，楊峻綱跟呂允在先天個性上剛好，楊峻綱適合走製作這塊，呂允適合走創作，呂允一定要有他的堅持，楊峻綱要懂得去尊重別人的想法。以前製作音樂，對楊峻綱而言都是很一個人的事情，有一陣子，他在音樂上很少跟人家互動。但在赤弦獎第21屆初賽後，楊峻綱和其他赤弦獎的參賽選手共同組成「Rick＆Party」，還有去宜蘭一起創作，認識了許多音樂上的夥伴。
楊峻綱：「對我而言最大的收穫是認識別人，把自己打開，在音樂上有更多的互動跟碰撞，進而提升自己的能力。」</p>
        </div>


      {/* 第九段 */}
      <div data-aos="fade-up" className='article article_9'>
          <h2>「聲淵」反應現實世界：該如何選擇、面對或忽略各種聲音？</h2>
          <p>呼應本次第22屆赤弦獎主視覺「聲淵」：現在的世界就像聲淵，所有所見所聞都不一定是完整的，我們在水中載浮載沉，真相似有似無，世界多彩卻混濁。在聲淵裡，我們生活中包覆各種聲音，該如何去選擇、去面對、去跟隨或去忽略？詢問楊峻綱在音樂這條路上有遇到什麼困難嗎？他毫無懸念地回答：「沒有。」
楊峻綱的家人朋友都很支持他做想做的事情，希望他不要有壓力、不要緊張，他們會當楊峻綱的後盾。「雖然家人這麼說，但我自己會希望可以盡快讓他們放心，成為獨當一面的製作人、讓他們放心和驕傲的兒子。」在網路上，我們像是有了一層防護網，彷彿見不到本人就能直言不諱地說任何話，表達自己最真實的想法。楊峻綱則認為，除了抱著惡意前來留言的人之外，所有留言都是有價值的，可以去刺激我們的思考，以現有的技術改善自己的音樂。
撇除掉走音、落拍等淺而易見的失誤，音樂本身是主觀的，最主要的還是檢視自己最想要什麼，保留自己的堅持或推從的東西，比跟隨世俗潮流還重要。楊峻綱：「不知道自己有沒有做好準備承受世界的聲音，如果未來我用心的製作不被看好，希望那時候的我是做好準備的。」</p>
        </div>

      {/* 第十段 */}
      <div data-aos="fade-up" className='article article_10'>
          <h2>「感謝所有幸運成就我。」</h2>
          <p>這一路走來，楊峻綱有家人的鼓勵、自己的堅持，遇見許多志同道合的朋友，現在也多了粉絲們的溫暖。有些聽眾會在楊峻綱製作到三更半夜時，回覆限時動態，要他好好照顧身體，在影片底下回覆關於編曲跟混音的想法與建議，「有了這些鼓勵，感覺這首歌都變得不一樣了。」
楊峻綱：「感謝所有幸運成就我，讓我能走到今天，雖然還不是個大製作，但我還是會努力朝著夢想前進。」</p>
        </div>
        <div data-aos="fade-left" className='interviewer date'><p>採訪日期：111/08/20</p></div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Intro2