import {HomeIcon,BookOpenIcon, CalendarIcon, CreditCardIcon, CheckIcon, BanknotesIcon, AcademicCapIcon} from '@heroicons/react/24/outline'


//ToDo should get the user's detail and assign userID it to the dashboard link

export const studentLink = {
    'Dashboard' : {
        'icon' : <HomeIcon className='h-6 w-6 text-[#5cb377]'/>,
        'link' : '/student'
    },
    'Assignment' : {
        'icon' : <BookOpenIcon className='h-6 w-6 text-[#5cb377]'/>,
        'link' : '/student/assignment'
    },
    'TimeTable' : {
        'icon' : <CalendarIcon className='h-6 w-6 text-[#5cb377]'/>,
        'link' : '/student/timeTable'
    },
    'Result' : {
        'icon' : <CreditCardIcon className='h-6 w-6 text-[#5cb377]'/>,
        'link' : '/student/result'
    },

    'Payment' : {
        'icon' : <BanknotesIcon className='h-6 w-6 text-[#5cb377]'/>,
        'link' : '/student/payment'
    },
    'Subject' : {
        'icon' : <AcademicCapIcon className='h-6 w-6 text-[#5cb377]'/>,
        'link' : '/student/subject'
    },
}


export const staffLink = {
    'Dashboard' : {
        'icon' : <HomeIcon className='h-6 w-6 text-[#000080]'/>,
        'link' : '/staff/1'
    },
    'Assignment' : {
        'icon' : <BookOpenIcon className='h-6 w-6 text-[#000080]'/>,
        'link' : '/staff/assignment'
    },
    'TimeTable' : {
        'icon' : <CalendarIcon className='h-6 w-6 text-[#000080]'/>,
        'link' : '/staff/staffTimeTable'
    },
    'Subject' : {
        'icon' : <AcademicCapIcon className='h-6 w-6 text-[#000080]'/>,
        'link' : '/staff/staffSubject'
    },
    'Class Overview' : {
        'icon' : <AcademicCapIcon className='h-6 w-6 text-[#000080]'/>,
        'link' : '/staff/classManagement'
    },
    'Salary' : {
        'icon' : <CreditCardIcon className='h-6 w-6 text-[#000080]'/>,
        'link' : '/staff/salary'
    },
    'Subject Review' : {
        'icon' : <AcademicCapIcon className='h-6 w-6 text-[#000080]'/>,
        'link' : '/staff/subjectReview'
    },
}

//export const term = ['first','second','third']
export const term = [{'name':'first','id':'1'},{'name':'second','id':'2'},{'name':'third','id':'3'}]

export const PendingAssignment = [
    {
        "title": "Analysis of Quantum Entanglement",
        "content": "Prepare a comprehensive report on the theoretical implications and practical applications of quantum entanglement in modern physics.",
        "subject": "Physics"
    },
    {
        "title": "Historical Context of the Renaissance",
        "content": "Discuss the socio-economic and cultural factors that led to the flourishing of the Renaissance in Europe. Include key figures and their contributions.",
        "subject": "History"
    },
    {
        "title": "Introduction to Machine Learning Algorithms",
        "content": "Outline the fundamental principles of supervised and unsupervised learning algorithms. Provide examples of each.",
        "subject": "Computer Science"
    },
    {
        "title": "Literary Devices in Shakespeare's Sonnets",
        "content": "Identify and analyze the use of various literary devices (e.g., metaphor, simile, personification) in a selection of Shakespeare's sonnets.",
        "subject": "Literature"
    },
    {
        "title": "Chemical Reactions in Organic Synthesis",
        "content": "Describe common chemical reactions used in the synthesis of organic compounds, focusing on reaction mechanisms.",
        "subject": "Chemistry"
    },
    {
        "title": "The Impact of Climate Change on Biodiversity",
        "content": "Research and present findings on how global climate change is affecting biodiversity, with specific examples of endangered species or ecosystems.",
        "subject": "Environmental Science"
    },
    {
        "title": "Economic Principles of Supply and Demand",
        "content": "Explain the core economic principles of supply and demand, illustrating with real-world market examples.",
        "subject": "Economics"
    },
    {
        "title": "Developing a Responsive Web Layout",
        "content": "Create a responsive web page layout using HTML, CSS, and basic JavaScript. Ensure it adapts well to different screen sizes.",
        "subject": "Web Development"
    },
    {
        "title": "Philosophical Schools of Thought in Ancient Greece",
        "content": "Compare and contrast the main philosophical schools of thought that emerged in ancient Greece, such as Platonism, Aristotelianism, and Stoicism.",
        "subject": "Philosophy"
    },
    {
        "title": "Human Anatomy: The Skeletal System",
        "content": "Detail the structure and function of the human skeletal system. Include major bones and their roles.",
        "subject": "Biology"
    }
]

