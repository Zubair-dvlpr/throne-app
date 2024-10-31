import React from 'react'
import aboutbg from '../../assets/images/aboutbg.webp'
import Section from './Section';
const AboutThrones = () => (
    <Section bgImage={aboutbg} extraClasses="bg-[#000]">
      <div className="max-w-[694px] sm:px-4 px-3 pt-10 lg:px-0 mt-28 pb-6 mx-auto text-center">
        <h1 className="text-5xl font-medium capitalize leading-[64px] font-Ringbearer">ABOUT THRONES</h1>
      </div>
      <div className="max-w-[1320px] mt-16  px-3 mx-auto grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-5xl font-medium font-Ringbearer leading-[68px] capitalize">
            Explore the Fantastic World of <span className="Thrones"> Thrones of Ages</span>
          </h2>
          <p className="text-lg leading-[35px] font-Bai-Jamjuree mt-4">
          As you step into the world of **Thrones of Ages**, you'll be transported to a realm brimming with adventure. The bustling city acts as a central hub for all players, offering resources and guidance as you embark on your journey. Here, you can interact with non-player characters (NPCs) who will guide you on your quests, and form alliances with other players to conquer dungeons and defeat formidable enemies.
          </p>
          <p className="text-lg leading-[35px] font-Bai-Jamjuree mt-2">
          But the city is only the beginning. Beyond its gates lies the mysterious mine, a realm teeming with both danger and opportunity. With the help of YOUR FRIENDS and your own courage, you’ll be able to face any challenge that awaits.
          </p>
          <p className="text-lg leading-[35px] font-Bai-Jamjuree mt-2">
          Whether you're a seasoned explorer or new to this fantastical world, **Thrones of Ages** has a place for you. Join the ranks of legendary heroes or carve your own path to greatness—the choice is yours.
          </p>
        </div>
        <div>{/* Add content if needed */}</div>
      </div>
    </Section>
  );

export default AboutThrones
