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
const BlockVsInverter = ()=>{
    const [dateRange, setDateRange] = useState([dayjs().subtract(1, 'day').startOf('day').format('DD-MM-YYYY'), dayjs().subtract(1, 'day').endOf('day').format('DD-MM-YYYY')]);
    const [dropdownValue1, setDropdownValue1] = useState('75th Percentile');
    const [isHovered, setIsHovered] = useState(false);
    const [value, setValue] = useState(['All']);
    const handleDateChange = (values) => {
        const formateddateRange = values.map(date => dayjs(date,'DD-MM-YYYY').format('DD-MM-YYYY')) //['18-08-2024','19-08-2024']
        setDateRange(formateddateRange);
     };
     const handleDropdownChange=(value)=>{
        setDropdownValue1(value)
     }
     const handleOnChange = (newValue) => {
        console.log('onChange111 ', newValue);
        setValue(newValue);
      };
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
            <CollapseComponent title={'% Specific Yield: Block Vs Inverter'}>
            <div className='flex'>
                <Datepicker onChange={handleDateChange} selectedDate={dateRange} />
                <Dropdown dropdownname={['Median' , '75th Percentile', '95th Percentile','Max']} selectedValue={dropdownValue1} onValueChange={handleDropdownChange} width='w-60'/>
                <TreeDropdown selectedValue={''} onChange={handleOnChange} selectedvalue={value} width='300px' height=''/>
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

export default BlockVsInverter;