import React from 'react'

// Staff views
//Admin
const Adm_Authorize_StaffRegistration = React.lazy(() =>  import('./views/staff/admin/StaffRegistration'))
const Adm_Authorize_Privileges = React.lazy(() => import('./views/staff/admin/Privileges'))
//
const Staff_Dashboard = React.lazy(() => import('./views/staff/userDetails/Overview'))
const Staff_Universities = React.lazy(() => import('./views/staff/universities/Universities'))
const Staff_UniversityProfiles = React.lazy(() => import('./views/staff/universities/Profile'))
const Staff_Courses = React.lazy(() => import('./views/staff/courses/Courses'))
const Staff_University_Courses = React.lazy(() => import('./views/staff/courses/UniversityCourses'))
const Staff_OLResults = React.lazy(() => import('./views/staff/results/OLResults'))
const Staff_OLResults_Detailed = React.lazy(() => import('./views/staff/results/OLResultsDetailed'))
const Staff_ALResults = React.lazy(() => import('./views/staff/results/ALResults'))
const Staff_ALResults_Detailed = React.lazy(() => import('./views/staff/results/ALResultsDetailed'))
const Staff_AptitudeTests_Upcoming = React.lazy(() => import('./views/staff/aptitudeTests/Upcoming'))
const Staff_AptitudeTests_Completed = React.lazy(() => import('./views/staff/aptitudeTests/Completed'))
const Staff_Selected_By_Courses = React.lazy(() => import('./views/staff/selection/selected/SelectedByCourse'))
const Staff_Selected_Unicode = React.lazy(() => import('./views/staff/selection/selected/SelectedByUnicode'))
const Staff_Selected_By_Universities = React.lazy(() => import('./views/staff/selection/selected/SelectedByUniversity'))
const Staff_Selected_Unicode_Students = React.lazy(() => import('./views/staff/selection/selected/SelectedCourseStudents'))
const Staff_Selected_University_Students = React.lazy(() => import('./views/staff/selection/selected/SelectedUniversityStudents'))
const Staff_Selection_Process = React.lazy(() => import('./views/staff/selection/selected/SelectionProcess'))
const Staff_Applied_Students = React.lazy(() => import('./views/staff/selection/AppliedStudents'))
const Staff_Eligible = React.lazy(() => import('./views/staff/selection/eligible/Eligible'))
const Staff_Eligible_Courses = React.lazy(() => import('./views/staff/selection/eligible/Courses'))
const Staff_Eligible_Students = React.lazy(() => import('./views/staff/selection/eligible/Students'))
const Staff_ZScore = React.lazy(() => import('./views/staff/zscore/ZScore'))
const Staff_ZScoreTable = React.lazy(() => import('./views/staff/zscore/ZScoreTable'))
const Staff_Analytics = React.lazy(() => import('./views/staff/analytics/Analytics'))
const Staff_Status_Validation = React.lazy(() => import('./views/staff/validation/Status'))
const Staff_Achievement_Validation = React.lazy(() => import('./views/staff/validation/Achievement'))
const Staff_Complaints = React.lazy(() => import('./views/staff/complaints/Complaints'))
const Staff_Complaints_View = React.lazy(() => import('./views/staff/complaints/Complaint'))
// Staff -> School related
const Staff_SchoolRelated_Schools = React.lazy(() => import('./views/staff/schoolRelated/Schools'))
const Staff_SchoolRelated_StuValidation_SendDoc = React.lazy(() => import('./views/staff/schoolRelated/studentValidation/SendDocuments'))
const Staff_SchoolRelated_StuValidation_ValidationDoc = React.lazy(() => import('./views/staff/schoolRelated/studentValidation/ValidationDocuments'))
const Staff_SchoolRelated_StuValidation_Overview= React.lazy(() => import('./views/staff/schoolRelated/studentValidation/Overview'))

