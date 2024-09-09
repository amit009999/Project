import { useState } from "react";
import { Link } from "react-router-dom";
import { TbDeviceAnalytics, TbChevronDown, TbChevronRight } from "react-icons/tb";
import { IoMdSettings,IoMdWifi  } from "react-icons/io";
import { FaEarthAmericas } from "react-icons/fa6";
import { BiSolidBellRing } from "react-icons/bi";
import { GrConfigure } from "react-icons/gr";
import { SlEnergy } from "react-icons/sl";
import { FiLogOut } from "react-icons/fi";
import { RiBarChart2Fill,RiLineChartFill  } from "react-icons/ri";
import { LuFan } from "react-icons/lu";
import { MdSunny,MdLightbulb  } from "react-icons/md";
const Sidebar = ({ isSidebarOpen }) => {
  const [openMenus, setOpenMenus] = useState({});
  const [openSubMenus, setOpenSubMenus] = useState({});
  const [sidebar, setSidebar] = useState([]);
  const [active , setActive] = useState("")
  const [selectedPath, setSelectedPath] = useState("");
  const solarMenus = [
    {title : "Live Dashboard & MIS" , icon : "" , path : "/live" , isSelectionvisible : false},
    {title : "CMMS" , icon : <GrConfigure/> , path : "/cmms" , isSelectionvisible : true},
    {
      title: "Analytics",
      icon: <TbDeviceAnalytics />,
      isSelectionvisible : true,
      submenu: [
        { title: "Energy Stats", icon : <SlEnergy /> , subsubmenu: [{ title: "AWS Bariseer" , path : "/solar/analytics/energy-stats/bariseer"}, { title: "GJ03 SOLAR" ,path : "/solar/analytics/energy-stats/gj03" } , { title: "GJ01 SOLAR",path : "/solar/analytics/energy-stats/gj01" },{ title: "RUMSL",path : "/solar/analytics/energy-stats/rumsl" },{ title: "SECI09" ,path : "/solar/analytics/energy-stats/seci09"} ] },
        { title: "Live Monitoring", icon : <IoMdWifi /> ,subsubmenu: [{ title: "AWS Bariseer" , path : "/solar/analytics/live-monitoring/bariseer"}, { title: "GJ03 SOLAR" ,path : "/solar/analytics/live-monitoring/gj03" } , { title: "GJ01 SOLAR",path : "/solar/analytics/live-monitoring/gj01" },{ title: "RUMSL",path : "/solar/analytics/live-monitoring/rumsl" },{ title: "SECI09" ,path : "/solar/analytics/live-monitoring/seci09"}] },
        { title: "Visulization", icon : <RiBarChart2Fill /> ,subsubmenu: [{ title: "AWS Bariseer" , path : "/solar/analytics/visulization/bariseer"}, { title: "GJ03 SOLAR" ,path : "/solar/analytics/visulization/gj03" } , { title: "GJ01 SOLAR",path : "/solar/analytics/visulization/gj01" },{ title: "RUMSL",path : "/solar/analytics/visulization/rumsl" },{ title: "SECI09" ,path : "/solar/analytics/visulization/seci09"}] },
        { title: "Power Curve", icon: <RiLineChartFill />, subsubmenu: [{ title: "AWS Bariseer" , path : "/solar/analytics/power-curve/bariseer"}, { title: "GJ03 SOLAR" ,path : "/solar/analytics/power-curve/gj03" } , { title: "GJ01 SOLAR",path : "/solar/analytics/power-curve/gj01" },{ title: "RUMSL",path : "/solar/analytics/power-curve/rumsl" },{ title: "SECI09" ,path : "/solar/analytics/power-curve/seci09"}] },
        { title: "Alarm", icon : <BiSolidBellRing /> , subsubmenu: [{ title: "AWS Bariseer" , path : "/solar/analytics/alarm/bariseer"}, { title: "GJ03 SOLAR" ,path : "/solar/analytics/alarm/gj03" } , { title: "GJ01 SOLAR",path : "/solar/analytics/alarm/gj01" },{ title: "RUMSL",path : "/solar/analytics/alarm/rumsl" },{ title: "SECI09" ,path : "/solar/analytics/alarm/seci09"}] },
        { title: "Insights & Observation", icon : <MdLightbulb /> ,subsubmenu: [{ title: "AWS Bariseer" , path : "/solar/analytics/insights/bariseer"}, { title: "GJ03 SOLAR" ,path : "/solar/analytics/insights/gj03" } , { title: "GJ01 SOLAR",path : "/solar/analytics/insights/gj01" },{ title: "RUMSL",path : "/solar/analytics/insights/rumsl" },{ title: "SECI09" ,path : "/solar/analytics/insights/seci09"}] },
      ]
    },
    {title : "Alarm Summary" , icon : <BiSolidBellRing /> , path : "/portfolio-alarms",isSelectionvisible : false},
    {title : "Map" , icon : <FaEarthAmericas /> ,isSelectionvisible : true,submenu: [{ title: "AWS Bariseer" , path : "/map/bariseer"}, { title: "GJ03 SOLAR" ,path : "/map/gj03" } , { title: "GJ01 SOLAR",path : "/map/gj01" },{ title: "RUMSL",path : "/map/rumsl" },{ title: "SECI09" ,path : "/map/seci09"}]},
    {title : "Settings" , icon : <IoMdSettings /> , path : "/settings",isSelectionvisible : false},
    {title : "Logout" , icon : <FiLogOut/> , path : "/logout"}
  ];

  const windMenus = [
    {title : "Live Dashboard & MIS" , icon : "" , path : "/live"},
    {title : "CMMS" , icon : <GrConfigure/> , path : "/cmms"},
    {
      title: "Analytics",
      icon: <TbDeviceAnalytics />,
      submenu: [
        { title: "Energy Stats", icon : <SlEnergy /> , subsubmenu: [{ title: "GJ03 Wind" , path : "/wind/analytics/energy-stats/gj03"}] },
        { title: "Live Monitoring", icon : <IoMdWifi />,subsubmenu: [{ title: "GJ03 Wind" , path : "/wind/analytics/live-monitoring/gj03"}] },
        { title: "Visulization",icon : <RiBarChart2Fill /> , subsubmenu: [{ title: "GJ03 Wind" , path : "/wind/analytics/visulization/gj03"}] },
        { title: "Power Curve", icon: <RiLineChartFill />, subsubmenu: [{ title: "GJ03 Wind" , path : "/wind/analytics/power-curve/gj03"}] },
        { title: "Alarm",icon : <BiSolidBellRing /> , subsubmenu: [{ title: "GJ03 Wind" , path : "/wind/analytics/alarm/gj03"}] },
        { title: "Insights & Observation",icon : <MdLightbulb /> , subsubmenu: [{ title: "GJ03 Wind" , path : "/wind/analytics/insights/gj03"}] },
      ]
    },
    {title : "Alarm Summary" , icon : <BiSolidBellRing /> , path : "/portfolio-alarms"},
    {title : "Map" , icon : <FaEarthAmericas /> , path : "" , submenu: [{ title: "GJ03 Wind" , path : "/map/gj03"}]},
    {title : "Settings" , icon : <IoMdSettings /> , path : "/settings"},
    {title : "Logout" , icon : <FiLogOut/> , path : "/logout"}
  ];

  const toggleMenuExpand = (index) => {
    
    setOpenMenus((prevState) => ({ ...prevState, [index]: !prevState[index] }));
  };

  const toggleSubMenuExpand = (menuIndex, subIndex) => {
    setOpenSubMenus((prevState) => ({
      ...prevState,
      [`${menuIndex}-${subIndex}`]: !prevState[`${menuIndex}-${subIndex}`]
    }));
  };

  const handleSidebarselection=(menuname)=>{
    (menuname==="solarMenus" ? setSidebar(solarMenus) : setSidebar(windMenus));
    setActive(menuname)
  }

  const handleSubsubmenuClick = (path) => {
    // console.log("path" , path)
    setSelectedPath(path); // Set the path when a subsubmenu is clicked
  };

  return (
    <div>
      <aside className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-gray-100 border-r border-gray-200 sm-translate-x-0 dark:bg-gray-900 dark:border-gray-700 transition-transform ${isSidebarOpen ? "duration-300 translate-x-0" : "duration-300 -translate-x-full"}`}>
        <div className="flex flex-row border-b border-gray-200 dark:border-gray-600 -mt-4">
           <div className="flex-1  flex justify-center border-r border-gray-200 dark:border-gray-600" onClick={()=>handleSidebarselection("solarMenus")}>
              <MdSunny className={`text-6xl px-5 cursor-pointer text-slate-400 dark:text-slate-700 hover:text-slate-950 ${active==="solarMenus" ? "dark:text-white text-slate-950" : "dark:text-slate-700 text-slate-400"} dark:hover:text-white`}/>
           </div>
           <div className="flex-1 flex justify-center" onClick={()=>handleSidebarselection("windMenus")}>
              <LuFan className={`text-6xl px-5 cursor-pointer text-slate-400 dark:text-slate-700 hover:text-slate-950 ${active==="windMenus" ? "dark:text-white text-slate-950" : "dark:text-slate-700 text-slate-400"} dark:hover:text-white`}/>
           </div>
        </div>
        <div className="h-full px-3 pb-4 overflow-y-auto py-3">
          <ul className="space-y-2 font-medium">
            {sidebar.map((menu, index) => (
              <li key={index}>
                    <div className="text-xl flex items-center dark:hover:bg-gray-700 dark:text-white text-gray-900 hover:bg-gray-100 cursor-pointer rounded-lg group"
                      onClick={() => toggleMenuExpand(index)}>
                      <span className="dark:text-gray-400 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                        {menu.icon}
                      </span>
                      {menu.path ? (
                      <Link to = {menu.path} onClick={() => handleSubsubmenuClick(`${menu.path}`)}>
                        <div>
                          <span className="ml-2">{menu.title}</span>
                        </div>
                      </Link>
                      ) : (
                        <div>
                          <span className="ml-2">{menu.title}</span>
                        </div>
                      )}
                      {menu.submenu && (
                        <span className="ml-2 cursor-pointer ">
                          {openMenus[index] ? <TbChevronDown /> : <TbChevronRight />}
                        </span>
                      )}
                    </div>
                {openMenus[index] && (
                  <ul className="ml-4">
                    {menu.submenu?.map((submenu, subIndex) => (
                      <li key={subIndex} className="mt-2 p-1">
                        
                        <div className="gap-2 flex items-center cursor-pointer dark:hover:bg-gray-700 dark:text-white text-gray-900 hover:bg-gray-100 rounded-lg group" onClick={() => toggleSubMenuExpand(index, subIndex)}>
                          <span className="dark:text-gray-400 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                            {submenu.icon}
                          </span>
                          {submenu.path ? (
                          <Link to = {submenu.path} onClick={() => {if(submenu.path){handleSubsubmenuClick(`${submenu.path}`)}}}>
                            <div>
                              <span>{submenu.title}</span>
                            </div>
                          </Link>
                          ) : (
                            <div>
                              <span>{submenu.title}</span>
                            </div>
                          )}
                          {submenu.subsubmenu && (
                            <span className="ml-2 cursor-pointer" >
                              {openSubMenus[`${index}-${subIndex}`] ? <TbChevronDown /> : <TbChevronRight />}
                            </span>
                          )}
                        </div>
                        {openSubMenus[`${index}-${subIndex}`] && (
                          <ul className="ml-6">
                            {submenu.subsubmenu?.map((subsubmenu, subsubIndex) => (
                              <li key={subsubIndex} className="mt-2">
                                {subsubmenu.path ? (
                                <Link to = {subsubmenu.path || "#"} onClick={() => handleSubsubmenuClick(`${subsubmenu.path}`)}>
                                  <div className="cursor-pointer dark:hover:bg-gray-700 dark:text-white text-gray-900 hover:bg-gray-100 rounded-lg">
                                    {subsubmenu.title}
                                  </div>
                                </Link>
                                ) : (
                                  <div className="cursor-pointer dark:hover:bg-gray-700 dark:text-white text-gray-900 hover:bg-gray-100 rounded-lg">
                                    {subsubmenu.title}
                                  </div>
                                )}
                                </li>
                                
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;