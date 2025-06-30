import React, {useState} from 'react';
import {Images} from "../utils/constants";
import {NavLink} from 'react-router-dom'


const SideNavBar = ({isOpen,toggle}) => {



    return (
       <div>
           <div className={`${isOpen ? 'flex': 'hidden'} bg-white hidden md:flex md:flex-col md:min-w-[17%] md:h-screen  top-0 absolute`}>
               <div className='flex items-center pt-5 pl-5'>
                   <img src={Images.Logo} className='md:w-13 md:h-13 w-10 h-10'/>
                   <p className='md:text-2xl  text-xl font-medium'>PORTAL</p>
               </div>


               <ul className='mt-3 '>
                   <li >
                       <NavLink to='/student/3' className={({isActive})=>
                           `p-4 block   ${
                               isActive? 'bg-[#edfdf6] text-[#51b37f] border-l-[#51b37f] border-l-4' : 'hover:text-[#51b37f]'
                           }`
                       }>
                           Dashboard
                       </NavLink>

                   </li>
                   <li >
                       <NavLink to='/student/assignment' className={({isActive})=>
                           `p-4 block   ${
                               isActive? 'bg-[#edfdf6] text-[#51b37f] border-l-[#51b37f] border-l-4' : 'hover:text-[#51b37f]'
                           }`
                       }>
                           Assignment
                       </NavLink>

                   </li>
                   <li >
                       <NavLink to='/student/timetable' className={({isActive})=>
                           `p-4 block   ${
                               isActive? 'bg-[#edfdf6] text-[#51b37f] border-l-[#51b37f] border-l-4' : 'hover:text-[#51b37f]'
                           }`
                       }>
                           Time Table
                       </NavLink>

                   </li>

                   <li >
                       <NavLink to='/student/result' className={({isActive})=>
                           `p-4 block   ${
                               isActive? 'bg-[#edfdf6] text-[#51b37f] border-l-[#51b37f] border-l-4' : 'hover:text-[#51b37f]'
                           }`
                       }>
                           Result
                       </NavLink>

                   </li>

                   <li >
                       <NavLink to='/student/attendance' className={({isActive})=>
                           `p-4 block   ${
                               isActive? 'bg-[#edfdf6] text-[#51b37f] border-l-[#51b37f] border-l-4' : 'hover:bg-[#edfdf6]'
                           }`
                       }>
                           Attendance
                       </NavLink>

                   </li>
                   <li >
                       <NavLink to='/student/payment' className={({isActive})=>
                           `p-4 block   ${
                               isActive? 'bg-[#edfdf6] text-[#51b37f] border-l-[#51b37f] border-l-4' : 'hover:bg-[#edfdf6]'
                           }`
                       }>
                           Payment
                       </NavLink>

                   </li>
                   <li >
                       <NavLink to='/student/Subject' className={({isActive})=>
                           `p-4 block   ${
                               isActive? 'bg-[#edfdf6] text-[#51b37f] border-l-[#51b37f] border-l-4' : 'hover:text-[#51b37f]'
                           }`
                       }>
                           Subject
                       </NavLink>

                   </li>
               </ul>

           </div>





           <div className={`${isOpen ? 'flex flex-col': 'hidden'} bg-white  md:hidden md:flex-col min-w-[50%] h-screen  top-0 absolute`}>
               <div>
                   <div className='flex items-center pt-5 pl-5'>
                       <img src={Images.Logo} className='md:w-13 md:h-13 w-10 h-10'/>
                       <p className='md:text-2xl  text-xl font-medium'>PORTAL</p>
                   </div>

               </div>


               <ul className='mt-3 '>
                   <li >
                       <NavLink to='/student/3' className={({isActive})=>
                           `p-4 block   ${
                               isActive? 'bg-[#edfdf6] text-[#51b37f] border-l-[#51b37f] border-l-4' : 'hover:text-[#51b37f]'
                           }`
                       }>
                           Dashboard
                       </NavLink>

                   </li>
                   <li >
                       <NavLink to='/student/assignment' className={({isActive})=>
                           `p-4 block   ${
                               isActive? 'bg-[#edfdf6] text-[#51b37f] border-l-[#51b37f] border-l-4' : 'hover:text-[#51b37f]'
                           }`
                       }>
                           Assignment
                       </NavLink>

                   </li>
                   <li >
                       <NavLink to='/student/timetable' className={({isActive})=>
                           `p-4 block   ${
                               isActive? 'bg-[#edfdf6] text-[#51b37f] border-l-[#51b37f] border-l-4' : 'hover:text-[#51b37f]'
                           }`
                       }>
                           Time Table
                       </NavLink>

                   </li>

                   <li >
                       <NavLink to='/student/result' className={({isActive})=>
                           `p-4 block   ${
                               isActive? 'bg-[#edfdf6] text-[#51b37f] border-l-[#51b37f] border-l-4' : 'hover:text-[#51b37f]'
                           }`
                       }>
                           Result
                       </NavLink>

                   </li>

                   <li >
                       <NavLink to='/student/attendance' className={({isActive})=>
                           `p-4 block   ${
                               isActive? 'bg-[#edfdf6] text-[#51b37f] border-l-[#51b37f] border-l-4' : 'hover:bg-[#edfdf6]'
                           }`
                       }>
                           Attendance
                       </NavLink>

                   </li>
                   <li >
                       <NavLink to='/student/payment' className={({isActive})=>
                           `p-4 block   ${
                               isActive? 'bg-[#edfdf6] text-[#51b37f] border-l-[#51b37f] border-l-4' : 'hover:bg-[#edfdf6]'
                           }`
                       }>
                           Payment
                       </NavLink>

                   </li>
                   <li >
                       <NavLink to='/student/Subject' className={({isActive})=>
                           `p-4 block   ${
                               isActive? 'bg-[#edfdf6] text-[#51b37f] border-l-[#51b37f] border-l-4' : 'hover:text-[#51b37f]'
                           }`
                       }>
                           Subject
                       </NavLink>

                   </li>
               </ul>

           </div>
       </div>
    );
};

export default SideNavBar;