import React, { useContext } from 'react'
import './Navigation.scss'
import logo from "../assets/desktop/logo.svg"
import light from '../assets/desktop/icon-sun.svg';
import dark from '../assets/desktop/icon-moon.svg';
import { Link } from 'react-router-dom';
import { JobContext } from './JobContext';


function Navigation() {
  const {handleChecked, handleClickTheme} = useContext(JobContext);
  return (
    <div className='Navigation'>
      <div className="navigationContainer">
        <div className="navLogo">
            <Link to='/'><img src={logo} alt="navlogo" /></Link>
        </div>
        <div className='themeBtn'>
            <div className="lightIcon">
                <img src={light} alt="" /></div>
            <div className="checkBtn">
                <input type="checkbox" onChange={handleClickTheme} />
            </div>
            <div className="darkIcon">
                <img src={dark} alt="" />
            </div>

        </div>

      </div>
      
    </div>
  )
}

export default Navigation
