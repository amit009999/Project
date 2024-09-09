import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import EnergyStats from './pages/EnergyStats';
import LiveMonitoring from './pages/LiveMonitoring';
import { useAppContext } from './redux/Appprovider';
function App() {

  const { darkMode, toggleDarkMode, isSidebarOpen, toggleSidebar } = useAppContext();
  // const [darkMode , setdarkMode] = useState(false);
  // const [isSidebarOpen , setIsSidebarOpen] = useState(false);
  // const toggleDarkMode = ()=>{
  //   setdarkMode(!darkMode);
  // }
  // const toggleSidebar = ()=>{
  //   setIsSidebarOpen(!isSidebarOpen);
  // }
  return (
   
    <div className={`${darkMode && "dark"} font-quickSand`}>
      <Home>
      <Header toggleDarkMode = {toggleDarkMode} darkMode={darkMode} toggleSidebar = {toggleSidebar}/>
      <div className="flex">
        <BrowserRouter>
          <Sidebar  isSidebarOpen = {isSidebarOpen}/>
              <div className={`transition-all duration-300 flex justify-center mt-4 ${isSidebarOpen ? "ml-64 w-wScreen" : "ml-0 w-screen"}`}>
                <Routes>
                  <Route path="/solar/analytics/energy-stats/bariseer" element={<EnergyStats isSidebarOpen = {isSidebarOpen} />} />
                  <Route path="/solar/analytics/energy-stats/gj03" element={<EnergyStats isSidebarOpen = {isSidebarOpen} />} />
                  <Route path="/solar/analytics/energy-stats/gj01" element={<EnergyStats isSidebarOpen = {isSidebarOpen} />} />
                  <Route path="/solar/analytics/energy-stats/rumsl" element={<EnergyStats isSidebarOpen = {isSidebarOpen} />} />
                  <Route path="/solar/analytics/energy-stats/seci09" element={<EnergyStats isSidebarOpen = {isSidebarOpen} />} />
                  <Route path="/solar/analytics/live-monitoring/bariseer" element={<LiveMonitoring isSidebarOpen = {isSidebarOpen} />} />
                  <Route path="/solar/analytics/live-monitoring/gj03" element={<LiveMonitoring isSidebarOpen = {isSidebarOpen} />} />
                  <Route path="/solar/analytics/live-monitoring/gj01" element={<LiveMonitoring isSidebarOpen = {isSidebarOpen} />} />
                  <Route path="/solar/analytics/live-monitoring/rumsl" element={<LiveMonitoring isSidebarOpen = {isSidebarOpen} />} />
                  <Route path="/solar/analytics/live-monitoring/seci09" element={<LiveMonitoring isSidebarOpen = {isSidebarOpen} />} />
                </Routes>
              </div>
          </BrowserRouter>
      </div>
      </Home>
    </div>
  );
}

export default App;