import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../../Img/Logo.webp';
import CustomLink from '../CustomLink';


const Header = () => {
  return (
    < >
    <div className='Header-Height'></div>
      <header>
        <div className='wrap'>
          <nav className="navbar">
            <div className='Logo'>
              <Link to='/' className='Logo-img'><img src={Logo} alt='赤弦獎' /> </Link>
            </div>
            <div className='navbar-list'>
              <ul>
                <CustomLink className="CL-item" to="/About">關於赤弦</CustomLink>
                <CustomLink className="CL-item" to="/Information">比賽資訊</CustomLink>
                <CustomLink className="CL-item" to="/Sponsor">贊助廠商</CustomLink>
                <CustomLink className="CL-item" to="/Interview">採訪消息</CustomLink>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </ >
  )
}


export default Header