import React from 'react'

// Staff views
  //Admin
const Adm_Authorize_StaffRegistration = React.lazy(() => import('./views/staff/admin/StaffRegistration'))
const Adm_Authorize_Privileges = React.lazy(() => import('./views/staff/admin/Privileges'))
  //
const Staff_UserDetails_Overview = React.lazy(() => import('./views/staff/userDetails/Overview'))
const Staff_UserDetails_UserProfile = React.lazy(() => import('./views/staff/userDetails/UserProfile'))
const Staff_Universities = React.lazy(() => import('./views/staff/universities/Universities'))
const Staff_UniversityProfiles = React.lazy(() => import('./views/staff/universities/Profile'))
const Staff_Courses = React.lazy(() => import('./views/staff/courses/Courses'))
const Staff_OLResults = React.lazy(() => import('./views/staff/results/OLResults'))
const Staff_ALResults = React.lazy(() => import('./views/staff/results/ALResults'))
const Staff_AptitudeTests_Upcoming = React.lazy(() => import('./views/staff/aptitudeTests/Upcoming'))
const Staff_AptitudeTests_Completed = React.lazy(() => import('./views/staff/aptitudeTests/Completed'))
const Staff_Selected_Students = React.lazy(() => import('./views/staff/selection/SelectedStudents'))
const Staff_Applied_Students = React.lazy(() => import('./views/staff/selection/AppliedStudents'))
const Staff_Eligible_Students = React.lazy(() => import('./views/staff/selection/EligibleStudents'))
const Staff_ZScore = React.lazy(() => import('./views/staff/zscore/ZScore'))
const Staff_ZScoreTable = React.lazy(() => import('./views/staff/zscore/ZScoreTable'))
const Staff_Analytics = React.lazy(() => import('./views/staff/analytics/Analytics'))
const Staff_Status_Validation = React.lazy(() => import('./views/staff/validation/Status'))
const Staff_Achievement_Validation = React.lazy(() => import('./views/staff/validation/Achievement'))
const Staff_Complaints = React.lazy(() => import('./views/staff/complaints/Complaints'))

// Student views
// Settings
const Stu_NICAndExamDetails_Settings =  React.lazy(() => import('./views/student/settings/NICAndExamDetails_Settings'))
const Stu_StudentDetails_Settings =  React.lazy(() => import('./views/student/settings/StudentDetails_Settings'))
const Stu_LoginDetails_Settings =  React.lazy(() => import('./views/student/settings/LoginDetails_Settings'))
const Stu_Dashboard = React.lazy(() => import('./views/student/dashboard/Dashboard'))
const Stu_Courses_Apply = React.lazy(() => import('./views/student/courses/Apply'))
const Stu_Courses_CourseDetails_MyCourses = React.lazy(() => import('./views/student/courses/courseDetails/MyCourses'))
const Stu_Courses_CourseDetails_RecommendedCourses = React.lazy(() => import('./views/student/courses/courseDetails/RecommendedCourses'))
const Stu_Courses_CourseDetails_AllCourses = React.lazy(() => import('./views/student/courses/courseDetails/AllCourses'))
const Stu_University_UniversityDetails_AllUniversities = React.lazy(() => import('./views/student/university/universityDetails/AllUniversities'))
const Stu_AptitudeTests_TestDetails_MyTests = React.lazy(() => import('./views/student/aptitudeTests/testDetails/MyTests'))
const Stu_AptitudeTests_TestDetails_Results = React.lazy(() => import('./views/student/aptitudeTests/testDetails/Results'))
const Stu_AptitudeTests_Progress_UpcomingTests = React.lazy(() => import('./views/student/aptitudeTests/progress/UpcomingTests'))
const Stu_AptitudeTests_Progress_OngoingTests = React.lazy(() => import('./views/student/aptitudeTests/progress/OngoingTests'))
const Stu_AptitudeTests_Progress_DelayedTests = React.lazy(() => import('./views/student/aptitudeTests/progress/DelayedTests'))

// University views
const Uni_Registration = React.lazy(() => import('./views/university/UniRegistration'))
const Uni_Dashboard = React.lazy(() => import('./views/university/dashboard/Dashboard'))
const Uni_Courses = React.lazy(() => import('./views/university/courses/Courses'))
const Uni_Courses_CourseDetails = React.lazy(() => import('./views/university/courses/CourseDetails'))
const Uni_AptitudeTests = React.lazy(() => import('./views/university/aptitudeTests/AptitudeTests'))
const Uni_AptitudeTests_TestDetails = React.lazy(() => import('./views/university/aptitudeTests/AptitudeTestDetails'))
const Uni_AptitudeTests_Results = React.lazy(() => import('./views/university/aptitudeTests/AptitudeTestResults'))
// const Uni_AptitudeTests_Progress_UpcomingTests = React.lazy(() => import('./views/university/aptitudeTests/progress/UpcomingTests'))
// const Uni_AptitudeTests_Progress_OngoingTests = React.lazy(() => import('./views/university/aptitudeTests/progress/OngoingTests'))
// const Uni_AptitudeTests_Progress_DelayedTests = React.lazy(() => import('./views/university/aptitudeTests/progress/DelayedTests'))


