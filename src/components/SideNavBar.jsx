import React, {useState} from 'react';
import {Images} from "../utils/constants";
import {NavLink} from 'react-router-dom'
import {studentLink} from "../utils/staticData";


const SideNavBar = ({isOpen,toggle, navItem,sideColor,hoverColor}) => {



    return (
       <div  >
           <div className={`${isOpen ? 'flex': 'hidden'} bg-white md:z-2  md:fixed hidden md:flex md:flex-col md:min-w-[17%]  md:h-screen  top-0 absolute`}>
               <div className='flex items-center pt-5 pl-5 gap-x-2'>
                   <img src={Images.Logo} className='md:w-10 md:h-10 w-10 h-10'/>
                   <p className='md:text-xl  text-l font-medium'>PORTAL</p>
               </div>


               <ul className='mt-6 '>
                   {navItem && (
                       Object.keys(navItem).map((key)=>{
                           return  <li >
                               <NavLink to={navItem[key]['link']} className={({isActive})=>
                                   `p-4 block   ${
                                       isActive? `bg-[${hoverColor? hoverColor: '#edfdf6' }] text-[${sideColor? sideColor: '#51b37f' }] border-l-[${sideColor? sideColor: '#51b37f' }] border-l-4` : `hover:text-[${sideColor ? sideColor: '#51b37f' }]`
                                   }`
                               }>
                                   <div className='flex gap-x-2'>
                                       {navItem[key]['icon']}
                                       {key}
                                   </div>

                               </NavLink>

                           </li>
                       })
                   )}

               </ul>

           </div>





           <div className={`${isOpen ? 'flex flex-col': 'hidden'} fixed  bg-white shadow-md  md:hidden md:flex-col min-w-[50%] h-screen  top-0 absolute`}>
               <div>
                   <div className='flex items-center pt-5 pl-5'>
                       <img src={Images.Logo} className='md:w-13 md:h-13 w-10 h-10'/>
                       <p className='md:text-2xl  text-xl font-medium'>PORTAL</p>
                   </div>

               </div>


               <ul className='mt-3 '>
                   {navItem && (
                       Object.keys(navItem).map((key)=>{
                           return  <li >
                               <NavLink to={navItem[key]['link']} className={({isActive})=>
                                   `p-4 block   ${
                                       isActive? 'bg-[#edfdf6] text-[#51b37f] border-l-[#51b37f] border-l-4' : 'hover:text-[#51b37f]'
                                   }`
                               }>
                                   <div className='flex gap-x-2'>
                                       {navItem[key]['icon']}
                                       {key}
                                   </div>

                               </NavLink>

                           </li>
                       })
                   )}



               </ul>

           </div>
       </div>
    );
};

export default SideNavBar;