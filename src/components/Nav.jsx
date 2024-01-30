import PropTypes from "prop-types"; // Import PropTypes
import { navLinks } from "../constants"
import {Hamburger, Cancel} from "../assets/icons"
import { Link, useNavigate } from "react-router-dom"

const Nav = ({toggleSidebar, isSidebarOpen}) => {
  const navigate = useNavigate()

  return (
    <header className=" bg-stone-100 fixed top-0 w-full padding-x py-8 shadow-3xl">
      <nav className="flex flex-1 justify-between items-center max-container">
        <Link to="/" className="flex gap-3 items-center text-3xl font-palanquin font-bold">
          D.A BUILDS
        </Link>
        <ul className="flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link)=>{
            return(
            <li key={link.label} className={`font-montserrat text-xl md:text-l hover:text-chestnut transition ease-in duration-300`}>
              <a href={link.href}>
                {link.label}
              </a>
            </li>
          )})}
        </ul>
        <img id="menu" className="hidden max-lg:block" src={isSidebarOpen ? Cancel : Hamburger} alt="Menu" height={24} width={24} onClick={toggleSidebar}/>
      </nav>
    </header>
  )
}

Nav.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default Nav