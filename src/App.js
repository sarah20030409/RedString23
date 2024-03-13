import './Global/Reset.css'
import Header from './Global/Header/Header';
import Footer from './Global/Footer/Footer';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Information from './Pages/Information/Information'
import Sponsor from './Pages/Sponsor/Sponsor'
import Interview from './Pages/Interview/Interview';
import {Route, Routes} from "react-router-dom"; 
// HashRouter: 頁面路徑最前面會有個「#」，換url時不會發送request。


import { useEffect } from 'react';
// AOS動畫
import AOS from 'aos';
import 'aos/dist/aos.css';
//滑到上面拉
import ScrollToTop from './Global/ScrollToTop';


function App() {

  // 將AOS動畫初始化
  useEffect(() => {
    AOS.init({
      duration:2000
    });
  }, []);

  return( 
  <>
    <Header />
    <div className='container'>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}/> {/*首頁*/}
        <Route path='/About' element={<About />}/> {/*關於赤弦*/} 
        <Route path='/Information' element={<Information />}/> {/*比賽資訊*/}
        <Route path='/Sponsor' element={<Sponsor />}/> {/*贊助商*/}
        <Route path='/Interview' element={<Interview />}/> {/*贊助商*/}
      </Routes>
    </div>
    <Footer />
  </>
);
}

export default App;
