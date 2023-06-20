import React, {useEffect, useState} from 'react'
// import DashboardMain from './DashboardMain'
import CustomCursor from '../components/CustomCursor'
import CursorSVG from "../../public/assets/images/icons/cursor-pena-01.svg"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import DashboardSidebar from './components/DashboardSidebar'
import DashboardMainNav from './DashboardMainNav'
import DashboardMainContent from './DashboardMainContent'
// import DashboardMainContent from './DashboardMainContent'

const Layout = () => {
  const router = useRouter();
  const {data: session, status} = useSession();
  const [activeNavItem, setActiveNavItem] = useState("requests")

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };

  // useEffect(() => {
  //   if(status === "authenticated"){
  //     //User is logged in
  //   } else if(status === "loading"){
  //     //Session is still loading
  //   } else {
  //     router.push("/api/auth/signin");
  //   }
  // }, [session, status, router])

  return (
    <>
      {/* {status === "authenticated" && (
        <div className="h-screen flex overflow-hidden bg-gray-100" id="body-container">
          <CustomCursor customCursor={CursorSVG} />
          <DashboardSidebar activeNavItem={activeNavItem} onNavItemClick={handleNavItemClick}/>
          <div className="flex flex-col w-0 flex-1 overflow-hidden">
            <DashboardMainNav />
            <DashboardMainContent activeNavItem={activeNavItem}/> 
          </div>
        </div>
      )} */}
      <div className="h-screen flex overflow-hidden bg-gray-100" id="body-container">
        <CustomCursor customCursor={CursorSVG} />
        <DashboardSidebar activeNavItem={activeNavItem} onNavItemClick={handleNavItemClick}/>
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <DashboardMainNav />
          <DashboardMainContent activeNavItem={activeNavItem}/> 
        </div>
      </div>
    </>
  )
}

export default Layout;