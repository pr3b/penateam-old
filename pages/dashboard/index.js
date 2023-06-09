import React from 'react'
import DashboardMain from './DashboardMain'
import DashboardSidebar from './DashboardSidebar'
import CustomCursor from '../components/CustomCursor'
import CursorSVG from "../../public/assets/images/icons/cursor-pena-01.svg"

const Dashboard = () => {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100" id="body-container">
      <CustomCursor customCursor={CursorSVG} />
      <DashboardSidebar />
      <DashboardMain />
    </div>
  )
}

export default Dashboard