import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useState } from 'react';
import { FaSearch,FaHandHoldingHeart } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { RightSidebarContext } from '../Context/Context';

function Header() {
    const {isRightSibarShow, setIsRightSibarShow} = useContext(RightSidebarContext)
    return (

        <header className="primary-bg w-full md-max:h-16 h-20 px-4  sticky top-0 flex items-center" >
                <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center gap-6'>
                        <Link href="/" className='w-11 h-11'>
                            <Image
                                src="/images/home-logo.png"
                                width={80}
                                height={80}
                                alt="Picture of the home"
                                className='w-full h-full'
                            />
                        </Link>
                        <Link href="/">
                            <h2 className='text-xl font-bold primary-color'>Hadiths</h2>
                            <p className="text-sm text-[#A6ACAF]">Read Hadith Learn More</p>
                        </Link>
                    </div>
                    <div className="hidden xl:flex items-center gap-6">
                        <form className="max-w-md mx-auto">
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <FaSearch />
                                </div>
                                <input
                                    type="search"
                                    className="md-max:hidden border-[#ffffff0d] border-2 p-3 rounded-lg  pl-10  primary-bg"
                                    placeholder="Search Hadiths"
                                    
                                />
                                <button
                                    type="submit"
                                    className="d-none"
                                >
                                
                                </button>
                            </div>
                        </form>
                                
                        <button className="cursor-pointer flex items-center gap-2 px-5 py-3 text-white rounded-lg green-bg">
                            support
                            <FaHandHoldingHeart />
                        </button>
                    </div>
                    <div className='flex items-center gap-3 xl:hidden'>

                        <span className='p-2 inline-block rounded-lg bg-gray-500 cursor-pointer '>
                            <IoSearchOutline className='text-2xl font-normal' />
                        </span>
                        <span onClick={()=>setIsRightSibarShow(!isRightSibarShow)} className=' cursor-pointer p-2 inline-block rounded-lg green-bg'>
                            <IoIosSettings className='text-2xl' />
                        </span>
                    </div>

                </div>
        </header>
    
     
    )
}

export default Header
