import {createContext, useContext, useEffect, useState} from 'react'
import axios from "axios";
import axiosClient from "../service/axios_client";
import {useNavigate} from "react-router-dom";

export const ContextProvider = createContext({
    user : null,
    setUser : ()=>{},
    token : null,
    setToken : ()=>{},
    assignment: null,
    setAssignment: ()=>[],
    pendingAssignment: [],
    setPendingAssignment: ()=> {},
    attendance: null,
    setAttendance : ()=>[],
    academicDetail : null,
    setAcademicDetail: ()=>{},
    result: null,
    setResult: ()=>[],
    subject: null,
    setSubject: ()=>{},
    student: null,
    setStudent: ()=>{},
    testAndAssignmentData:null,
    setTestAndAssignmentData: ()=>{},
    comparisonData:null,
    classTypeData:null,
    setComparisonData: ()=>{},
    setClassTypeData: ()=>{},

    loading:null,
    setLoading:null,
    error:null,
    setError: ()=>[]

    /*for staff state values*/
    /*for guardian state values*/
    /*for admin state values*/
})

export const StateProvider = ({children})=>{

    /*This shows the Student state*/
    const [user, setUser] = useState(null)
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))
    const [assignment, setAssignment] = useState(null)
    const [pendingAssignment, setPendingAssignment] = useState([])
    const [attendance, setAttendance] = useState([])
    const [academicDetail, setAcademicDetail] = useState(null)
    const [result, setResult] = useState(null)
    const [subject, setSubject] = useState({})
    const [classTypeData, setClassTypeData] = useState({})
    const [student, setStudent] = useState({})
    const [testAndAssignmentData, setTestAndAssignmentData] = useState({})
    const [comparisonData, setComparisonData] = useState({})



    /*this shows the user State*/




    /*Loading and error state*/
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState([])


    let userdata, currentAcademicDetail, studentData


    /*set token to the localStorage as well*/
    const setToken = (token)=>{
        _setToken(token)
        if(token){
            localStorage.setItem('ACCESS_TOKEN', token)
        }else{
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }
    useEffect(()=>{
        /*
         alternative to .then
         try {
                    const {data} = await axiosClient.get('v1/user');
                }catch (e){
                    console.log(e)
                    localStorage.removeItem('ACCESS_TOKEN')
                }*/
        /*
        * todo: fetch *user, *academicDetail, *pendingAssignment, *attendance,
        * */


        axiosClient.get('v1/user?student=true')
            .then(async ({data})=>{

                /*set user to state*/
                setUser(data)
                userdata = data

                console.log('this is data', data.user_type)

                /*get term and session then set CurrentAcademicDetail to state*/

                /*const currentAcademicDetail =await axiosClient('v1/getCurrentTermAndSession')*/

                axiosClient.get(`v1/getCurrentTermAndSession`)
                    .then(({data})=>{
                        currentAcademicDetail = data
                        console.log(data)
                        setAcademicDetail(data)
                    }).catch((e)=>{
                    console.log(e)
                    setError((error)=>{
                        return [...error,e]
                    })
                    setLoading(false)
                    throw e
                })

                console.log(currentAcademicDetail)
                console.log(data)


                if (data.user_type === 0){
                    /*admin*/

                }else if(data.user_type === 'staff'){
                    console.log('staff mode activated')
                    axiosClient.get(`v1/getStaffOverview?user_id=${data.id}`)
                        .then(({data})=>{
                            console.log(data)
                        }).then(()=>{
                            setLoading(false)
                    })
                   /*staff*/
                }else if (data.user_type ==='student'){
                    /*student*/
                    console.log('seen')

                    axiosClient.get(`v1/getStudentOverview?user_id=${data.id}`)
                        .then(({data})=>{
                            console.log(data, 'THIS HOLDS THE DATA FOR THE STUDENT OVERVIEW')
                            setStudent(data.studentDetail)
                            studentData = data.studentDetail

                            setAcademicDetail(currentAcademicDetail)

                            setPendingAssignment(data.pendingAssignment)

                            setAttendance(data.attendance)
                            setAssignment(data.assignment)

                            setTestAndAssignmentData(data.testAndAssignmentChart)
                            setClassTypeData(data.classType)
                            setSubject(data.subject)
                            setComparisonData(data.comparisonChart)

                        }).then(()=>{
                            setLoading(false)
                    }).catch(e=>console.log(e))

    /*                //const studentDetails = await axiosClient.get(`v1/getStudentDetail?user_id=${data.id}`)
                    axiosClient.get(`v1/getStudentDetail?user_id=${data.id}&classType=true`)
                        .then(({data})=>{
                            studentData = data
                            setStudent(data)
                            /!*get student's pending assignment and set it to state; setPendingAssignment*!/
                            console.log(currentAcademicDetail.term)
                            const term_id =  currentAcademicDetail.term.id
                            const academic_session_id =  currentAcademicDetail.academic_session.id
                            const student_id = data.id
                            const class_type_id = data.class_type_id
                            console.log('this is the class id',currentAcademicDetail)
                            setAcademicDetail(currentAcademicDetail)
                            //console.log('this is the term_id',term_id,academic_session_id,studentDetails.data)
                            //console.log(studentDetails.data,student_id,class_type_id)

                            axiosClient(`v1/getPendingAssignment?term_id=${term_id}&academic_session_id=${academic_session_id}&student_id=${student_id}`)
                                .then(({data})=>{
                                    console.log(data)
                                    setPendingAssignment(data)
                                }).catch((e)=>{
                                console.log(e)
                                setError((error)=>{
                                    return [...error,e]
                                })
                                setLoading(false)
                                throw e
                            })

                            /!* get total, missing and attended attendance*!/
                            axiosClient(`v1/getAttendance?term_id=${term_id}&academic_session_id=${academic_session_id}&student_id=${student_id}`)
                                .then(({data})=>{
                                    setAttendance(data)
                                }).catch((e)=>{
                                console.log(e)
                                setError((error)=>{
                                    return [...error,'error: could not get Attendance, Please report to Admin']
                                })
                                setLoading(false)
                                throw e
                            })
                            /!*get all assignment for the term*!/
                            axiosClient(`v1/assignment?term_id=${term_id}&academic_session_id=${academic_session_id}`)
                                .then(({data})=>{
                                    setAssignment(data)

                                }).catch((e)=>{
                                console.log(e)
                                setError((error)=>{
                                    return [...error,'error: could not get Assignment, Please report to Admin']
                                })
                                setLoading(false)
                                throw e
                            })

                            axiosClient.get(`v1/getTestAndAssignmentData?term_id=${term_id}&academic_session_id=${academic_session_id}&student_id=${student_id}&Student=true`)
                                .then(({data})=>{
                                    console.log('this is the test and assignment data',data.assignment)
                                    setTestAndAssignmentData(data)


                                })
                                .catch((e)=>{
                                    console.log(e)
                                    setError((error)=>{
                                        return [...error,'error: could not get Class Details of student, Please report to Admin']
                                    })
                                   setLoading(false)
                                    throw e
                                })

                            /!*this would be used for the staff or form teacher of a particular class*!/
                            axiosClient.get(`v1/getClassType?id=${class_type_id}&Student=true`)
                                .then(({data})=>{
                                    console.log('this is the classtype data',data)
                                    setClassTypeData(data)

                                })
                                .catch((e)=>{
                                console.log(e)
                                setError((error)=>{
                                    return [...error,'error: could not get Class Details of student, Please report to Admin']
                                })
                                setLoading(false)
                                throw e
                            })

                            axiosClient.get(`v1/getSubject?id=${class_type_id}`)
                                .then(({data})=>{
                                    console.log('this is the subject data',data)
                                    setSubject(data)

                                })
                                .catch((e)=>{
                                    console.log(e)
                                    setError((error)=>{
                                        return [...error,'error: could not get Class Details of student, Please report to Admin']
                                    })
                                    setLoading(false)
                                    throw e
                                })



                            axiosClient.get(`v1/getComparisonData?student_id=${student_id}&student=true`)
                                .then(({data})=>{
                                    console.log('this is the comparison Data',data)
                                    setComparisonData(data)
                                    setLoading(false)
                                })
                                .catch((e)=>{
                                    console.log(e)
                                    setError((error)=>{
                                        return [...error,'error: could not get Class Details of student, Please report to Admin']
                                    })
                                    setLoading(false)
                                    throw e
                                })



                            //setLoading(false)

                        }).catch((e)=>{
                        console.log(e)
                        setError((error)=>{
                            return [...error,'Error: Could not get Student Record']
                        })
                        setLoading(false)
                        throw e
                    })
*/


                }else if(data.user_type === 3){
                    /*guardian*/
                }


            }).catch((e)=>{
            console.log(e)
            setError((error)=>{

                return [...error,'Error: Could not get User Record']
            })
            setLoading(false)
            throw e
        })





    },[])

    return (
        <ContextProvider.Provider value={{user, setUser, token, setToken, assignment, setAssignment, pendingAssignment, setPendingAssignment,
                attendance, setAttendance, academicDetail, setAcademicDetail, result, setResult,loading,setLoading,error,setError,subject,setSubject,student,setStudent,
            setTestAndAssignmentData,testAndAssignmentData,comparisonData, setComparisonData,setClassTypeData,classTypeData
        }}>
            {children}
        </ContextProvider.Provider>
    )
}


export const useStateContext = ()=>{return useContext(ContextProvider)}