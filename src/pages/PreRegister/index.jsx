import React, { useContext } from 'react'
import homebg from '../../assets/images/Devblog.webp'
import FooterBottom from '../../components/FooterBottom';
import { MenuContext } from '../../ContextApi/MenuProvider';

const PreRegister = () => {
    const { isMenuOpen } = useContext(MenuContext);
    return (
        <div className={`bg-black-800 pt-36  px-2 bg-cover bg-no-repeat bg-current text-white`} style={{ backgroundImage: `url(${homebg})` }}>
            <div className={`max-w-[624px] relative  ${isMenuOpen ? '-z-10' : 'z-0'} mx-auto bg-[#FFFFFF1A] backdrop-blur-md shadow-lg rounded-lg p-8 `}>
                <h2 className="text-3xl  font-Ringbearer font-medium mb-6">Pre Register!</h2>
                {/* Full Name Input */}
                <div className="mb-4">
                    <label className="block text-xl font-semibold mb-4" htmlFor="fullName">
                        Full Name
                    </label>
                    <input
                        className="w-full px-3 py-3 border bg-[#FFFFFF1A] backdrop-blur-md border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        type="text"
                        id="fullName"
                        placeholder="Enter your full name"
                    />
                </div>

                {/* Crypto Wallet Input */}
                <div className="mb-4">
                    <label className="block text-xl font-semibold mb-4" htmlFor="cryptoWallet">
                        Crypto Wallet
                    </label>
                    <input
                        className="w-full px-3 py-3 border bg-[#FFFFFF1A] backdrop-blur-md border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        type="text"
                        id="cryptoWallet"
                        placeholder="Enter your crypto wallet"
                    />
                </div>

                {/* Email Input */}
                <div className="mb-4">
                    <label className="block text-xl font-semibold mb-4" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full px-3 py-3 border bg-[#FFFFFF1A] backdrop-blur-md border-white rounded-lg text-[#F7F6DA] focus:outline-none focus:ring focus:border-blue-500"
                        type="email"
                        id="email"
                        placeholder="Enter Email Address"
                    />
                </div>

                {/* Submit Button */}
                <button className="w-full mt-2 bg-white font-Ringbearer text-base font-medium text-[#213D6A] hover:bg-gray-100 py-4 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-500">
                    Pre Register Now
                </button>
            </div>
            <FooterBottom  />
        </div>
    )
}

export default PreRegister
