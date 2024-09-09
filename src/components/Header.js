import { IoMoonSharp } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md";
const Header = ({darkMode , toggleDarkMode, toggleSidebar})=>{


    return(
        <nav className = "fixed top-0 z-50 w-full bg-gray-100 border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className = "px-3 py-3 lg:px-5 lg:pl-3">
                <div className = "flex items-center justify-between">
                    <div className = "flex items-center justify-start">
                        <button className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg 
                         hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200
                         dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 " onClick={toggleSidebar}>
                            <HiOutlineMenuAlt1 className = "text-2xl" />
                        </button>
                    </div>
                    <button className="dark:bg-slate-50 dark:text-slate-700 rounded-full p-2" onClick={toggleDarkMode}>{darkMode ? <IoIosSunny /> : <IoMoonSharp />}</button>
                </div>
            </div>
        </nav>
    )
}

export default Header;