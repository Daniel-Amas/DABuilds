import { useLocation } from "react-router-dom"
import { navLinks } from "../constants"
import PropTypes from "prop-types"; // Import PropTypes
//TODO: MAKE SIDEBAR CLOSE ON SCROLL (TOGGLE THE STATE OF THE IMG BUTTON)
//TODO: MAKE SIDEBAR CLOSE ON CLICK OUTSIDE THE SIDEBAR
//TODO: MAKE SIDEBAR CLOSE ON CLICKING A NAVLINK
//TODO: MAKE SIDEBAR HAVE TRANSLUCENT OVERLAY THAT COVERS ALMOST THE ENTIRE SCREEN WHEN OPEN


const Sidebar = ({isSidebarOpen}) => {
  const {pathname} = useLocation()
  return (
    <nav className={`w-full h-full lg:hidden fixed top-[88px] right-0 ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <ul className="grid grid-cols-1 bg-pale-blue">
          {navLinks.map((link)=>{
            const isActive = pathname === link.href
            return(
            <li key={link.label} className={`p-2 border-b-2 border-stone-200 w-full ${isActive && 'text-chestnut'}`}>
              <a href={link.href}>
                {link.label}
              </a>
            </li>
          )})}
        </ul>
    </nav>
  )
}

// Add PropTypes for isSidebarOpen
Sidebar.propTypes = {
    isSidebarOpen: PropTypes.bool.isRequired,
  };

export default Sidebar