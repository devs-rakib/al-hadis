'use client';

import React, { useContext } from 'react'
import { FaBars } from "react-icons/fa";
import { LeftSidebarContext } from '../../Context/Context';


function LeftSIdebar() {
    const {isActive, setIsActive} = useContext(LeftSidebarContext);
    return (
       <>
            <div className='flex xl:hidden items-center gap-3 primary-bg px-5 py-5 rounded-xl '>
            <button onClick={()=>setIsActive(!isActive)}><FaBars className='text-xl'/></button>
            <p>Sahih Bukhari</p>
            </div>
       </>
    )
}

export default LeftSIdebar
