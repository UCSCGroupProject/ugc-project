import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilLockLocked,
  cilSettings,
  cilTask,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useNavigate } from 'react-router-dom'

import authService from '../../services/authService'

import prof_pic from './../../assets/images/avatars/Dhanushka_pic.jpg'

const AppHeaderDropdown = (props) => {
  let navigate = useNavigate()

  const logout = () => {
    authService.logout()
    navigate('/login')
  }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={prof_pic} size="md" />
        <span className="ms-2 fs-6">{props.userDetails.username}</span>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
        <NavLink to={`/${props.userDetails.actorType}`} style={{ textDecoration: 'none' }}>
          <CDropdownItem>
            <CIcon icon={cilBell} className="me-2" />
            Dashboard
          </CDropdownItem>
        </NavLink>
        <NavLink to={`/${props.userDetails.actorType}`} style={{ textDecoration: 'none' }}>
          <CDropdownItem>
            <CIcon icon={cilEnvelopeOpen} className="me-2" />
            Messages
            <CBadge color="success" className="ms-2">
              42
            </CBadge>
          </CDropdownItem>
        </NavLink>
        <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>
        <NavLink to={`/${props.userDetails.actorType}/settings`} style={{ textDecoration: 'none' }}>
          <CDropdownItem>
            <CIcon icon={cilSettings} className="me-2" />
            Settings
          </CDropdownItem>
        </NavLink>
        <CDropdownDivider />
        <CDropdownItem onClick={logout} style={{ cursor: 'pointer' }}>
          <CIcon icon={cilLockLocked} className="me-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