export const timetableData = {
    "Monday": {
        "8AM": "Mathematics",
        "10AM": "English",
        "12PM": "Biology",
        "2PM": "History"
    },
    "Tuesday": {
        "8AM": "Chemistry",
        "10AM": "Physics",
        "12PM": "Mathematics",
        "2PM": "Civic Education"
    },
    "Wednesday": {
        "8AM": "English",
        "10AM": "Geography",
        "12PM": "Physical Education",
        "2PM": "Biology"
    },
    "Thursday": {
        "8AM": "Mathematics",
        "10AM": "Computer Science",
        "12PM": "Agriculture",
        "2PM": "Economics"
    },
    "Friday": {
        "8AM": "Chemistry",
        "10AM": "Physics",
        "12PM": "Technical Drawing",
        "2PM": "Free Period"
    }
}

export const examtimeTable = {
    "Monday": {
        "8AM": "Mathematics",
        "10AM": "English Language",
        "12PM": "",
        "2PM": ""
    },
    "Tuesday": {
        "8AM": "Physics",
        "10AM": "",
        "12PM": "Agricultural Science",
        "2PM": ""
    },
    "Wednesday": {
        "8AM": "",
        "10AM": "History",
        "12PM": "Physical Education",
        "2PM": ""
    },
    "Thursday": {
        "8AM": "Geography",
        "10AM": "",
        "12PM": "",
        "2PM": "Literature in English"
    },
    "Friday": {
        "8AM": "Commerce",
        "10AM": "Business Studies",
        "12PM": "",
        "2PM": ""
    }
}

export const studentPayment =[
    {
        "student_id": 101,
        "dues_id": 1,
        "amount": 30000,
        "name": "School Fees",
        "academic_session_id": 3,
        "term_id": 1,
        "transaction_id": "TXN-20250709001"
    },
    {
        "student_id": 101,
        "dues_id": 2,
        "amount": 5000,
        "name": "PTSA Dues",
        "academic_session_id": 3,
        "term_id": 1,
        "transaction_id": "TXN-20250709002"
    },
    {
        "student_id": 101,
        "dues_id": 3,
        "amount": 3500,
        "name": "Uniform Fee",
        "academic_session_id": 3,
        "term_id": 1,
        "transaction_id": "TXN-20250709003"
    },
    {
        "student_id": 102,
        "dues_id": 1,
        "amount": 30000,
        "name": "School Fees",
        "academic_session_id": 3,
        "term_id": 1,
        "transaction_id": "TXN-20250709004"
    },
    {
        "student_id": 102,
        "dues_id": 4,
        "amount": 2500,
        "name": "Badge and Tie",
        "academic_session_id": 3,
        "term_id": 1,
        "transaction_id": "TXN-20250709005"
    },
    {
        "student_id": 101,
        "dues_id": 5,
        "amount": 7000,
        "name": "Exam Fee",
        "academic_session_id": 3,
        "term_id": 2,
        "transaction_id": "TXN-20250709006"
    },
    {
        "student_id": 101,
        "dues_id": 6,
        "amount": 10000,
        "name": "Hostel Fee",
        "academic_session_id": 3,
        "term_id": 2,
        "transaction_id": "TXN-20250709007"
    },
    {
        "student_id": 103,
        "dues_id": 1,
        "amount": 30000,
        "name": "School Fees",
        "academic_session_id": 3,
        "term_id": 1,
        "transaction_id": "TXN-20250709008"
    },
    {
        "student_id": 101,
        "dues_id": 7,
        "amount": 1500,
        "name": "Club Registration",
        "academic_session_id": 3,
        "term_id": 2,
        "transaction_id": "TXN-20250709009"
    },
    {
        "student_id": 101,
        "dues_id": 8,
        "amount": 2000,
        "name": "School Development Donation",
        "academic_session_id": 3,
        "term_id": 2,
        "transaction_id": "TXN-20250709010"
    }
]


