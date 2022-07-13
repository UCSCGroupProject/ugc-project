import React from 'react'

// Staff views
const Adm_Authorize_StaffRegistration = React.lazy(() => import('./views/staff/admin/StaffRegistration'))
const Adm_Authorize_Privileges = React.lazy(() => import('./views/staff/admin/Privileges'))
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
const Staff_ZScore = React.lazy(() => import('./views/staff/zscore/ZScore'))
const Staff_Analytics = React.lazy(() => import('./views/staff/analytics/Analytics'))
const Staff_Status_Validation = React.lazy(() => import('./views/staff/validation/Status'))
const Staff_Achievement_Validation = React.lazy(() => import('./views/staff/validation/Achievement'))
const Staff_Complaints = React.lazy(() => import('./views/staff/complaints/Complaints'))

// Student views
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

// User views

const routes = [
  // Staff routes
  { path: '/admin/authorize', name: 'Dashboard', element: Adm_Authorize_StaffRegistration },
  { path: '/admin/privileges', name: 'Dashboard', element: Adm_Authorize_Privileges },
  { path: '/staff/useroverview', name: 'Dashboard', element: Staff_UserDetails_Overview },
  { path: '/staff/userprofile', name: 'Dashboard', element: Staff_UserDetails_UserProfile },
  { path: '/staff/universities', name: 'Dashboard', element: Staff_Universities },
  { path: '/staff/univerityprofile', name: 'Dashboard', element: Staff_UniversityProfiles },
  { path: '/staff/courses', name: 'Dashboard', element: Staff_Courses },
  { path: '/staff/results/ol', name: 'Dashboard', element: Staff_OLResults },
  { path: '/staff/results/al', name: 'Dashboard', element: Staff_ALResults },
  { path: '/staff/aptitudetests/upcoming', name: 'Dashboard', element: Staff_AptitudeTests_Upcoming },
  { path: '/staff/aptitudetests/completed', name: 'Dashboard', element: Staff_AptitudeTests_Completed },
  { path: '/staff/selectedstudents', name: 'Dashboard', element: Staff_Selected_Students },
  { path: '/staff/zscore', name: 'Dashboard', element: Staff_ZScore },
  { path: '/staff/analytics', name: 'Dashboard', element: Staff_Analytics },
  { path: '/staff/validation/status', name: 'Dashboard', element: Staff_Status_Validation },
  { path: '/staff/validation/achievement', name: 'Dashboard', element: Staff_Achievement_Validation },
  { path: '/staff/complaints', name: 'Dashboard', element: Staff_Complaints },

  // Student routes
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

  // User routes
  { path: '/', exact: true, name: 'Home' },
]

export default routes
