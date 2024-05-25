'use client';
import React, { useState } from 'react'
import LeftNavbar from '../LeftNavbar/LeftNavbar'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import RightSidebar from '../RightSidebar/RightSidebar'
import Hadiths from '../Hadiths/Hadiths'
import { LeftSidebarContext, RightSidebarContext } from '../Context/Context';
import Header from '../Header/Header';

function HomePart() {
    const [isActive, setIsActive] = useState(false)
    const [isRightSibarShow, setIsRightSibarShow] = useState(false)


    return (
        <LeftSidebarContext.Provider value={{ isActive, setIsActive }} >
             <RightSidebarContext.Provider value={{ isRightSibarShow, setIsRightSibarShow }}>
                <Header/>
                <div className='md:flex justify-between'>
                
                    <div className=' h-full fixed   w-full  primary-bg'>
                        <div className='grid  xl:grid-cols-[6rem,auto] max-w-full '>
                            <div className="flex fixed xl:static bottom-0 left-0 right-0 h-[60px] xl:h-auto  xl:block z-50 ">
                                <LeftNavbar/>
                            </div>
                        
                            <div className='xl:rounded-tl-3xl py-6 secondary-bg grid
                            lg:grid-cols-1 
                            xl:grid-cols-[350px,1fr]
                            2xl:grid-cols-[350px,auto,350px]
                            gap-6 px-6'>
                                <div className={`${isActive ? '' : 'hidden'} xl:block`}>
                                    <LeftSidebar/>
                                </div>
                                <div className=''>
                                    <Hadiths/>
                                </div>
                                <div className={`${isRightSibarShow ? '' : 'hidden'} xl:block`}>
                                    <RightSidebar/>    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </RightSidebarContext.Provider>           
        </LeftSidebarContext.Provider>
    )
}

export default HomePart