// User views

const routes = [
  // Staff routes
  { path: '/admin/staffregistration', name: 'Dashboard', element: Adm_Authorize_StaffRegistration },
  { path: '/admin/privileges', name: 'Dashboard', element: Adm_Authorize_Privileges },
  { path: '/staff/useroverview', name: 'User Overview', element: Staff_UserDetails_Overview },
  { path: '/staff/userprofile', name: 'User Profile', element: Staff_UserDetails_UserProfile },
  { path: '/staff/universities', name: 'All Universities', element: Staff_Universities },
  { path: '/staff/univerityprofile', name: 'University Profile', element: Staff_UniversityProfiles },
  { path: '/staff/courses', name: 'Courses', element: Staff_Courses },
  { path: '/staff/results/ol', name: 'O/L Results', element: Staff_OLResults },
  { path: '/staff/results/al', name: 'A/L Results', element: Staff_ALResults },
  { path: '/staff/aptitudetests/upcoming', name: 'Upcoming Tests', element: Staff_AptitudeTests_Upcoming },
  { path: '/staff/aptitudetests/completed', name: 'Completed Tests', element: Staff_AptitudeTests_Completed },
  { path: '/staff/selectedstudents', name: 'Selected Students', element: Staff_Selected_Students },
  { path: '/staff/appliedstudents', name: 'Applied Students', element: Staff_Applied_Students },
  { path: '/staff/eligiblestudents', name: 'Eligible Students', element: Staff_Eligible_Students },
  { path: '/staff/zscore', name: 'ZScore Table Selection', element: Staff_ZScore },
  { path: '/staff/zscoretable', name: 'ZScore Tables', element: Staff_ZScoreTable },
  { path: '/staff/analytics', name: 'Analytics', element: Staff_Analytics },
  { path: '/staff/validation/status', name: 'Student Status', element: Staff_Status_Validation },
  { path: '/staff/validation/achievement', name: 'Student Achievements', element: Staff_Achievement_Validation },
  { path: '/staff/complaints', name: 'Complaints', element: Staff_Complaints },

  // Student routes
  // Settings
  { path: '/student/nic_and_exam_details_settings', name: 'Settings', element: Stu_NICAndExamDetails_Settings },
  { path: '/student/student_details_settings', name: 'Settings', element: Stu_StudentDetails_Settings },
  { path: '/student/login_details_settings', name: 'Settings', element: Stu_LoginDetails_Settings },
  { path: '/student/dashboard', name: 'Dashboard', element: Stu_Dashboard },
  { path: '/student/courses/apply', name: 'Apply', element: Stu_Courses_Apply },
  { path: '/student/courses/my', name: 'My Courses', element: Stu_Courses_CourseDetails_MyCourses },
  { path: '/student/courses/recomended', name: 'Recommended Courses', element: Stu_Courses_CourseDetails_RecommendedCourses },
  { path: '/student/courses/all', name: 'All Courses', element: Stu_Courses_CourseDetails_AllCourses },
  { path: '/student/university/all', name: 'All Universities', element: Stu_University_UniversityDetails_AllUniversities },
  { path: '/student/aptitudetests/my', name: 'My Tests', element: Stu_AptitudeTests_TestDetails_MyTests },
  { path: '/student/aptitudetests/results', name: 'Results', element: Stu_AptitudeTests_TestDetails_Results },
  { path: '/student/aptitudetests/upcoming', name: 'Upcoming Tests', element: Stu_AptitudeTests_Progress_UpcomingTests },
  { path: '/student/aptitudetests/ongoing', name: 'Ongoing Tests', element: Stu_AptitudeTests_Progress_OngoingTests },
  { path: '/student/aptitudetests/delayed', name: 'Delayed Tests', element: Stu_AptitudeTests_Progress_DelayedTests },

  // University routes
  { path: '/university/registration', name: 'Dashboard', element: Uni_Registration },
  { path: '/university/dashboard', name: 'Dashboard', element: Uni_Dashboard },
  { path: '/university/courses', name: 'Courses', element: Uni_Courses },
  { path: '/university/courses/coursedetails', name: 'Courses Details', element: Uni_Courses_CourseDetails },
  { path: '/university/aptitudetests', name: 'Aptitude Tests', element: Uni_AptitudeTests },
  { path: '/university/aptitudetests/aptitudetestdetails', name: 'Aptitude Tests', element: Uni_AptitudeTests_TestDetails },
  { path: '/university/aptitudetests/results', name: 'Results', element: Uni_AptitudeTests_Results },
  // { path: '/university/aptitudetests/upcoming', name: 'Upcoming Tests', element: Uni_AptitudeTests_Progress_UpcomingTests },
  // { path: '/university/aptitudetests/ongoing', name: 'Ongoing Tests', element: Uni_AptitudeTests_Progress_OngoingTests },
  // { path: '/university/aptitudetests/delayed', name: 'Delayed Tests', element: Uni_AptitudeTests_Progress_DelayedTests },


  // User routes
  { path: '/', exact: true, name: 'Home' },
]

export default routes
