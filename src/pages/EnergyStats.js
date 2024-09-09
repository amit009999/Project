
import { useLocation } from 'react-router-dom';
import LossTrend from '../components/LossTrend'
import LossChart from '../components/Losschart';
import { useEffect, useState } from 'react';
import { useLocale } from 'antd/es/locale';
const EnergyStats = ({isSidebarOpen}) => {
    
   
    
  return (
    <div className=''>
        <div className={`transition-all duration-300 ${isSidebarOpen ? "w-wFit_sidebaropen" : "w-wFit_sidebarclose"} mt-10`}>
                <LossChart /> 
        </div>
        <div className={`transition-all duration-300 ${isSidebarOpen ? "w-wFit_sidebaropen" : "w-wFit_sidebarclose"} mt-10`}>
                <LossTrend /> 
        </div>
        
    </div>
  );
}

export default EnergyStats;
