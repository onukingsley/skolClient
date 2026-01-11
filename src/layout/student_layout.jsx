import React, {useState} from 'react';
import {Outlet} from 'react-router-dom'
import SideNavBar from "../components/SideNavBar";
import NavBar from "../components/NavBar";
import {studentLink} from "../utils/staticData";
import {useStateContext} from "../contexts/ContextProvider";

const StudentLayout = () => {
    const [isOpen,setIsOpen] = useState(false);

    const {loading} = useStateContext()

    let navItem
    navItem = studentLink

    /*todo: navitem should be assigned to the static data based on the usertype
       example if userrole is student; then navItem should be studentLink
        if(userType == student){
        navItem  = StudentLink
       }

    * */


    const toggle = ()=>{
        setIsOpen(!isOpen)
        console.log('pressed')
        console.log(isOpen)
    }
    if (loading  ){
        return <p>
            Loading.... wait while fetching data
        </p>
    }else{
        return (
            <div className='bg-[#f5f6fe]  relative '>

                <NavBar isOpen={isOpen} toggle={toggle}/>

                <div className='md:flex flex-row'>
                    <SideNavBar isOpen={isOpen} toggle={toggle} navItem={navItem}/>
                    <div className='md:absolute mx-auto w-[90%]  pt-[67px] md:w-[74%] md:flex-1 left-[22%]'>
                        <Outlet/>
                    </div>
                </div>



            </div>
        );
    }

};

export default StudentLayout;