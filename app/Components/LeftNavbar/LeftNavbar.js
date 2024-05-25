'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import { GrHomeRounded } from "react-icons/gr";
import { IoBookOutline } from "react-icons/io5";
import { LuBookmark } from "react-icons/lu";
import { PiSquaresFourLight } from "react-icons/pi";




function LeftNavbar() {
    const pathName = usePathname();
    return (
       <div className='leftNavbar primary-bg min-h-screen py-2 xl:py-8 w-full flex items-center justify-center'>
            <div className='flex justify-evenly gap-2 w-full h-full md:h-full   xl:grid  md-min:grid-rows-[1fr,56px,56px,56px,56px,56px,56px,1fr] place-content-center  xl:gap-[4.5%] '>
                    <Link href="#" className={`p-2 xl:p-4 w-12 flex items-center justify-center h-12 xl:w-auto xl:h-auto hover:bg-[#2C2C2C] rounded-lg ${pathName == '/home' ? 'activeNav' : ''}`}>
                        <GrHomeRounded />
                    </Link>
                    <Link href="#" className={`p-2 xl:p-4 w-12 flex items-center justify-center h-12 xl:w-auto xl:h-auto hover:bg-[#2C2C2C] rounded-lg ${pathName == '/' ? 'activeNav' : ''}`}>
                        <Image
                            src="/images/book.svg"
                            width={24}
                            height={24}
                            alt="Picture of the author"
                        />
                    </Link>
                    <Link href="#" className={`p-2 xl:p-4 w-12 flex items-center justify-center h-12 xl:w-auto xl:h-auto hover:bg-[#2C2C2C] rounded-lg ${pathName == '/subject' ? 'activeNav' : ''}`}>
                        <IoBookOutline />
                    </Link>
                    <Link href="#" className={`p-2 xl:p-4 w-12 flex items-center justify-center h-12 xl:w-auto xl:h-auto hover:bg-[#2C2C2C] rounded-lg ${pathName == '/bookmark' ? 'activeNav' : ''}`}>
                         <LuBookmark />
                    </Link>
                    <Link href="#" className={`p-2 xl:p-4 w-12 flex items-center justify-center h-12 xl:w-auto xl:h-auto hover:bg-[#2C2C2C] rounded-lg ${pathName == '/others' ? 'activeNav' : ''}`}>
                        <PiSquaresFourLight />
                    </Link>
                    <Link href="#" className={`p-2 xl:p-4 w-12 flex items-center justify-center h-12 xl:w-auto xl:h-auto hover:bg-[#2C2C2C] rounded-lg ${pathName == '/goto' ? 'activeNav' : ''}`}>
                        <Image
                            src="/images/goto.svg"
                            width={24}
                            height={24}
                            alt="Picture of the author"
                        />
                    </Link>
            </div>
       </div> 
    )
}

export default LeftNavbar