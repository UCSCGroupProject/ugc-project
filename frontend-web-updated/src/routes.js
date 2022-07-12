import React from 'react'

// Staff views

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
