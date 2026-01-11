import React from 'react';
import HeaderText from "../../components/text";
import NotificationTile from "../../components/NotificationTile";
import {PendingAssignment} from "../../utils/staticData";
import {useStateContext} from "../../contexts/ContextProvider";

const Assignment = () => {
        const {pendingAssignment, assignment} = useStateContext()

    console.log(pendingAssignment.pendingAssignment)

    console.log('this is the pending assignement and the normal assignment', assignment)
    return (
        <div>
            {pendingAssignment.pendingAssignment &&
            <>
                <HeaderText text={"Pending Assignment"}/>
                {pendingAssignment.pendingAssignment.map((value, index, array)=>{
                    return <NotificationTile content={value.content} subject={value.subject.title} title={value.title}/>
                })}
            </>


            }

            {assignment &&
            <>
                <HeaderText text={"Recent Assignment"}/>
                {assignment.map((value, index, array)=>{
                    return <NotificationTile content={value.content} subject={value.subject} title={value.title}/>
                })}
            </>


            }


        </div>
    );
};

export default Assignment;