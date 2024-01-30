import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import { useState } from "react"

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }
  
  return (
    <div className="h-full w-full flex flex-col">
        <Nav toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/> 
        {isSidebarOpen && <Sidebar isSidebarOpen={isSidebarOpen}/>}
        <section className="flex flex-1 min-h-full w-full">
            <Outlet />
        </section>
        <section className="bg-stone-200 padding-x padding-t pb-8">
            <Footer/>
        </section>
    </div>
  )
}

export default Layout