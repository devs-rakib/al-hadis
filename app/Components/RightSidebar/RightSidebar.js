'use client';

import React, { useContext, useState } from 'react'
import { RightSidebarContext } from '../Context/Context';
import { IoMdClose } from "react-icons/io";

function RightSidebar() {
    const [arabicFontSize, setArabicFontSize] = useState(16);
    const [translationFontSize, setTranslationFontSize] = useState(16);
    const calculateBackgroundSize = (value, min, max) => {
        return ((value - min) / (max - min)) * 100;
    };
    const {isRightSibarShow, setIsRightSibarShow} = useContext(RightSidebarContext);
    return (
        <>
        <div className={`p-5 rounded-xl primary-bg mb-4 ${isRightSibarShow ? "rightSidebarShow ": ''}`}>
            <div className='flex justify-between items-center p-5 xl:hidden'>
                <h2 className='text-2xl text-500 text-start '>Settings</h2>
                <span onClick={()=>setIsRightSibarShow(false)} >
                    <IoMdClose className='text-3xl cursor-pointer'/>
                </span>

            </div>
            <h2 className='text-2xl text-500 text-center mb-4'>settings</h2>
            <form className="max-w-sm mx-auto mb-6">
                <label htmlFor="countries" className="block mb-2 text-md font-medium text-[#A6ACAF] outline-none">Select Arabic font</label>
                <select defaultValue="mequran" id="countries" className="hover-bg text-sm rounded-lg block focus:none w-full p-4
                 ">
                    <option defaultValue="Select Arabic font">Select Arabic font</option>
                    <option defaultValue="KGFGQ">KGFGQ</option>
                    <option defaultValue="mequran">Me Quran</option>
                    <option defaultValue="almusaf">Al Mushaf</option>
                    <option defaultValue="aAmriri">Amriri</option>
                </select>
            </form>

            <div className='w-full flex  flex-col gap-3'>
                <label htmlFor="arbicfont">Arabic font size</label>
                <div className='w-full flex items-center gap-3'>
                    <input
                        type="range"
                        min="10"
                        max="40"
                        step={2}
                        defaultValue={arabicFontSize}
                        onChange={(e) => setArabicFontSize(e.target.value)}
                        className="flex-grow"
                        id='arbicfont'
                        style={{backgroundSize:`${calculateBackgroundSize(arabicFontSize, 10, 40)}% 100%`,backgroundImage:'linear-gradient(#2b9e76, #2b9e76)'}}
                    />
                    <span>{arabicFontSize}</span>
                </div>
            </div>
            <div className='w-full flex  flex-col gap-3 py-3'>
                <label htmlFor="translate-font">Translation font size</label>
                <div className='w-full flex items-center gap-3'>
                    <input
                        type="range"
                        min="10"
                        max="40"
                        step={2}
                        defaultValue={translationFontSize}
                        onChange={(e) => setTranslationFontSize(e.target.value)}
                        className="flex-grow"
                        id='translate-font'
                        style={{backgroundSize:`${calculateBackgroundSize(translationFontSize, 10, 40)}% 100%`,backgroundImage:'linear-gradient(#2b9e76, #2b9e76)'}}
                    />
                    <span>{translationFontSize}</span>
                </div>
            </div>
            <label className="flex justify-between items-center mb-5 cursor-pointer">
                <span className="block mb-2 text-md font-medium text-[#A6ACAF]">Night mode</span>
                <input type="checkbox" defaultValue="" className="sr-only peer"/>
                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4   rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
               
            </label>
            

        </div>
        <div className='p-5 rounded-xl primary-bg flex flex-col justify-center items-center'>
            <h2 className='text-2xl text-500 text-start mb-4'>You also participate in Sadakay Zaria</h2>
            <p className='block mb-2 text-md font-medium text-[#A6ACAF]'>Your donation, however small, will help spread the message of Islam and hadith. Donate to our project to be part of our work and help in this important work. Inshallah it will be accepted by Allah as a charity.</p>
            <button className="cursor-pointer flex items-center gap-2 px-5 py-3 text-white rounded-lg green-bg text-center">support</button>
        </div>
        </>
    )
}

export default RightSidebar
