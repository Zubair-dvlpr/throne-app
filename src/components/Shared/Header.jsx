import React, { useContext, useState } from 'react';
import { NavItems } from '../../utils/NavItems';
import { Link, NavLink } from 'react-router-dom';
import MegaMenu from './MegaMenu'; // Import the new MegaMenu component

import logo from '../../assets/images/logo.png';
import MenuIcon from '../../assets/Icons/MenuIcon';  // Custom MenuIcon
import { MenuContext } from '../../ContextApi/MenuProvider';

const Header = () => {
  const { isMenuOpen, setMenuOpen } = useContext(MenuContext);
  // const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSimpleMenuOpen, setSimpleMenuOpen] = useState(false); 


  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); // Toggle mega menu open/close
  };

  const toggleSimpleMenu = () => {
    setSimpleMenuOpen(!isSimpleMenuOpen);  // Toggle simple menu
  };

  const openPopup = () => {
    setPopupVisible(true);  // Assuming this is used elsewhere
  };

  return (
    <div className={`header  text-white w-full py-4 ${isMenuOpen ? 'fixed' : 'absolute'}`}>

      <header className='max-w-[1320px] sm:h-[100px] h-[60px] py-4 px-2 mx-auto flex justify-between items-center'>
        <div className='flex md:gap-6 gap-2 items-center z-50'>
          <img src={logo} alt='Logo Not Found' className='sm:w-full w-[55px]' />
          <div>
            <button className='flex justify-center items-center rounded-full w-16 h-16 bg-[#FFFFFF33]'>EN</button>
          </div>
        </div>

        {/* Toggle button and Mega Menu */}
        <div className='z-50'>
          <button onClick={toggleSimpleMenu} className="block md:hidden ">
            {isSimpleMenuOpen  ? (
              <svg
                className="w-6 h-6 text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.293 4.293a1 1 0 011.414 0L10 10.586l5.293-5.293a1 1 0 111.414 1.414L11.414 12l5.293 5.293a1 1 0 01-1.414 1.414L10 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 12 3.293 6.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <MenuIcon />
            )}
          </button>


           {/* Simple Menu - Mobile */}
           {isSimpleMenuOpen && (
            <ul className='flex py-3 gap-5 md:hidden absolute mt-8 bg-white right-0 w-screen flex-col sm:flex-row'>
              {NavItems.map(function (item, index) {
                return (
                  <li key={index}>
                    <NavLink className="p-3 text-[#545454] hover:text-[#CD4000] mobile uppercase font-Roboto font-medium text-base" to={item.link}>
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
              <div>
                {/* <button
                  onClick={openPopup}
                  className="md:px-6 lg:px-12 ml-3 px-8 py-4 font-Paytone-One rounded-full shadow-[0_5px_0px_1px_rgba(0,0,0,1)] border text-white text-[14px] border-black-800 bg-[#DE1E37]"
                >
                  PLAY NOW
                </button> */}
              </div>
            </ul>
          )}

          {/* Desktop navigation */}
          <ul className='md:gap-0 px-4 bg-[#FFFFFF33] h-16 z-50 rounded-full lg:gap-5 hidden md:flex items-center justify-center'>
            {NavItems.map(function (item, index) {
              return (
                <li key={index}>
                  <NavLink className="p-3 lg:p-3 md:p-1 relative hover:text-primary-main font-Bai-Jamjuree desktop uppercase font-semibold text-base" to={item.link}>
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mega Menu Component */}
        <MegaMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        {/* Buttons on the right */}
        <div className='flex md:gap-3 gap-1 z-50'>
          <button
            onClick={openPopup}
            className="md:px-6 lg:px-12 px-4 py-4 font-Ringbearer rounded-full border md:text-lg text-base text-[#213D6A] bg-[#F7F6DA]"
          >
            PLAY NOW
          </button>
          <button onClick={toggleMenu} className='flex justify-center items-center rounded-full w-16 h-16 bg-[#FFFFFF33]'>
            {isMenuOpen ? (
              <svg
                className="w-6 h-6 text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.293 4.293a1 1 0 011.414 0L10 10.586l5.293-5.293a1 1 0 111.414 1.414L11.414 12l5.293 5.293a1 1 0 01-1.414 1.414L10 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 12 3.293 6.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <MenuIcon />
            )}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
