import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const UGCLayout = React.lazy(() => import('./layout/UGCLayout'))

// Pages
const Login = React.lazy(() => import('./views/user/Login'))
const ForgotPassword = React.lazy(() => import('./views/user/ForgotPassword'))
const StudentRegistration = React.lazy(() => import('./views/student/StudentRegistration'))
const StaffRegistration = React.lazy(() => import('./views/staff/StaffRegistration'))
const UniversityRegistration = React.lazy(() => import('./views/university/UniRegistration'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/login" name="Login" element={<Login />} />
            <Route path="/forgotPassword" name="ForgotPassword" element={<ForgotPassword />} />
            <Route
              path="/studentRegister"
              name="Student Registration"
              element={<StudentRegistration />}
            />
            <Route
              path="/staffRegister"
              name="Staff Registration"
              element={<StaffRegistration />}
            />
            <Route
              path="/universityRegister"
              name="University Registration"
              element={<UniversityRegistration />}
            />
            <Route path="*" name="Home" element={<UGCLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
