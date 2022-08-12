import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler, CImage } from '@coreui/react'
// import CIcon from "@coreui/icons-react";

import { AppSidebarNav } from './AppSidebarNav'

import logo from '../../assets/brand/logo.png'
// import { sygnet } from "src/assets/brand/sygnet";

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import studentNavigation from '../../views/student/sidebarData'
import universityNavigation from '../../views/university/sidebarData'
import staffNavigation from '../../views/staff/sidebarData'
import schoolNavigation from '../../views/school/sidebarData'

const AppSidebar = (props) => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex bg-light" to="/">
        <CImage fluid src={logo} className="p-2" />
        {/* <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} /> */}
        {/* <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} /> */}
      </CSidebarBrand>
      <CSidebarNav className="ugc-sidebar">
        <SimpleBar>
          {props.actorType === 'student' && <AppSidebarNav items={studentNavigation} />}
          {props.actorType === 'university' && <AppSidebarNav items={universityNavigation} />}
          {props.actorType === 'staff' && <AppSidebarNav items={staffNavigation} />}
          {props.actorType === 'school' && <AppSidebarNav items={schoolNavigation} />}
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex ugc-sidebar-footer"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
