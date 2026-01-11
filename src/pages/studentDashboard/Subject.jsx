import React from 'react';
import NotificationTile from "../../components/NotificationTile.jsx";
import HeaderText from "../../components/text.jsx";
import {useStateContext} from "../../contexts/ContextProvider.jsx";

const Subject = () => {

    const {user, student,subject} = useStateContext()

    console.log(subject)

    return (
       <>
           <HeaderText text={"Subject List"}/>
           {subject.map((value, index, array)=>{
               return <NotificationTile subText={"Subject"} cardText={value[0].staff?.user.name} iconText={"View Scheme of Work"} content={value[0].description} subject={value[0].title} title={value.title}/>
           })}       </>
    );
};

export default Subject;