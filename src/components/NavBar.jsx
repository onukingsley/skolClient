import React from 'react';
import {Images} from "../utils/constants";
import  {Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = ({isOpen, toggle}) => {
    return (
        <div  className='flex fixed  z-1 px-3 justify-between items-center shadow-md  bg-white h-[60px] w-full'>
            <div className='md:hidden flex items-center gap-x-3'>
                <img src={Images.Logo} className=' w-7 h-7' alt=""/>
                <p className={'md:text-2xl  text-xl font-medium'}>PORTAL</p>
            </div>

           <div className='flex space-x-5'>
               <img className={'w-7 h-7 rounded md:absolute md:right-[10px] bottom-[15px] '} src={Images.profile1} alt=""/>


               <p className={`${isOpen?'hidden':'flex'} md:hidden`} onClick={toggle}>
                   <Bars3Icon className='text-black h-7 w-7'/>
               </p>
               <p className={`${isOpen?'flex':'hidden'} md:hidden`} onClick={toggle}>
                   <XMarkIcon className='text-black h-7 w-7'/>
               </p>
           </div>
        </div>
    );
};

export default NavBar;