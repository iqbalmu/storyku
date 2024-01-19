/* eslint-disable react/prop-types */
import { NavbarSimple } from "../shared/Navbar"
import { DefaultSidebar } from "../shared/Sidebar"

const RootLayout = ({ children }) => {
  return (
    <div className="px-4 min-h-screen bg-blue-gray-50 pt-2 py-8 w-full">
      <NavbarSimple />
      <div className="flex gap-5 mt-5">
        <DefaultSidebar />
        {children}
      </div>
    </div>
  )
}

export default RootLayout