import { footerInfo, footerLinks, navLinks } from "../constants"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className=" max-container flex flex-col items-center">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col w-full">
        <div className="flex flex-col items-start">
          <Link to="/" className="flex gap-3 items-center text-3xl font-palanquin font-bold">
            D.A BUILDS
          </Link>
          <p className="mt-3 break-words text-lg leading-normal text-slate-gray font-montserrat sm:max-w-sm">
            {footerInfo}
          </p>
          <div>
            TO TOP ARROW
          </div>
        </div>
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-black'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-slate-gray hover:text-chestnut'
                    key={link.label}
                  >
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p>&copy; 2024 D.A Builds Inc. All Rights Reserved</p>
    </footer>
  )
}

export default Footer


