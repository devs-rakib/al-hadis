import React from 'react'
import { IoCopyOutline,IoShareSocialSharp  } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { ImInfo } from "react-icons/im";
import { RiShareBoxFill } from "react-icons/ri";

function ShareBox() {
    return (
        <div className="flex flex-wrap gap-1 xl:gap-8 sharebox-wrapper">
            <div className="relative flex flex-col items-center group">
                <button className="p-2"><IoCopyOutline /></button>
                <div className="absolute bottom-0 flex-col items-center hidden mb-5 group-hover:flex">
                    <span className="relative rounded-md z-10 p-4 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
                        Copy
                    </span>
                </div>
             </div>
            <div className="relative flex flex-col items-center group">
                <button className="p-2"><FaRegBookmark /></button>
                <div className="absolute bottom-0  flex-col items-center hidden mb-5 group-hover:flex">
                    <span className="relative rounded-md z-10 p-4 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
                        Bookmark
                    </span>
                </div>
             </div>
            <div className="relative flex flex-col items-center group">
                <button className="p-2"><IoShareSocialSharp /></button>
                <div className="absolute bottom-0  flex-col items-center hidden mb-5 group-hover:flex">
                    <span className="relative rounded-md z-10 p-4 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
                        Share
                    </span>
                </div>
             </div>
            <div className="relative flex flex-col items-center group">
                <button className="p-2"><ImInfo /></button>
                <div className="absolute bottom-0  flex-col items-center hidden mb-5 group-hover:flex">
                    <span className="relative rounded-md z-10 p-4 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
                        Report
                    </span>
                </div>
             </div>
            <div className="relative flex flex-col items-center group">
                <button className="p-2"><RiShareBoxFill /></button>
                <div className="absolute bottom-0  flex-col items-center hidden mb-5 group-hover:flex">
                    <span className="relative rounded-md z-10 p-4 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
                        Direct
                    </span>
                </div>
             </div>
        </div>
    )
}

export default ShareBox
