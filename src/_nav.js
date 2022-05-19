import React from 'react'
import CIcon from '@coreui/icons-react'
import { cibAddthis, cilList, cilUser } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavGroup,
    name: 'Users',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        icon: <CIcon icon={cibAddthis} customClassName="nav-icon" />,
        name: 'New User',
        to: '/user/new',
      },
      {
        component: CNavItem,
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
        name: 'User List',
        to: '/user/list',
      },
    ],
  },
]

export default _nav
