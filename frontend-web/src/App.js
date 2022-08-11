import React, { Component, Suspense } from 'react'
import { HashRouter,BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const UGCLayout = React.lazy(() => import('./layout/UGCLayout'))
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Home = React.lazy(() => import('./views/user/Home'))
const About = React.lazy(() => import('./views/user/About'))
const Login = React.lazy(() => import('./views/user/Login'))
const ForgotPassword = React.lazy(() => import('./views/user/ForgotPassword'))
const Register = React.lazy(() => import('./views/user/Register'))
const StudentRegistration = React.lazy(() => import('./views/student/StudentRegistration'))
const StaffRegistration = React.lazy(() => import('./views/staff/StaffRegistration'))
const UniversityRegistration = React.lazy(() => import('./views/university/UniRegistration'))
const SchoolRegistration = React.lazy(() => import('./views/school/SchoolRegistration'))

class App extends Component {
  render() {
    return (
      // <HashRouter>
      <Router>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/home" name="Home" element={<DefaultLayout page={<Home />} />} />
            <Route path="/about" name="About" element={<DefaultLayout page={<About />} />} />
            <Route path="/login" name="Login" element={<DefaultLayout page={<Login />} />} />
            <Route path="/forgotPassword" name="Forgot Password" element={<DefaultLayout page={<ForgotPassword />} />} />
            <Route path="/register" name="Registration" element={<DefaultLayout page={<Register />} />} />
            <Route path="/register/student" name="Student Registration" element={<DefaultLayout page={<StudentRegistration />} />} />
            <Route path="/register/staff" name="Staff Registration" element={<DefaultLayout page={<StaffRegistration />} />} />
            <Route path="/register/university" name="University Registration" element={<DefaultLayout page={<UniversityRegistration />} />} />
            <Route path="/register/school" name="School Registration" element={<DefaultLayout page={<SchoolRegistration />} />} />
            <Route path="*" name="Home" element={<UGCLayout />} />
          </Routes>
         </Suspense>
        </Router>
      // </HashRouter>
    )
  }
}

export default App
