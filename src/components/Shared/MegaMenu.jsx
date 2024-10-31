import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import bgimage from '../../assets/images/megamenubg.webp';
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img22.png';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.png';
import FooterBottom from '../FooterBottom';
// Menu data
const menuData = [
    {
        title: 'TsOA',
        items: ['Home', 'Token TOA', 'Token STOA', 'DevBlog', 'Roadmap'],
        links: ['/', '/Home', '/stoa', '/devBlog', '/roadmap']
    },
    {
        title: 'GAME',
        items: ['Patch Notes'],
        links: ['/coming']
    },
    {
        title: 'APP',
        items: ['Marketplace', 'Staking', 'NFT Viewer', 'Client', 'FAQs', 'About Us'],
        links: ['/Dashboard', '/walllet', '/Dashboard', '/coming', '/roadmap', 'about']
    }
];

// Gallery images
const galleryImages = [img1, img2, img3, img4];

const MegaMenu = ({ isMenuOpen, toggleMenu  }) => {

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup when component unmounts or isMenuOpen changes
        return () => {
            document.body.style.overflow = 'auto';  // Restore scroll on cleanup
        };
    }, [isMenuOpen]);
    
    const a = isMenuOpen ? 'z-40' : '-z-40'; // Assuming you've created a custom class for this.
    console.log(a);
    if (!isMenuOpen) return null;

    
    return (
        <div className={`fixed top-0 left-0 w-full h-screen ${a} bg-cover bg-no-repeat bg-center`} style={{ backgroundImage: `url(${bgimage})` }}>
            <div className='max-w-[1320px] pt-28 md:pt-36 mx-auto px-4 py-10 grid grid-cols-1 gap-4 md:grid-cols-2'>
                {/* First Column - Dynamic Menu */}
                <div>
                    <h2 className='uppercase font-Bai-Jamjuree text-2xl font-medium'>NAVIGATION</h2>
                    <div className='grid grid-cols-3 mt-10 gap-10'>
                        {menuData.map((menu, idx) => (
                            <div key={idx}>
                                <h3 className="font-bold text-xl text-[#D8813E] capitalize">{menu.title}</h3>
                                <ul className='mt-4 flex flex-col gap-4'>
                                    {menu.items.map((item, itemIdx) => (
                                        <li key={itemIdx}>
                                            <NavLink to={menu.links[itemIdx]} onClick={()=> toggleMenu()}  className="text-[#F7F6DA] font-Bai-Jamjuree text-base capitalize hover:text-red-500">
                                                {item}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second Column - Image Gallery */}
                <div>
                    <div className='flex justify-between'>
                        <h2 className='uppercase font-Bai-Jamjuree text-2xl font-medium'>NAVIGATION</h2>
                        <h2 className='uppercase font-Bai-Jamjuree text-[#E88AD3] text-2xl font-medium'>VIEW ALL</h2>
                    </div>
                    <div className='w-full mt-10 grid grid-cols-2 gap-4'>
                        {galleryImages.map((img, idx) => (
                            <img key={idx} src={img} alt={`Gallery Image ${idx + 1}`} className='w-full h-auto object-cover' />
                        ))}
                    </div>
                </div>
            </div>

           <FooterBottom />
        </div>
    );
};

export default MegaMenu;
