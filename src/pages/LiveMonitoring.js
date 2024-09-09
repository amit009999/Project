import PowerIrradiationTrend from '../components/PowerIrradiationTrend';
import TodayLiveData from '../components/TodayLiveData';
import {useLocation} from 'react-router-dom';
import PeerComparison from '../components/PeerComparison';
import BlockVsInverter from '../components/SpecificYieldBlockVsInverter'
import InverterVsString from '../components/SpecificYieldInverterVsString'
import BlockWiseActiveInputs from '../components/BlockWiseActiveInputs'
import QueryModel from '../components/QueryModel'

const LiveMonitoring = ({isSidebarOpen})=>{
    const API = useLocation().pathname;
    console.log("sdsdsdsd" , API);
    return(
        <div className={`transition-all duration-300 ${isSidebarOpen ? "w-wFit_sidebaropen" : "w-wFit_sidebarclose"}`}>
            <div>
                <div className='h-12 bg-gray-300 border border-gray-400 flex items-center text-2xl font-bold '>
                    <h1 className='ml-2'>Power Vs Irradiation Trend</h1>
                </div>
                <div className={`bg-white border border-gray-400  `}>
                        <PowerIrradiationTrend /> 
                </div>
            </div>
            <div className=''>
                    <TodayLiveData/> 
                    <PeerComparison/>
                    <BlockVsInverter />
                    <InverterVsString />
                    <BlockWiseActiveInputs />
                    <QueryModel />
            </div>
        </div>
    )
}

export default LiveMonitoring;