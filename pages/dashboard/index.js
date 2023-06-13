import React, {useEffect} from 'react'
import DashboardMain from './DashboardMain'
import CustomCursor from '../components/CustomCursor'
import CursorSVG from "../../public/assets/images/icons/cursor-pena-01.svg"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import DashboardSidebar from './components/DashboardSidebar'

const Dashboard = () => {
  const router = useRouter();
  const {data: session, status} = useSession();

  useEffect(() => {
    if(status === "authenticated"){
      //User is logged in
    } else if(status === "loading"){
      //Session is still loading
    } else {
      router.push("/api/auth/signin");
    }
  }, [session, status, router])

  return (
    <>
      {status === "authenticated" && (
        <div className="h-screen flex overflow-hidden bg-gray-100" id="body-container">
          <CustomCursor customCursor={CursorSVG} />
          <DashboardSidebar />
          <DashboardMain />
        </div>
      )}
    </>
  )
}

export default Dashboard;