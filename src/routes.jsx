import React from 'react';
import {createBrowserRouter}  from 'react-router-dom'
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import StudentIndex from "./pages/studentDashboard/StudentIndex";
import Assignment from "./pages/studentDashboard/Assignment";
import Attendance from "./pages/studentDashboard/Attendance";
import CheckResult from "./pages/studentDashboard/CheckResult";
import Payment from "./pages/studentDashboard/Payment";
import Subject from "./pages/studentDashboard/Subject";
import TimeTable from "./pages/studentDashboard/TimeTable";
import StudentLayout from "./layout/student_layout";

const router = createBrowserRouter([



    {
        path: '/student',
        element: <StudentLayout/>,
        children: [
            {
                path: ':id' ,
                element: <StudentIndex/>,

            },
            {
                path: 'assignment' ,
                element: <Assignment/>,

            },
            {
                path: 'attendance',
                element: <Attendance/>,

            },
            {
                path: 'result' ,
                element: <CheckResult/>,

            },
            {
                path: 'payment',
                element: <Payment/>,

            },
            {
                path: 'subject',
                element: <Subject/>,

            },
            {
                path: 'timeTable',
                element: <TimeTable/>,

            }
        ]
    },


    {
        path: '/' ,
        element: <Index/> ,

    },
    {
        path: '/about' ,
        element: <About/>,

    },
    {
        path: '/contact',
        element: <Contact/>,

    },
    {
        path: '/login',
        element:<Login/>,

    }
])

export default router;