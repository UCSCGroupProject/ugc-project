import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CImage,
  CButton,
} from '@coreui/react'

import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import AppHeaderDropdown from './AppHeaderDropdown'
import AppBreadcrumb from './AppBreadcrumb'

import logo from '../../assets/brand/logo.png'

import authService from '../../services/authService'

function DefaultAppHeader(props) {
  // User status
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  useEffect(() => {
    const user = authService.getCurrentUser()

    if (user !== null) {
      setIsUserLoggedIn(true)
      console.log('App header dropdown loaded')
    }
  }, [])

  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        {/* {isUserLoggedIn && (
          <CHeaderToggler
            className="ps-1"
            onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          >
            <CIcon icon={cilMenu} size="lg" />
          </CHeaderToggler>
        )} */}

        {/* Brand Logo */}
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          {/* <CIcon icon={logo} height={48} alt="Logo" /> */}
          {/* <img src={logo} alt="" /> */}
          <CImage fluid src={logo} width={250} />
        </CHeaderBrand>

        {/* Navigation */}
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/home" component={NavLink}>
              Home
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink to="/about" component={NavLink}>
              About
            </CNavLink>
          </CNavItem>
        </CHeaderNav>

        {/* {isUserLoggedIn && (
          // Header notifications
          <CHeaderNav>
            <CNavItem>
              <CNavLink href="#">
                <CIcon icon={cilBell} size="lg" />
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">
                <CIcon icon={cilList} size="lg" />
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">
                <CIcon icon={cilEnvelopeOpen} size="lg" />
              </CNavLink>
            </CNavItem>
          </CHeaderNav>
        )} */}

        {isUserLoggedIn ? (
          //Header Dropdown
          <CHeaderNav className="ms-3">
            <AppHeaderDropdown userDetails={props.userDetails} />
          </CHeaderNav>
        ) : (
          <div>
            <Link to="/login">
              <CButton color="success" size="sm" className="py-2 me-2">
                <div className="text-white">Login</div>
              </CButton>
            </Link>
            <Link to="/register">
              <CButton color="info" size="sm" className="py-2">
                <div className="text-white">Signup </div>
              </CButton>
            </Link>
          </div>
        )}

        {/* {isUserLoggedIn && (
          // Header Breadcrumb
          <>
            <CHeaderDivider />
            <CContainer fluid>
              <AppBreadcrumb />
            </CContainer>
          </>
        )} */}
      </CContainer>
    </CHeader>
  )
}

export default DefaultAppHeader
