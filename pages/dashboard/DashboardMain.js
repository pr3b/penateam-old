import React from 'react'
import DashboardMainNav from './DashboardMainNav'
import DashboardMainContent from './DashboardMainContent'

const DashboardMain = () => {
  return (
    <div className="flex flex-col w-0 flex-1 overflow-hidden">
      <DashboardMainNav />
      <DashboardMainContent />
    </div>
  )
}

export default DashboardMain