import React, { useState, useEffect } from 'react';
import TopMenu from './TopMenu';
import DashboardContent from './DashboardContent';
import { getByUser } from '../../database/db'

const Dashboard = () => {

  const user = JSON.parse(sessionStorage.getItem('userData'))
  const [Bool, setBool] = useState(false)

  useEffect(() => {
    if (user === null) {
      alert('Bạn không được phép truy cập trang này')
      window.location.pathname = '/'
    } else {
      const get = async () => {
        const ad = await getByUser(user)
        if (ad.role === 0) {
          setBool(true)
        }
        else {
          alert('Bạn không được phép truy cập trang này')
          window.location.pathname = '/'
        }
      }
      get()
    }
  })
  if (Bool) {
    return (
      <React.Fragment>
        <TopMenu></TopMenu>
        <DashboardContent></DashboardContent>
      </React.Fragment>
    )
  }
  else {
    return (
      <React.Fragment>
      </React.Fragment>
    )
  }

}

export default Dashboard;