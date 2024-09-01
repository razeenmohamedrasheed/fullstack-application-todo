import { Outlet } from "react-router-dom"
import NavigationPage from "../NavigationPage/NavigationPage"


function DashBoard() {
  return (
   <>
   <NavigationPage />
   <Outlet/>
   </>
  )
}

export default DashBoard