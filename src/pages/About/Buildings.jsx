import React from 'react'
import Book from '../../assets/Icons/Book'
import Armor from '../../assets/Icons/Armor'
import logo from '../../assets/images/logo.png'
import buildings from '../../assets/images/buildings.webp'
import Swords from '../../assets/Icons/Swords'
import Ring from '../../assets/Icons/Ring'
import Hammer from '../../assets/Icons/Hammer'

const Buildings = () => (
    <div className="max-w-[1096px] -z-10 py-24 relative mx-auto">
      <p className="text-center text-base tracking-[4.8px] text-[#F7F6DA] uppercase">Map of Thrones of Ages City</p>
      <h2 className="text-5xl text-center font-medium text-white font-Ringbearer leading-[68px] capitalize">
        The most <span className="Thrones"> important </span> buildings
      </h2>
      <div className="relative overflow-hidden md:h-[773px] sm:h-[573px] h-[450px] mx-2 rounded-3xl  mt-10" style={{backgroundImage : `url(${buildings})`}}>
        
        <div className="absolute bottom-0 text-white bg-[#2F1F20] rounded-se-3xl rounded-es-3xl left-0 sm:w-80 w-60">
          <ul className="flex flex-col">
            <li className="flex border-b border-[#FFFFFF33] gap-3  sm:p-5 p-4">
              <Book />
              <span className="font-Ringbearer text-[#F7F6DA] text-xl font-medium capitalize">Skills</span>
            </li>
            <li className="flex border-b border-[#FFFFFF33] gap-3  sm:p-5 p-4">
              <Armor />
              <span className="font-Ringbearer text-[#F7F6DA] text-xl font-medium capitalize">Clothes And Armor</span>
            </li>
            <li className="flex border-b border-[#FFFFFF33] gap-3  sm:p-5 p-4">
              <Swords />
              <span className="font-Ringbearer text-[#F7F6DA] text-xl font-medium capitalize">Weapons</span>
            </li>
            <li className="flex border-b border-[#FFFFFF33] gap-3  sm:p-5 p-4">
              <Hammer />
              <span className="font-Ringbearer text-[#F7F6DA] text-xl font-medium capitalize">Forger</span>
            </li>
            <li className="flex gap-3  sm:p-5 p-4">
              <Ring />
              <span className="font-Ringbearer text-[#F7F6DA] text-xl font-medium capitalize">Accessories</span>
            </li>
          </ul>
        </div>
        <img src={logo} alt="Thrones of Ages Logo" className="absolute right-6 bottom-6" />
      </div>
    </div>
  );

export default Buildings