// Student views
// Settings
const Stu_Registration_UniversityAdmission = React.lazy(() => import('./views/student/registration/UniversityAdmission'))
const Stu_Registration_UniversityAdmission_Step1 = React.lazy(() => import('./views/student/registration/Step1Page'))
const Stu_Registration_UniversityAdmission_Step2 = React.lazy(() => import('./views/student/registration/Step2Page'))
const Stu_Registration_UniversityAdmission_Step3 = React.lazy(() => import('./views/student/registration/Step3Page'))
const Stu_Registration_UniversityAdmission_Step4 = React.lazy(() => import('./views/student/registration/Step4Page'))
const Stu_NICAndExamDetails_Settings = React.lazy(() => import('./views/student/settings/NICAndExamDetails_Settings'))
const Stu_StudentDetails_Settings = React.lazy(() => import('./views/student/settings/StudentDetails_Settings'))
const Stu_LoginDetails_Settings = React.lazy(() => import('./views/student/settings/LoginDetails_Settings'))
const Stu_Dashboard = React.lazy(() => import('./views/student/dashboard/Dashboard'))
const Stu_Courses_CourseDetails_MyCourses = React.lazy(() => import('./views/student/courses/courseDetails/MyCourses'))
const Stu_Courses_CourseDetails_RecommendedCourses = React.lazy(() => import('./views/student/courses/courseDetails/RecommendedCourses'))
const Stu_Courses_CourseDetails_AllCourses = React.lazy(() => import('./views/student/courses/courseDetails/AllCourses'))
const Stu_Courses_CourseDetails_Overview = React.lazy(() => import('./views/student/courses/courseDetails/CourseOverview'))
const Stu_University_UniversityDetails_AllUniversities = React.lazy(() => import('./views/student/university/universityDetails/AllUniversities'))
const Stu_University_UniversityDetails_Profile = React.lazy(() => import('./views/student/university/universityDetails/UniversityProfile'))
const Stu_Unicodes_UnicodeTable = React.lazy(() => import('./views/student/unicodes/UnicodeTable'))
const Stu_AptitudeTests_TestDetails_MyTests = React.lazy(() => import('./views/student/aptitudeTests/testDetails/MyTests'))
const Stu_AptitudeTests_TestDetails_Results = React.lazy(() => import('./views/student/aptitudeTests/testDetails/Results'))
const Stu_AptitudeTests_TestDetails_Progress = React.lazy(() => import('./views/student/aptitudeTests/testDetails/Progress'))

// University views
const Uni_Registration = React.lazy(() => import('./views/university/UniRegistration'))
const Uni_Dashboard = React.lazy(() => import('./views/university/dashboard/Dashboard'))
const Uni_Courses_MyCourses = React.lazy(() => import('./views/university/courses/MyCourses'))
const Uni_Courses_CourseDetails_Statistics = React.lazy(() => import('./views/university/courses/CourseStatistics'))
const Uni_Courses_CourseDetails_AppliedStudents = React.lazy(() => import('./views/university/courses/MyCoursesAppliedStudents'))
const Uni_Courses_CourseDetails_AppliedStudents_List = React.lazy(() => import('./views/university/courses/MyCoursesAppliedStudentsList'))
const Uni_AptitudeTests_MyTests = React.lazy(() => import('./views/university/aptitudeTests/MyTests'))
const Uni_AptitudeTests_AppliedStudents = React.lazy(() => import('./views/university/aptitudeTests/MyTestsAppliedStudents'))
const Uni_AptitudeTests_AppliedStudents_List = React.lazy(() => import('./views/university/aptitudeTests/MyTestsAppliedStudentsList'))
const Uni_AptitudeTests_TestDetails_Progress = React.lazy(() => import('./views/university/aptitudeTests/AptitudeTestProgress'))
const Uni_AptitudeTests_TestDetails_Results = React.lazy(() => import('./views/university/aptitudeTests/AptitudeTestResults'))

// School views
const Sch_Dashboard = React.lazy(() => import('./views/school/dashboard/Dashboard'))
const Sch_Settings_Wallet = React.lazy(() => import('./views/school/settings/Settings_Wallet'))
const Sch_Students_ValidateList = React.lazy(() => import('./views/school/students/ValidateStudents'))
const Sch_Students_DS_DigitalSigning = React.lazy(() => import('./views/school/digital_signing/DigitalSigning'))
const Sch_Students_DS_UploadDocument = React.lazy(() => import('./views/school/digital_signing/UploadDocument'))

