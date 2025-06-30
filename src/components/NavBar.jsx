import React from 'react';
import {Images} from "../utils/constants";

const NavBar = ({isOpen, toggle}) => {
    return (
        <div  className='flex px-3 justify-between items-center  bg-white h-[10%] w-full'>
            <div className='md:hidden flex items-center gap-x-3'>
                <img src={Images.Logo} className=' w-7 h-7' alt=""/>
                <p className={'md:text-2xl  text-xl font-medium'}>PORTAL</p>
            </div>

            <p className={`${isOpen?'hidden':'flex'} md:hidden`} onClick={toggle}>
                menu
            </p>
            <p className={`${isOpen?'flex':'hidden'} md:hidden`} onClick={toggle}>
                X
            </p>
        </div>
    );
};

export default NavBar;