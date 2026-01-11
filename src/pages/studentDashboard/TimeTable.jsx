import React from 'react';
import HeaderText from "../../components/text";
import SmallText from "../../components/SmallText";
import {examtimeTable, PendingAssignment, timetableData} from "../../utils/staticData";

const TimeTable = () => {
    return (
        <div>
           <HeaderText text={'Time-Table'}/>

            <div className='flex flex-col  min-w-[80%]   justify-center   rounded-xl p-6 shadow-md  flex m-2  space-y-3  bg-white shadow-md'>
                <div className='flex justify-between'>
                    <p><SmallText text={'Jss2'}/></p>
                    {/*<p><SmallText text={'more Info'}/></p>*/}
                </div>
                <div className='flex justify-center item-center   '>

                    <div className="overflow-x-auto w-full max-w-5xl">
                        <table className="min-w-full min-h-[500px] border border-gray-300 divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                            <tr>
                                <th className=" w-[20%] px-4 py-2 text-left text-sm font-semibold text-gray-700">{'Day'}</th>
                                <th className=" w-[20%] px-4 py-2 text-left text-sm font-semibold text-gray-700">{'8am'}</th>
                                <th className=" w-[20%] px-4 py-2 text-left text-sm font-semibold text-gray-700">{'10am'}</th>
                                <th className=" w-[20%] px-4 py-2 text-left text-sm font-semibold text-gray-700">{'12pm'}</th>
                                <th className=" w-[20%] px-4 py-2 text-left text-sm font-semibold text-gray-700">{'2pm'}</th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                            { Object.entries(timetableData).map(([key,value],index)=>{
                                return (
                                    <tr className={`${index % 2 === 1 ? 'bg-gray-100':''}`} >
                                        <td className="px-4 py-2 text-sm text-gray-600">{key}</td>
                                        {Object.values(value).map((value)=>{
                                           return(<td className="px-4 py-2 text-sm text-gray-600">{value}</td>)
                                        })}
                                    </tr>
                                )
                            })}

                            </tbody>
                        </table>
                    </div>


                </div>
            </div>

            <HeaderText text='Examination Timetable'/>
            <div className='flex flex-col  min-w-[80%]   justify-center   rounded-xl p-6 shadow-md  flex m-2  space-y-3  bg-white shadow-md'>
                <div className='flex justify-between'>
                    <p><SmallText text={'Jss2'}/></p>
                    {/*<p><SmallText text={'more Info'}/></p>*/}
                </div>
                <div className='flex justify-center item-center   '>

                    <div className="overflow-x-auto w-full max-w-5xl">
                        <table className="min-w-full min-h-[500px] border border-gray-300 divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                            <tr>
                                <th className=" w-[20%] px-4 py-2 text-left text-sm font-semibold text-gray-700">{'Day'}</th>
                                <th className=" w-[20%] px-4 py-2 text-left text-sm font-semibold text-gray-700">{'8am'}</th>
                                <th className=" w-[20%] px-4 py-2 text-left text-sm font-semibold text-gray-700">{'10am'}</th>
                                <th className=" w-[20%] px-4 py-2 text-left text-sm font-semibold text-gray-700">{'12pm'}</th>
                                <th className=" w-[20%] px-4 py-2 text-left text-sm font-semibold text-gray-700">{'2pm'}</th>


                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                            { Object.entries(examtimeTable).map(([key,value],index)=>{
                                return (
                                    <tr className={`${index % 2 === 1 ? 'bg-gray-100':''}`} >
                                        <td className="px-4 py-2 text-sm text-gray-600">{key}</td>
                                        {Object.values(value).map((value)=>{
                                            return(<td className="px-4 py-2 text-sm text-gray-600">{value}</td>)
                                        })}
                                    </tr>
                                )
                            })}

                            </tbody>
                        </table>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default TimeTable;