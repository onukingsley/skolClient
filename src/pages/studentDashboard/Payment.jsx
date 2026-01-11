import React, {useEffect, useState} from 'react';
import HeaderText from "../../components/text";
import {studentPayment} from "../../utils/staticData";
import {ArrowsUpDownIcon} from "@heroicons/react/24/outline";
import axiosClient from "../../service/axios_client.js";
import {useStateContext} from "../../contexts/ContextProvider.jsx";

const Payment = () => {

    const [payment, setPayment] = useState([])
    const [schoolFees, setSchoolFees] = useState(false)
    const [paymentLoading, setPaymentLoading] = useState(true)
    const [schoolFeesModal, setSchoolFeesModal] = useState('')
    const [toggle, setToggle] = useState(true)
    const {student, academicDetail, user} = useStateContext()

    /*todo: replace the code below when you begin to fetch from api*/
    useEffect(()=>{
        /*make a request to the payment table*/
        axiosClient.get(`v1/schoolFees?student_id[eq]=${student.id}&term_id[eq]=${academicDetail.term.id}&academic_session_id[eq]=${academicDetail.academic_session.id}&Student=true&Dues=true`)
            .then(({data})=>{
                console.log(data,'this is the schoolfeesData')

                /*this checks if there is a schoolFees record found */
                const schoolRecord = data.data.find((item)=>item.dues_id == 5
                )
                console.log(schoolRecord)
                if (schoolRecord){
                    setSchoolFees(true)
                }
                setPayment(data.data)
                setPaymentLoading(false)


                /*supposingly the duesId for schoolfees payment is 5*/
                /*axiosClient.get(`v1/schoolFees?student_id[eq]=${student.id}&term_id[eq]=${academicDetail.term.id}&dues_id[eq]=5&academic_session_id[eq]=${academicDetail.academic_session.id}&Student=true&Dues=true`)
                    .then(({data})=>{
                        console.log(data,'this checks if a student has paid fees')
                        setSchoolFees(data.data)
                    })*/
            })


    },[])

    const closePopup = ()=>{
        setSchoolFeesModal('hidden')
    }

    const handleSort = (map, param)=>{
        let sortedArray;
        if (toggle){
            if (typeof map[0][param] === 'string'){
                sortedArray = [...map].sort((a,b)=>{
                    return a[param].localeCompare(b[param])
                })
            }else{
                sortedArray = [...map].sort((a,b)=>{
                    return a[param] - b[param]
                })
            }
        }else{
            if (typeof map[0][param] === 'string'){
                sortedArray = [...map].sort((a,b)=>{
                    return b[param].localeCompare(a[param])
                })
            }else{
                sortedArray = [...map].sort((a,b)=>{
                    return b[param] - a[param]
                })
            }
        }



        setPayment(sortedArray)
    }


    return (

        <>

        {paymentLoading? <p>Loading Payment....</p> :
            <div>
                {!schoolFees && (
                    <div className={`bg-red-100 m-4 p-3 flex ${schoolFeesModal}  justify-between`}>
                        <p>{`No School Fees Record Found this Term for ${user.name}`}</p>
                        <p className='text-bold' onClick={closePopup}>X</p>
                    </div>
                )}

                <div className={'min-w-[80%] pb-4 shadow-md rounded-2xl'}>
                    <HeaderText text={'Payment'} className={'px-5 py-4'}/>

                    <div className={'mb-10 m-auto overflow-x-auto w-full max-w-5xl'}>
                        <table className="min-w-full min-h-fit border border-gray-300 divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                            <tr>
                                <th className=" w-[20%] px-4 py-2 text-left text-sm font-semibold text-gray-700 ">{'Name'}  </th>
                                <th onClick={()=>{handleSort(payment,'amount'); setToggle((toggle)=>!toggle)}} className=" w-[20%] px-4 py-2 text-left text-sm font-semibold text-gray-700 ">{'Amount'}<ArrowsUpDownIcon className={'w-5 h-5 inline'} /></th>
                                <th onClick={()=>{handleSort(payment,'transaction_id');  setToggle((toggle)=>!toggle)}} className=" w-[20%] px-4 py-2 text-left text-sm font-semibold text-gray-700 ">{'Transactional Id'}<ArrowsUpDownIcon className={'w-5 h-5 inline'} /></th>

                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                            { payment.map((value, index, array)=>{
                                return (
                                    <tr className={`${index % 2 === 1 ? 'bg-gray-100':'bg-white'}`} >
                                        <td className="px-4 py-2 text-sm text-gray-600">{value.dues.title}</td>
                                        <td className="px-4 py-2 text-sm text-gray-600">{value.amount}</td>
                                        <td className="px-4 py-2 text-sm text-gray-600">{value.transaction_id}</td>


                                    </tr>
                                )
                            })}

                            </tbody>
                        </table>
                    </div>








                </div>




            </div>

            }

        </>
    );
};

export default Payment;