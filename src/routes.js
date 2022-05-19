import React from 'react'

const Usernew = React.lazy(() => import('./views/tugas/Usernew'))
const Userlist = React.lazy(() => import('./views/tugas/Userlist'))
const UserDetail = React.lazy(() => import('./views/tugas/Detail'))

const routes = [
  { path: "/", exact: true, name: "Home", component: Userlist },
  { path: "/dashboard", exact: true, name: "Home", component: Userlist },
  { path: "/user", name: "User"},
  { path: "/user/new", name: "New User", component: Usernew },
  { path: "/user/list", name: "User List", component: Userlist },
  { path: "/user/:id", name: "User", component: UserDetail },
]

export default routes
