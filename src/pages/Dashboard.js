import React from 'react'
import Sidebar from '../components/Sidebar'
import "./dashboard.css"
import Main from './Main/Main'

const Dashboard = () => {
  return (
    <div className='container-fluid gx-0 d-flex dashboard '>
      <Sidebar/>
      <Main/>
    </div>
  )
}

export default Dashboard