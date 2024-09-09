import CollapseComponent from './Collapse'
import HeatMap from './HeatMap';
import Datepicker from './Datepicker'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useState } from 'react';
import Dropdown from './SingleSelectionDropdown';
import TreeDropdown from './TreeDropdown';
import { IoArrowForwardSharp } from "react-icons/io5";
dayjs.extend(customParseFormat);
const BlockWiseActiveInputs = ()=>{
    const [dateRange, setDateRange] = useState([dayjs().subtract(1, 'day').startOf('day').format('DD-MM-YYYY'), dayjs().subtract(1, 'day').endOf('day').format('DD-MM-YYYY')]);
    const [dropdownValue1, setDropdownValue1] = useState('75th Percentile');
    const [isHovered, setIsHovered] = useState(false);
    const [value, setValue] = useState(['All']);

     const handleHover = () => {
        setIsHovered(true);
      };
      const isAllFieldsFilled = () => {
        return dateRange.length > 0 && value.length>0;
      };
      const handleclick = ()=>{
        console.log("clicked")
      }
    return(
        <div>
            <CollapseComponent title={'Block-Wise Active Inputs'}>
            <div className='flex'>
                <div className={`bg-gray-200 ${isHovered && isAllFieldsFilled() ? 'cursor-pointer' : 'cursor-not-allowed'} text-gray-400 hover:text-gray-800 text-xl`} onMouseEnter={handleHover}>
                    <button className={`bg-gray-200 p-2.5 ${isHovered && isAllFieldsFilled() ? 'cursor-pointer' : 'cursor-not-allowed'} text-gray-400 hover:text-gray-800 text-xl`}
                    onClick={isAllFieldsFilled() ? handleclick : undefined}>
                        <IoArrowForwardSharp /></button>
                </div>
            </div>
                <HeatMap />
            </CollapseComponent>
        </div>
    )

}

export default BlockWiseActiveInputs;