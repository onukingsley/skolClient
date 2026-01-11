import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import HeaderText from "../../components/text";
import TitleTile from "../../components/TitleTile";
import {Bar} from 'react-chartjs-2'
import BarChart from "../../components/charts/BarCharts";
import LineChart from "../../components/charts/LineChart";
import SmallText from "../../components/SmallText";
import {PendingAssignment} from "../../utils/staticData";
import {useStateContext} from "../../contexts/ContextProvider";
import axiosClient from "../../service/axios_client";

const  StudentIndex = ()=> {


    /*
    * todo:
    * 1. fetch the student and data from context API
    * 2. fetch from the result table where assignment1 or assignment2 is -
    * 3. fetch from assignment where term and subject
    * */

    const {user,student,pendingAssignment,assignment,loading,error,subject,attendance,academicDetail,testAndAssignmentData,comparisonData} = useStateContext()

    const [assignmentData, setAssignmentData] = useState([]);
    const [testData, setTestData] = useState([]);
    const [loadingGraphData, setLoadingGraphData] = useState(true);

    let averageAttendance
    if (attendance.attended !== 0){
        averageAttendance =parseInt(attendance.attended) / parseInt(attendance.totalAttendance)  * 100
    }else {
        averageAttendance = 0
    }






    console.log(user)
    console.log(student)
    console.log(subject)

    console.log('this are test and assignment data',testAndAssignmentData)


    const {id} = useParams();

    if (loading  ){
        return <p>
            Loading.... wait while fetching data
        </p>
    }
else {
        return (
            <div>
                {error}
                <HeaderText text={'Overview'}/>
                <div className='m-auto flex md:flex-row flex-col mb-4  md:justify-around md:items-center  w-full '>
                    <div className='md:min-w-[50%] flex  justify-around flex-row '>
                        <TitleTile value={`${averageAttendance}%`} content={`${attendance.attended}/${attendance.totalAttendance}`} header={'Attendance'}/>
                        {/*<TitleTile value={student?.class_type.class_type_name} content={subject[0]?.subject?.length} header={'Subject'}/>*/}
                        <TitleTile value={student?.class_type.class_type_name} content={subject.length} header={'Subject'}/>
                    </div>
                    <div className='md:min-w-[50%] flex  justify-around flex-row'>
                        <TitleTile value={'class avg: 50%'} content={student.academic_average} header={'Average'}/>

                        <TitleTile value={'pending'} content={pendingAssignment.countOfPendingAssignment} header={'Assignment'}/>
                    </div>
                </div>

                <HeaderText text={'Performance'} className={'mb-6'}/>
                <div className='flex md:flex-row flex-col justify-around items-center '>
                    <div className='flex flex-col  min-w-[80%]  md:min-w-[48%] justify-center   rounded-xl p-6 shadow-md  flex m-2  space-y-3    min-h-[50%]  bg-white shadow-md'>
                        <div className='flex justify-between'>
                            <SmallText text={'Test'}/>
                            <SmallText text={'more Info'}/>
                        </div>
                        <div className='flex justify-center item-center '>
                            {testAndAssignmentData.test?.length !== 0 && <BarChart inputData={testAndAssignmentData?.test}/>}
                        </div>
                    </div>
                    <div className='flex flex-col  min-w-[80%]  md:min-w-[48%] justify-center   rounded-xl p-6 shadow-md  flex m-2  space-y-3    min-h-[50%]  bg-white shadow-md'>
                        <div className='flex justify-between'>
                            <p><SmallText text={'Assignment'}/></p>
                            <p><SmallText text={'more Info'}/></p>
                        </div>
                        <div className='flex justify-center item-center '>
                            {testAndAssignmentData.assignment?.length !== 0 && <BarChart inputData={testAndAssignmentData?.assignment}/>}
                        </div>
                    </div>
                </div>

                <div className='mt-3'>
                    <HeaderText text={'Progress'}/>
                    <div className='flex md:flex-row flex-col justify-around items-center md:items-start '>
                        <div className='flex flex-col min-w-[80%]  md:min-w-[48%] justify-center   rounded-xl p-6 shadow-md  flex m-2  space-y-3    min-h-[50%]  bg-white shadow-md'>
                            <div className='flex justify-between'>
                                <p><SmallText text={'Term Comparison'}/></p>
                                <p><SmallText text={'more Info'}/></p>
                            </div>
                            <div className='flex justify-center item-center '>
                                {comparisonData.totalArray && <LineChart inputData={comparisonData}/>}
                            </div>
                        </div>

                        <div className='flex flex-col  min-w-[80%]  md:min-w-[48%] justify-center    rounded-xl p-6 shadow-md  flex m-2  space-y-3    min-h-[50%]  bg-white shadow-md'>
                            <div className='flex justify-between'>
                                <p><SmallText text={'Pending Assignment'}/></p>
                                <p><SmallText text={'more Info'}/></p>
                            </div>
                            <div className='flex justify-center item-center   '>

                                <div className="overflow-x-auto w-full max-w-5xl">
                                    <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
                                        <thead className="bg-gray-100">
                                        <tr>

                                            {Object.keys(PendingAssignment[0]).map((key)=>{
                                                return (<th className=" px-4 py-2 text-left text-sm font-semibold text-gray-700">{key}</th>


                                                )
                                            })}


                                        </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-100">
                                         {
                                        pendingAssignment && (

                                            pendingAssignment.pendingAssignment?.slice(0,5).map((value, index, array)=>{

                                                return ( <tr className={`${index % 2 === 1 ? 'bg-gray-100':''}`} >
                                                    <td className="px-4 py-2 text-sm text-gray-600">{value.title}</td>
                                                    <td className="px-4 py-2 text-sm text-gray-800">{value.subject.title}</td>
                                                    <td className="px-4 py-2 text-sm text-gray-800">{value.content?.length<100 ? value.content : `${value.content.slice(0,50)}...`}</td>

                                                </tr>)
                                            })
                                        )

                                    }

                                        </tbody>
                                    </table>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default StudentIndex