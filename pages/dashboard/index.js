import React from 'react'
import DashboardMain from './DashboardMain'
import DashboardSidebar from './DashboardSidebar'

const Dashboard = () => {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100" id="body-container">
      <DashboardSidebar />
      <DashboardMain />
    </div>
  )
}

export default Dashboard