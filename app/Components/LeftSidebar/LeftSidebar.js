'use client';

import React, { useContext, useState } from 'react';
import {bookList}  from '@/app/LocalData/bookList';
import {chapterList}  from '@/app/LocalData/chapterList';
import { FaSearch } from "react-icons/fa";
import { LeftSidebarContext } from '../Context/Context';
import { IoMdClose } from "react-icons/io";


function LeftSidebar() {
    const [showBook, setShowBook] = useState(true);
    const [showChapter, setShowChapter] = useState(false);

    const handleShowBook = () => {
        setShowBook(true);
        setShowChapter(false);
    };

    const handleShowChapter = () => {
        setShowBook(false);
        setShowChapter(true);
    };
    
    const {isActive, setIsActive} = useContext(LeftSidebarContext);

    return (
       <div className={`h-[calc(100vh-115px)] primary-bg rounded-2xl overflow-hidden ${isActive ? 'leftSidebarFixed': ''}`}>
            <div className='flex justify-between items-center p-5 xl:hidden'>
                <h2 className='text-2xl text-500 text-start '>ক্যাটাগরি</h2>
                <span onClick={()=>setIsActive(false)} >
                <IoMdClose className='text-3xl'/>
                </span>

            </div>
            <div className="flex items-center w-full border-b border-[#ffffff0d]">
                <button className={`w-2/4 py-4 xl:rounded-tl-2xl  text-xl ${showBook == true ? 'activeToggleBtn': ''}`} onClick={handleShowBook}>book</button>
                <button className={`w-2/4 py-4 xl:rounded-tr-md text-xl ${showChapter == true ? 'activeToggleBtn': ''}`} onClick={handleShowChapter}>chapter</button>
            </div>
            <div>
                <form className=" px-4 w-full">
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <FaSearch className='font-normal' />
                        </div>
                        <input
                            type="search"
                            className="md-max:hidden outline-none border-none hover-bg p-3 rounded-lg  pl-10 w-full my-3"
                            placeholder="Search Hadiths"
                            
                        />
                        <button
                            type="submit"
                            className="d-none"
                        >
                        
                        </button>
                    </div>
                </form>
            </div> 
            {showBook && 
                <div className='px-4 flex flex-col gap-y-2 cursor-pointer overflow-y-scroll max-h-[79%] custom-scrollbar'>
                   {bookList?.map(item => (
                    <div key={item.id} className={`p-4 rounded-2xl hover-style flex items-center gap-4 ${item.id == 1 ? 'hover-bg':''}`}>
                        <div className='relative w-1/4 flex items-center justify-center'>
                            <h3 className='absolute '>{item.first_letter}</h3>
                            <svg className="fill-subcat-hover" width="56" height="62" viewBox="0 0 56 62" fill="#343434" xmlns="http://www.w3.org/2000/svg"><path d="M22.375 3.11362C25.8558 1.104 30.1442 1.104 33.625 3.11362L49.3378 12.1854C52.8186 14.195 54.9628 17.909 54.9628 21.9282V40.0718C54.9628 44.091 52.8186 47.805 49.3378 49.8146L33.625 58.8864C30.1442 60.896 25.8558 60.896 22.375 58.8864L6.66219 49.8146C3.18143 47.805 1.03719 44.091 1.03719 40.0718V21.9282C1.03719 17.909 3.18143 14.195 6.66219 12.1854L22.375 3.11362Z" strokeWidth="1.5"></path></svg>
                        </div>
                        <div className='flex flex-col gap-1.5 w-3/4' >
                            <h2 className='text-lg font-normal'>{item.book_name}</h2>
                            <p className='text-[0.9rem] text-[#646464]'>Total Hadith- {item.total_haditsh}</p>
                        </div>
                    </div>
                   ))}
                </div>
            }
            {showChapter &&
            
            <div className='px-4 flex flex-col gap-y-2 cursor-pointer overflow-hidden hover:overflow-y-scroll max-h-[79%] custom-scrollbar'>
            {chapterList?.map(item => (
             <div key={item.id} className={`p-4 rounded-2xl hover-style flex items-center gap-4 ${item.id == 1 ? 'hover-bg':''}`}>
                 <div className='relative w-1/4 flex items-center justify-center'>
                     <h3 className='absolute '>{item.id}</h3>
                     <svg className="fill-subcat-hover" width="56" height="62" viewBox="0 0 56 62" fill="#343434" xmlns="http://www.w3.org/2000/svg"><path d="M22.375 3.11362C25.8558 1.104 30.1442 1.104 33.625 3.11362L49.3378 12.1854C52.8186 14.195 54.9628 17.909 54.9628 21.9282V40.0718C54.9628 44.091 52.8186 47.805 49.3378 49.8146L33.625 58.8864C30.1442 60.896 25.8558 60.896 22.375 58.8864L6.66219 49.8146C3.18143 47.805 1.03719 44.091 1.03719 40.0718V21.9282C1.03719 17.909 3.18143 14.195 6.66219 12.1854L22.375 3.11362Z" strokeWidth="1.5"></path></svg>
                 </div>
                 <div className='flex flex-col gap-1.5 w-3/4' >
                     <h2 className='text-lg font-normal'>{item.chapter_name}</h2>
                     <p className='text-[0.9rem] text-[#646464]'>Total Hadith- {item.hadith_range}</p>
                 </div>
             </div>
            ))}
         </div>
            }
            
       </div>
    )
}

export default LeftSidebar