const routes = [
  // Staff routes
  { path: '/admin/staffregistration',               name: 'Dashboard',              element: Adm_Authorize_StaffRegistration },
  { path: '/admin/privileges',                      name: 'Dashboard',              element: Adm_Authorize_Privileges },
  { path: '/staff/dashboard',                       name: 'Staff Dashboard',        element: Staff_Dashboard },
  { path: '/staff/universities',                    name: 'All Universities',       element: Staff_Universities },
  { path: '/staff/university/profile',              name: 'University Profile',     element: Staff_UniversityProfiles},
  { path: '/staff/courses',                         name: 'Courses',                element: Staff_Courses },
  { path: '/staff/courses/detailed',                name: 'University Courses',     element: Staff_University_Courses},
  { path: '/staff/results/ol',                      name: 'O/L Results',            element: Staff_OLResults },
  { path: '/staff/results/ol/detailed',             name: 'O/L Results Detailed',   element: Staff_OLResults_Detailed },
  { path: '/staff/results/al',                      name: 'A/L Results',            element: Staff_ALResults },
  { path: '/staff/results/al/detailed',             name: 'A/L Results Detailed',   element: Staff_ALResults_Detailed },
  { path: '/staff/aptitudetests/upcoming',          name: 'Upcoming Tests',         element: Staff_AptitudeTests_Upcoming},
  { path: '/staff/aptitudetests/completed',         name: 'Completed Tests',        element: Staff_AptitudeTests_Completed},
  { path: '/staff/selectionprocess',                name: 'Selection Process',      element: Staff_Selection_Process },
  { path: '/staff/selected/filterbyCourse',         name: 'Selected For Courses',   element: Staff_Selected_By_Courses },
  { path: '/staff/selected/filterbyCourse/unicode', name: 'Courses',                element: Staff_Selected_Unicode },
  { path: '/staff/selected/filterbyCourse/unicode/students',name: 'Course Students',element: Staff_Selected_Unicode_Students },
  { path: '/staff/selected/filterbyUniversity',     name: 'Selected For Universities',element: Staff_Selected_By_Universities },
  { path: '/staff/selected/filterbyUniversity/students', name: 'University Students', element: Staff_Selected_University_Students },
  { path: '/staff/appliedstudents',                 name: 'Applicants',             element: Staff_Applied_Students },
  { path: '/staff/eligible',                        name: 'Eligible',               element: Staff_Eligible },
  { path: '/staff/eligible/courses',                name: 'Courses',                element: Staff_Eligible_Courses },
  { path: '/staff/eligible/courses/students',       name: 'Students',               element: Staff_Eligible_Students },
  { path: '/staff/zscore',                          name: 'ZScore Table Selection', element: Staff_ZScore },
  { path: '/staff/zscoretable',                     name: 'ZScore Tables',          element: Staff_ZScoreTable },
  { path: '/staff/analytics',                       name: 'Analytics',              element: Staff_Analytics },
  { path: '/staff/validation/status',               name: 'Student Status',         element: Staff_Status_Validation },
  { path: '/staff/validation/achievement',          name: 'Student Achievements',   element: Staff_Achievement_Validation},
  { path: '/staff/complaints',                      name: 'Complaints',             element: Staff_Complaints },
  { path: '/staff/complaints/view',                 name: 'Complaint',              element: Staff_Complaints_View },
  { path: '/staff/complaints/view',                 name: 'Complaint',              element: Staff_Complaints_View },
  { path: '/staff/school/all',                      name: 'Schools',                element: Staff_SchoolRelated_Schools },
  { path: '/staff/school/validation',               name: 'Student validation',     element: Staff_SchoolRelated_StuValidation_SendDoc },
  { path: '/staff/school/validation/send',          name: 'Send Documents',         element: Staff_SchoolRelated_StuValidation_SendDoc },
  { path: '/staff/school/validation/documents',     name: 'Validation Documents',   element: Staff_SchoolRelated_StuValidation_ValidationDoc },
  { path: '/staff/school/validation/documents/overview',     name: 'Overview',   element: Staff_SchoolRelated_StuValidation_Overview },

  // Student routes
  // Settings

  { path: '/student',                             name: 'Student',                element: Stu_Dashboard },
  { path: '/student/settings',                    name: 'Settings',               element: Stu_NICAndExamDetails_Settings },
  { path: '/student/settings/nicandexamdetails',  name: 'NIC and Exam Details',   element: Stu_NICAndExamDetails_Settings},
  { path: '/student/settings/studentdetails',     name: 'Student Details',        element: Stu_StudentDetails_Settings},
  { path: '/student/settings/logindetails',       name: 'Login Details',          element: Stu_LoginDetails_Settings},
  { path: '/student/registration',                name: 'Registration',           element: Stu_Registration_UniversityAdmission},
  { path: '/student/registration/step1',          name: 'Step 1',                 element: Stu_Registration_UniversityAdmission_Step1},
  { path: '/student/registration/step2',          name: 'Step 2',                 element: Stu_Registration_UniversityAdmission_Step2},
  { path: '/student/registration/step3',          name: 'Step 3',                 element: Stu_Registration_UniversityAdmission_Step3},
  { path: '/student/registration/step4',          name: 'Step 4',                 element: Stu_Registration_UniversityAdmission_Step4},
  { path: '/student/courses/my',                  name: 'My',                     element: Stu_Courses_CourseDetails_MyCourses },
  { path: '/student/courses/recomended',          name: 'Recommended',            element: Stu_Courses_CourseDetails_RecommendedCourses},
  { path: '/student/courses/all',                 name: 'All',                    element: Stu_Courses_CourseDetails_AllCourses},
  { path: '/student/courses/overview',            name: 'All',                    element: Stu_Courses_CourseDetails_Overview},
  { path: '/student/university',                  name: 'University',             element: Stu_University_UniversityDetails_AllUniversities},
  { path: '/student/university/profile',          name: 'Profile',                element: Stu_University_UniversityDetails_Profile},
  { path: '/student/unicode',                     name: 'Unicodes',               element: Stu_Unicodes_UnicodeTable},
  { path: '/student/aptitudetests',               name: 'Aptitude Tests',         element: Stu_AptitudeTests_TestDetails_MyTests},
  { path: '/student/aptitudetests/my',            name: 'My Tests',               element: Stu_AptitudeTests_TestDetails_MyTests},
  { path: '/student/aptitudetests/results',       name: 'Results',                element: Stu_AptitudeTests_TestDetails_Results},
  { path: '/student/aptitudetests/progress',      name: 'Progress',               element: Stu_AptitudeTests_TestDetails_Progress},


  // University routes
  { path: '/university',                                name: 'Dashboard',                element: Uni_Dashboard},
  { path: '/university/dashboard',                      name: 'Dashboard',                element: Uni_Dashboard},
  { path: '/university/registration',                   name: 'Registration',             element: Uni_Registration},
  { path: '/university/courses/my',                     name: 'Courses',                  element: Uni_Courses_MyCourses},
  { path: '/university/courses/statistics',             name: 'Courses Details',          element: Uni_Courses_CourseDetails_Statistics},
  { path: '/university/courses/appliedstudents',        name: 'Courses Applied Students', element: Uni_Courses_CourseDetails_AppliedStudents},
  { path: '/university/courses/appliedstudents/list',        name: 'Courses Applied Students', element: Uni_Courses_CourseDetails_AppliedStudents_List},
  { path: '/university/aptitudetests/my',               name: 'Aptitude Tests',           element: Uni_AptitudeTests_MyTests},
  { path: '/university/aptitudetests/appliedstudents',  name: 'Tests Applied Students',   element: Uni_AptitudeTests_AppliedStudents},
  { path: '/university/aptitudetests/appliedstudents/list',          name: 'Test Applied Students',           element: Uni_AptitudeTests_AppliedStudents_List},
  { path: '/university/aptitudetests/progress',         name: 'Tests Progress',           element: Uni_AptitudeTests_TestDetails_Progress},
  { path: '/university/aptitudetests/results',          name: 'Tests Results',           element: Uni_AptitudeTests_TestDetails_Results},


  // School Routes
  { path: '/school',                               name: 'School',                element: Sch_Dashboard },
  { path: '/school/settings',                      name: 'Settings',               element: Sch_Settings_Wallet },
  { path: '/school/settings/wallet',               name: 'Wallet',                element: Sch_Settings_Wallet},
  { path: '/school/students',                      name: 'Students',              element: Sch_Students_ValidateList },
  { path: '/school/students/validate',             name: 'Validate List',         element: Sch_Students_ValidateList },
  { path: '/school/signing',                       name: 'Digital signing',              element: Sch_Students_DS_DigitalSigning },
  { path: '/school/signing/sign',              name: 'Download document',              element: Sch_Students_DS_DigitalSigning },
  { path: '/school/signing/upload',                name: 'Upload document',              element: Sch_Students_DS_UploadDocument },

  // User routes
  { path: '/', exact: true, name: 'Home' },
]

export default routes
