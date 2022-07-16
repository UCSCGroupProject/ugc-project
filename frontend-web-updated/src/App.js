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
const Test_Registration = React.lazy(() => import('./views/user/Test_Registration'))
const StudentRegistration = React.lazy(() => import('./views/student/StudentRegistration'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/login" name="Login" element={<Login />} />
            <Route path="/test_register" name="Login" element={<Test_Registration />} />
            <Route
              path="/studentregister"
              name="Student Registration"
              element={<StudentRegistration />}
            />
            <Route path="*" name="Home" element={<UGCLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
