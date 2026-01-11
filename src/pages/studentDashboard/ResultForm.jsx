import React, {useEffect, useMemo, useRef, useState} from 'react';
import {studentResult, term, timetableData} from "../../utils/staticData";
import axios from "axios";
import AxiosClient from "../../service/axios_client";
import HeaderText from "../../components/text";
import {ArrowsUpDownIcon} from "@heroicons/react/24/outline";
import {useStateContext} from "../../contexts/ContextProvider";

const ResultForm = () => {

    /*
    * todo: fetch all the latest session and list of terms and drop it on the drop down menu
    *  fetch the data and display on the tray
    *
    * todo: onSubmit send the data to the result using the userId, Term and Session with axios
    *  put the data gotten into a context provider and move to the next screen where the result is displayed
    *
    * */


    const [termValue, setTermValue] = useState()
    const [sessionValue, setSessionValue] = useState(null)
    const [errorValue, seterrorValue] = useState([])
    const [sessiondb, setSessiondb] = useState([])
    const [result, setResult] = useState([])
    const [pin, setPin] = useState()

    const {student} = useStateContext()

/*
* 1. modify the backend and send the pin to the endpoint "getStudent result" with parameters student_id, term_id,
*  academic_session_id, and the pin
*
* 2. At the backend: if the pin request sent is found in the database proceed to fetch result of student by id, term
*    and academic_session_id; if pin isnt found return 'Pin not found', if pin user_id is same as user_id and pin_usage <5  return 'pin already used by you'
* */
    useEffect(()=>{
        AxiosClient.get('v1/academicSession')
            .then(({data})=>{
                //todo: check what exactly the data fetches
                setSessiondb(data.data)
                console.log('this is the session and their id',data.data)
            }).catch((error)=>{
                console.log(error)
        })
    },[])



    const handleSort = (map, param)=>{
        const sortedArray = [...map].sort((a,b)=>{
           return b[param] - a[param]
        })

        setResult(sortedArray)
    }


    // OnClick of the get result button
    const handleSubmit = ()=>{

        //setResult(studentResult)

        /*checks if token is in the database*/
/*
        AxiosClient.get(`/resultCheck?token[eq]=${pin}`)
            .then(({data})=>{
                const tokenData = data
                /!*todo: make sure to check what the data is *!/
                if (data ){
                    if (data.attempt === 0){
                        //todo: console change to modal
                        console.log('Pin has been used multiple times')


                    }else{
                        if (sessionValue && termValue ){
                            /!*fetch the result of the user using the selected term and session*!/
                            AxiosClient.get(`/results?id[eq]=${user.id}&session_id[eq]=${sessionValue}&term_id[eq]=${termValue}`)
                                .then(({data})=>{
                                    setResult(data)
                                    /!*this increment the number of times the card has been used*!/
                                    let no_of_attempt = tokenData.attempt - 1
                                    AxiosClient.patch(`/resultCheck/${tokenData.id}`,{'attempt': no_of_attempt})
                                        .then(({data})=>{
                                            console.log(data)
                                        })

                                })
                        }else
                            seterrorValue((value)=>(
                                 [...value, 'Please select a Term and Session']
                            ))
                    }

                }else {
                    //todo Console to be changed to error modal
                    seterrorValue((value)=>(
                        [...value, 'Invalid Pin']
                    ))
                    console.log('Invalid Pin ')
                }
            })
*/

        AxiosClient.get(`v1/getStudentResult?pin=${pin}&studentId=${student.id}&termId=${termValue}&academicSessionId=${sessionValue}`)
            .then(({data})=>{
                console.log(data.result)
                setResult(data.result)
            }).catch(e=>{
                console.log(e)
                alert(e.response.data.error)
        })


    }






    return (
        <div className={'shadow-md rounded-2xl min-w-[80%]'}>
            <HeaderText text={'Check Result'}/>
           <div className={'flex flex-col justify-center gap-y-10 items-center '}>
               <div className={'md:min-w-[60%] min-w-full gap-y-4  flex md:flex-row flex-col items-center md:justify-between md:align-center'}>
                   <div className={'flex flex-col w-[35%] '}>
                       <label className={'md:mb-4 font-medium'}>Select term</label>
                       <select value={termValue} onChange={(e)=>{setTermValue(e.target.value)}}   name="term" id="" className='border border-gray-300 rounded px-4 py-2 focus:outline-none min-w-full  '>
                           {term.map((academicSession,index,array)=>{
                               return (
                                   <option value={academicSession.id}>{academicSession.name}</option>
                               )
                           })}

                       </select>


                   </div>
                   <div className={'flex flex-col w-[35%] '}>
                       {sessiondb != null && (
                           <>
                               <label className={'md:mb-4 font-medium'}>Select Session</label>
                               <select value={sessionValue} onChange={(e)=>{setSessionValue(e.target.value)}}   name="term" id="" className='border border-gray-300 rounded px-4 py-2 focus:outline-none min-w-full  '>
                                   {sessiondb.map((term,index,array)=>{

                                       return (
                                           <option value={term.id}>{term.id}</option>
                                       )
                                   })}

                               </select>
                           </>

                       )}
                   </div>

               </div>

               <div className={'flex flex-col min-w-[35%] justify-center items-center'}>
                   <input className={'border border-gray-400 border-2 w-full rounded-2xl p-2 '} placeholder={'Please Enter Your Scratch Pin'} type="text" onChange={(value)=>{setPin(value.target.value.trim())}} value={pin}/>
                   <button className={'bg-[#51b37f] px-5 mt-5 py-2 rounded-2xl text-white text-medium w-fit text-center'} onClick={handleSubmit}>Check Result</button>
               </div>

                {/*todo when result is fetching from database carry the table to commented div*/}
               {/*{result.length !==0 ? (

               ):(<HeaderText className={'mb-10'} text={'Result not Found'}/>) }*/}

               <div className={'mb-10 overflow-x-auto w-full max-w-5xl'}>
                   <table className="min-w-full min-h-[500px] border border-gray-300 divide-y divide-gray-200">
                       <thead className="bg-gray-100">
                       <tr>
                           <th className=" w-[20%] px-4 py-2 text-left text-sm font-semibold text-gray-700">{'Subject'}</th>
                           <th onClick={()=>{handleSort(result,'test1')}} className=" w-[20%] px-4 py-2 text-left text-sm font-semibold text-gray-700">{'Test 1'} <ArrowsUpDownIcon className={'w-5 h-5 inline'}/></th>
                           <th onClick={()=>{handleSort(result,'test2')}} className=" w-[20%] px-4 py-2 text-left text-sm font-semibold text-gray-700">{'Test 2'} <ArrowsUpDownIcon className={'w-5 h-5 inline'}/></th>
                           <th onClick={()=>{handleSort(result,'exam')}} className=" w-[20%] px-4 py-2 text-left text-sm font-semibold text-gray-700">{'Exam'} <ArrowsUpDownIcon className={'w-5 h-5 inline'}/></th>
                           <th className=" w-[20%] px-4 py-2 text-left text-sm font-semibold text-gray-700">{'Grade'}</th>
                           <th className=" w-[20%] px-4 py-2 text-left text-sm font-semibold text-gray-700">{'Remark'}</th>
                       </tr>
                       </thead>
                       <tbody className="bg-white divide-y divide-gray-100">
                       { result ? result.map((value, index, array)=>{
                           return (
                               <tr className={`${index % 2 === 1 ? 'bg-gray-100':'bg-white'}`} >
                                   <td className="px-4 py-2 text-sm text-gray-600">{value.subject.title}</td>
                                   <td className="px-4 py-2 text-sm text-gray-600">{value.test1}</td>
                                   <td className="px-4 py-2 text-sm text-gray-600">{value.test2}</td>
                                   <td className="px-4 py-2 text-sm text-gray-600">{value.exam}</td>
                                   <td className="px-4 py-2 text-sm text-gray-600">{value.grade_scale.grade}</td>
                                   <td className="px-4 py-2 text-sm text-gray-600">{value.grade_scale.remark}</td>

                               </tr>
                           )
                       }):<p className="text-center">No result Data Found</p>}

                       </tbody>
                   </table>
               </div>

           </div>

        </div>
    );
};

export default ResultForm;