export const staffPayment = [
    {
        "transaction_type": "credit",
        "amount": 30000,
        "description": "Payment for first term school fees",
        "transaction_id": "TXN-20250709001",
        "transaction_name": "School Fees",
        "balance": 30000
    },
    {
        "transaction_type": "credit",
        "amount": 5000,
        "description": "Payment for PTSA dues",
        "transaction_id": "TXN-20250709002",
        "transaction_name": "PTSA",
        "balance": 35000
    },
    {
        "transaction_type": "credit",
        "amount": 3500,
        "description": "Payment for school uniform",
        "transaction_id": "TXN-20250709003",
        "transaction_name": "Uniform Fee",
        "balance": 38500
    },
    {
        "transaction_type": "debit",
        "amount": 1000,
        "description": "SMS notification charge",
        "transaction_id": "TXN-20250709004",
        "transaction_name": "Service Charge",
        "balance": 37500
    },
    {
        "transaction_type": "credit",
        "amount": 2500,
        "description": "Payment for school badge and tie",
        "transaction_id": "TXN-20250709005",
        "transaction_name": "Accessories",
        "balance": 40000
    },
    {
        "transaction_type": "credit",
        "amount": 7000,
        "description": "Payment for second term exam fee",
        "transaction_id": "TXN-20250709006",
        "transaction_name": "Exam Fee",
        "balance": 47000
    },
    {
        "transaction_type": "credit",
        "amount": 10000,
        "description": "Payment for hostel accommodation",
        "transaction_id": "TXN-20250709007",
        "transaction_name": "Hostel Fee",
        "balance": 57000
    },
    {
        "transaction_type": "debit",
        "amount": 2000,
        "description": "Library fine for overdue books",
        "transaction_id": "TXN-20250709008",
        "transaction_name": "Library Fine",
        "balance": 55000
    },
    {
        "transaction_type": "credit",
        "amount": 1500,
        "description": "Payment for extracurricular club registration",
        "transaction_id": "TXN-20250709009",
        "transaction_name": "Club Dues",
        "balance": 56500
    },
    {
        "transaction_type": "credit",
        "amount": 2000,
        "description": "Donation to school development project",
        "transaction_id": "TXN-20250709010",
        "transaction_name": "Donation",
        "balance": 58500
    }
]


