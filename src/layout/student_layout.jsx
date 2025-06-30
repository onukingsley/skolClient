import React, {useState} from 'react';
import {Outlet} from 'react-router-dom'
import SideNavBar from "../components/SideNavBar";
import NavBar from "../components/NavBar";

const StudentLayout = () => {
    const [isOpen,setIsOpen] = useState(false);

    const toggle = ()=>{
        setIsOpen(!isOpen)
        console.log('pressed')
        console.log(isOpen)
    }
    return (
        <div className='bg-[#f5f6fe] relative h-screen'>

                <NavBar isOpen={isOpen} toggle={toggle}/>

                <div className='flex flex-row'>
                    <SideNavBar isOpen={isOpen} toggle={toggle}/>
                    <div className='md:absolute left-[22%]'>
                        <Outlet/>
                    </div>
                </div>



        </div>
    );
};

export default StudentLayout;