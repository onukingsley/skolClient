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
import ResultForm from "./pages/studentDashboard/ResultForm";
import StaffAssignment from "./pages/staffDashboard/Assignment.jsx";
import StaffIndex from "./pages/staffDashboard/Index.jsx";
import SalaryPayment from "./pages/staffDashboard/SalaryPayment.jsx";
import ClassManagement from "./pages/staffDashboard/ClassManagement.jsx";
import StaffSubject from "./pages/staffDashboard/Subject.jsx";
import StaffTimeTable from "./pages/staffDashboard/TimeTable.jsx";
import StaffLayout from "./layout/staff_layout.jsx";

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
                element: <ResultForm/>,

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
      path: '/staff',
      element: <StaffLayout/>,
      children: [
          {
              path: ':id',
              element: <StaffIndex/>
          },
          {
              path: 'assignment',
              element: <StaffAssignment/>
          },
          {
              path: 'salary',
              element: <SalaryPayment/>
          },
          {
              path: 'classManagement',
              element: <ClassManagement/>
          },
          {
              path: 'staffSubject',
              element: <StaffSubject/>,
          },
          {
              path: 'staffTimetable',
              element: <StaffTimeTable/>
          },
          {
              path: 'subjectReview',
              element: <StaffTimeTable/>
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