export const studentResult = [
    {
        "id": 1,
        "student_id": 101,
        "subject_id": 1,
        "class_type_id": 3,
        "term_id": 1,
        "academic_session_id": 2,
        "level": "JSS3",
        "grade_id": 1,
        "test1": 15,
        "test2": 10,
        "exam": 60,
        "created_at": "2025-07-09T08:00:00Z",
        "updated_at": "2025-07-09T08:00:00Z",
        "student": {
            "id": 101,
            "first_name": "Jane",
            "last_name": "Doe",
            "admission_no": "JSS3101"
        },
        "subject": {
            "id": 1,
            "name": "Mathematics"
        },
        "class_type": {
            "id": 3,
            "name": "JSS3A"
        },
        "term": {
            "id": 1,
            "name": "1st Term"
        },
        "academic_session": {
            "id": 2,
            "name": "2022/2023"
        },
        "grade": {
            "id": 1,
            "grade": "A",
            "remark": "Excellent"
        }
    },
    {
        "id": 2,
        "student_id": 101,
        "subject_id": 2,
        "class_type_id": 3,
        "term_id": 1,
        "academic_session_id": 2,
        "level": "JSS3",
        "grade_id": 1,
        "test1": 14,
        "test2": 10,
        "exam": 55,
        "created_at": "2025-07-09T08:00:00Z",
        "updated_at": "2025-07-09T08:00:00Z",
        "student": {
            "id": 101,
            "first_name": "Jane",
            "last_name": "Doe",
            "admission_no": "JSS3101"
        },
        "subject": {
            "id": 2,
            "name": "English Language"
        },
        "class_type": {
            "id": 3,
            "name": "JSS3A"
        },
        "term": {
            "id": 1,
            "name": "1st Term"
        },
        "academic_session": {
            "id": 2,
            "name": "2022/2023"
        },
        "grade": {
            "id": 1,
            "grade": "A",
            "remark": "Very Good"
        }
    },
    {
        "id": 3,
        "student_id": 101,
        "subject_id": 3,
        "class_type_id": 3,
        "term_id": 1,
        "academic_session_id": 2,
        "level": "JSS3",
        "grade_id": 2,
        "test1": 12,
        "test2": 11,
        "exam": 50,
        "created_at": "2025-07-09T08:00:00Z",
        "updated_at": "2025-07-09T08:00:00Z",
        "student": {
            "id": 101,
            "first_name": "Jane",
            "last_name": "Doe",
            "admission_no": "JSS3101"
        },
        "subject": {
            "id": 3,
            "name": "Basic Science"
        },
        "class_type": {
            "id": 3,
            "name": "JSS3A"
        },
        "term": {
            "id": 1,
            "name": "1st Term"
        },
        "academic_session": {
            "id": 2,
            "name": "2022/2023"
        },
        "grade": {
            "id": 2,
            "grade": "B",
            "remark": "Good"
        }
    },
    {
        "id": 4,
        "student_id": 101,
        "subject_id": 4,
        "class_type_id": 3,
        "term_id": 1,
        "academic_session_id": 2,
        "level": "JSS3",
        "grade_id": 3,
        "test1": 10,
        "test2": 8,
        "exam": 40,
        "created_at": "2025-07-09T08:00:00Z",
        "updated_at": "2025-07-09T08:00:00Z",
        "student": {
            "id": 101,
            "first_name": "Jane",
            "last_name": "Doe",
            "admission_no": "JSS3101"
        },
        "subject": {
            "id": 4,
            "name": "Social Studies"
        },
        "class_type": {
            "id": 3,
            "name": "JSS3A"
        },
        "term": {
            "id": 1,
            "name": "1st Term"
        },
        "academic_session": {
            "id": 2,
            "name": "2022/2023"
        },
        "grade": {
            "id": 3,
            "grade": "C",
            "remark": "Fair"
        }
    },
    {
        "id": 5,
        "student_id": 101,
        "subject_id": 5,
        "class_type_id": 3,
        "term_id": 1,
        "academic_session_id": 2,
        "level": "JSS3",
        "grade_id": 4,
        "test1": 9,
        "test2": 10,
        "exam": 30,
        "created_at": "2025-07-09T08:00:00Z",
        "updated_at": "2025-07-09T08:00:00Z",
        "student": {
            "id": 101,
            "first_name": "Jane",
            "last_name": "Doe",
            "admission_no": "JSS3101"
        },
        "subject": {
            "id": 5,
            "name": "Civic Education"
        },
        "class_type": {
            "id": 3,
            "name": "JSS3A"
        },
        "term": {
            "id": 1,
            "name": "1st Term"
        },
        "academic_session": {
            "id": 2,
            "name": "2022/2023"
        },
        "grade": {
            "id": 4,
            "grade": "D",
            "remark": "Needs Improvement"
        }
    },
    {
        "id": 6,
        "student_id": 101,
        "subject_id": 6,
        "class_type_id": 3,
        "term_id": 1,
        "academic_session_id": 2,
        "level": "JSS3",
        "grade_id": 2,
        "test1": 13,
        "test2": 10,
        "exam": 52,
        "created_at": "2025-07-09T08:00:00Z",
        "updated_at": "2025-07-09T08:00:00Z",
        "student": {
            "id": 101,
            "first_name": "Jane",
            "last_name": "Doe",
            "admission_no": "JSS3101"
        },
        "subject": {
            "id": 6,
            "name": "Agricultural Science"
        },
        "class_type": {
            "id": 3,
            "name": "JSS3A"
        },
        "term": {
            "id": 1,
            "name": "1st Term"
        },
        "academic_session": {
            "id": 2,
            "name": "2022/2023"
        },
        "grade": {
            "id": 2,
            "grade": "B",
            "remark": "Good"
        }
    },
    {
        "id": 7,
        "student_id": 101,
        "subject_id": 7,
        "class_type_id": 3,
        "term_id": 1,
        "academic_session_id": 2,
        "level": "JSS3",
        "grade_id": 1,
        "test1": 15,
        "test2": 15,
        "exam": 55,
        "created_at": "2025-07-09T08:00:00Z",
        "updated_at": "2025-07-09T08:00:00Z",
        "student": {
            "id": 101,
            "first_name": "Jane",
            "last_name": "Doe",
            "admission_no": "JSS3101"
        },
        "subject": {
            "id": 7,
            "name": "Home Economics"
        },
        "class_type": {
            "id": 3,
            "name": "JSS3A"
        },
        "term": {
            "id": 1,
            "name": "1st Term"
        },
        "academic_session": {
            "id": 2,
            "name": "2022/2023"
        },
        "grade": {
            "id": 1,
            "grade": "A",
            "remark": "Excellent"
        }
    },
    {
        "id": 8,
        "student_id": 101,
        "subject_id": 8,
        "class_type_id": 3,
        "term_id": 1,
        "academic_session_id": 2,
        "level": "JSS3",
        "grade_id": 2,
        "test1": 12,
        "test2": 10,
        "exam": 50,
        "created_at": "2025-07-09T08:00:00Z",
        "updated_at": "2025-07-09T08:00:00Z",
        "student": {
            "id": 101,
            "first_name": "Jane",
            "last_name": "Doe",
            "admission_no": "JSS3101"
        },
        "subject": {
            "id": 8,
            "name": "CRS"
        },
        "class_type": {
            "id": 3,
            "name": "JSS3A"
        },
        "term": {
            "id": 1,
            "name": "1st Term"
        },
        "academic_session": {
            "id": 2,
            "name": "2022/2023"
        },
        "grade": {
            "id": 2,
            "grade": "B",
            "remark": "Good"
        }
    },
    {
        "id": 9,
        "student_id": 101,
        "subject_id": 9,
        "class_type_id": 3,
        "term_id": 1,
        "academic_session_id": 2,
        "level": "JSS3",
        "grade_id": 1,
        "test1": 13,
        "test2": 12,
        "exam": 55,
        "created_at": "2025-07-09T08:00:00Z",
        "updated_at": "2025-07-09T08:00:00Z",
        "student": {
            "id": 101,
            "first_name": "Jane",
            "last_name": "Doe",
            "admission_no": "JSS3101"
        },
        "subject": {
            "id": 9,
            "name": "Computer Studies"
        },
        "class_type": {
            "id": 3,
            "name": "JSS3A"
        },
        "term": {
            "id": 1,
            "name": "1st Term"
        },
        "academic_session": {
            "id": 2,
            "name": "2022/2023"
        },
        "grade": {
            "id": 1,
            "grade": "A",
            "remark": "Very Good"
        }
    },
    {
        "id": 10,
        "student_id": 101,
        "subject_id": 10,
        "class_type_id": 3,
        "term_id": 1,
        "academic_session_id": 2,
        "level": "JSS3",
        "grade_id": 2,
        "test1": 12,
        "test2": 11,
        "exam": 51,
        "created_at": "2025-07-09T08:00:00Z",
        "updated_at": "2025-07-09T08:00:00Z",
        "student": {
            "id": 101,
            "first_name": "Jane",
            "last_name": "Doe",
            "admission_no": "JSS3101"
        },
        "subject": {
            "id": 10,
            "name": "Fine Arts"
        },
        "class_type": {
            "id": 3,
            "name": "JSS3A"
        },
        "term": {
            "id": 1,
            "name": "1st Term"
        },
        "academic_session": {
            "id": 2,
            "name": "2022/2023"
        },
        "grade": {
            "id": 2,
            "grade": "B",
            "remark": "Good"
        }
    }
]

