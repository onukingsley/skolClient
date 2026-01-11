import React from 'react';
import HeaderText from "../../components/text.jsx";
import TitleTile from "../../components/TitleTile.jsx";

const StaffIndex = () => {
    /* This page would contain the following
    * 1. show the review of the subject
    * 2. show the current week and the topic to be taught. would need to edit the database and add a weeks table
    *      with columns week, current_week, should be from week one - week 14
    *  - also create a scheme of work table with column subject_id, week_id, topic and description.
    * 3. show no of subject teacher is teaching and on click a modal should display the subject title and description
    * 4. show number of students that the teacher is teaching
    * */
    return (
        <div>
            <HeaderText text={'Overview'}/>
            <div className=' flex md:flex-row flex-col mb-4  md:justify-around md:items-center  w-full '>

                <div className='md:min-w-[100%] flex  justify-around flex-row'>
                    <TitleTile value={'SS2 Science'} content={4} header={'Subject'}/>
                    <TitleTile value={'class avg: 50%'} content={32} header={'Average'}/>

                    <TitleTile value={'pending'} content={78} header={'Assignment'}/>
                    <TitleTile value={'pending'} content={78} header={'Assignment'}/>
                </div>
            </div>
        </div>
    );
};

export default StaffIndex;