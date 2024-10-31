import React from 'react'
import AgesCity from '../../assets/images/AgesCity.webp'
import Section from './Section';
const ThronesCity = () => (
    <Section bgImage={AgesCity} extraClasses="bg-[#000]">
      <div className="max-w-[1320px]  px-3 pt-24 mx-auto grid grid-cols-1 md:grid-cols-2">
        <div>{/* Add content if needed */}</div>
        <div>
          <h2 className="text-5xl font-medium font-Ringbearer leading-[68px] capitalize">
            The Origins of <span className="Thrones"> Thrones of Ages City</span>
          </h2>
          <p className="text-lg leading-[35px] font-Bai-Jamjuree mt-4">
          Before the dawn of industry, a mysterious door was discovered in the mountains, leading to a hidden world. Those who dared to enter found powerful coins known as $TOA, brimming with immense energy. These discoveries attracted people from all corners of the land to Thrones of Ages City, a bustling settlement hastily built by small groups of adventurers and traders.
          </p>
          <p className="text-lg leading-[35px] font-Bai-Jamjuree mt-2">
          The inhabitants of Thrones of Ages City come from diverse backgrounds, often wearing mismatched outfits pieced together from their travels. With metal gear being rare and costly, many resort to wearing a mix of cloth, leather, and metal.
          </p>

          <p className="text-lg leading-[35px] font-Bai-Jamjuree mt-2">
          The city quickly grew around the door, with merchants flocking to this busy hub to profit from the steady stream of fortune seekers. Now, years later, most who arrive in Thrones of Ages City are mercenaries or independent adventurers like yourself, drawn by the promise of loot and the thrill of exploring the unknown beyond the door.</p>

          <p className="text-lg leading-[35px] font-Bai-Jamjuree mt-2">
          Many return with treasures, but not all make it back. Thrones of Ages City has become a place where the brave gather, each hoping to carve out their fortune in a world filled with peril and opportunity.</p>
        </div>
      </div>
    </Section>
  );

export default ThronesCity
