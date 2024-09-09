import { useEffect, useState } from "react";
import { RiBarChart2Fill } from "react-icons/ri";
import Datepicker from './Datepicker';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import Dropdown from './SingleSelectionDropdown';
import TreeDropdown from './TreeDropdown';
import { IoArrowForwardSharp } from "react-icons/io5";
import { useAppContext } from '../redux/Appprovider';
dayjs.extend(customParseFormat);


const QueryModel = ()=>{
    const [dropdownValue1, setDropdownValue1] = useState('Inverters');
    const [dropdownValue2, setDropdownValue2] = useState('Inverters');
    const [dropdownValue3, setDropdownValue3] = useState('Inverters');
    const [dropdownValue4, setDropdownValue4] = useState('Inverters');
    const [dropdownValue5, setDropdownValue5] = useState('Inverters');
    const [dropdownValue6, setDropdownValue6] = useState('Inverters');
    const [dateRange1, setDateRange1] = useState([dayjs().subtract(1, 'day').startOf('day').format('DD-MM-YYYY'), dayjs().subtract(1, 'day').endOf('day').format('DD-MM-YYYY')]);
    const [dateRange2, setDateRange2] = useState([dayjs().subtract(1, 'day').startOf('day').format('DD-MM-YYYY'), dayjs().subtract(1, 'day').endOf('day').format('DD-MM-YYYY')]);
    const [dateRange3, setDateRange3] = useState([dayjs().subtract(1, 'day').startOf('day').format('DD-MM-YYYY'), dayjs().subtract(1, 'day').endOf('day').format('DD-MM-YYYY')]);
    const [value1, setValue1] = useState(['All']);
    const [value2, setValue2] = useState(['All']);
    const [value3, setValue3] = useState(['All']);
    const [value4, setValue4] = useState(['All']);
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible,setisVisible] =  useState(false);
    const {isSidebarOpen} = useAppContext();
    const handleDropdownChange1=(value)=>{
        setDropdownValue1(value)
     }
     const handleDropdownChange2=(value)=>{
        setDropdownValue2(value)
     }
     const handleDropdownChange3=(value)=>{
        setDropdownValue3(value)
     }
     const handleDropdownChange4=(value)=>{
        setDropdownValue4(value)
     }
     const handleDropdownChange5=(value)=>{
        setDropdownValue5(value)
     }
     const handleDropdownChange6=(value)=>{
        setDropdownValue6(value)
     }
     const handleDateChange1 = (values) => {
        const formateddateRange = values.map(date => dayjs(date,'DD-MM-YYYY').format('DD-MM-YYYY')) //['18-08-2024','19-08-2024']
        setDateRange1(formateddateRange);
     };
     const handleDateChange2 = (values) => {
        const formateddateRange = values.map(date => dayjs(date,'DD-MM-YYYY').format('DD-MM-YYYY')) //['18-08-2024','19-08-2024']
        setDateRange2(formateddateRange);
     };
     const handleDateChange3 = (values) => {
        const formateddateRange = values.map(date => dayjs(date,'DD-MM-YYYY').format('DD-MM-YYYY')) //['18-08-2024','19-08-2024']
        setDateRange3(formateddateRange);
     };
     const handleOnChange1 = (newValue) => {
        console.log('onChange111 ', newValue);
        setValue1(newValue);
      };
      const handleOnChange2 = (newValue) => {
        console.log('onChange111 ', newValue);
        setValue2(newValue);
      };
      const handleOnChange3 = (newValue) => {
        console.log('onChange111 ', newValue);
        setValue3(newValue);
      };
      const handleOnChange4 = (newValue) => {
        console.log('onChange111 ', newValue);
        setValue4(newValue);
      };
      const handleHover = () => {
        setIsHovered(true);
        
      };
      const isAllFieldsFilled = () => {
        return (dateRange1.length > 0 && value1.length>0 && value4.length>0)||
               (dateRange2.length > 0 && value2.length>0 && value4.length>0)||
               (dateRange3.length > 0 && value3.length>0 && value4.length>0);
      };
      
        const handleclick = ()=>{
            console.log("clicked")
            setisVisible(true);
        }


    return(

            <main>
                        <div className="bg-gray-200 mt-20 flex flex-row p-4 items-center border border-gray-300">
                            <RiBarChart2Fill className="text-4xl"/>
                            <h1 className='text-xl font-bold ml-2'>Create New Query Model</h1>
                        </div>
                    <div className="flex flex-row ">
                        <div className="">
                            <div className="flex flex-row ">
                                <Dropdown dropdownname={['Inverters' , 'Strings', 'WMS','Meters','UPS']} selectedValue={dropdownValue1} onValueChange={handleDropdownChange1} width={`${isSidebarOpen ? 'w-48' : 'w-60'} transition-all duration-300`}/>
                                <Datepicker
                                    onChange={handleDateChange1} selectedDate={dateRange1}/>
                                <Dropdown dropdownname={['Inverters' , 'Strings', 'WMS','Meters','UPS']} selectedValue={dropdownValue2} onValueChange={handleDropdownChange2} width={`${isSidebarOpen ? 'w-48' : 'w-60'} transition-all duration-300`}/>
                                <TreeDropdown selectedValue={dropdownValue1} onChange={handleOnChange1} selectedvalue={value1} width={`${isSidebarOpen ? '200px' : '300px'} `} height='45px'/>
                            </div>
                            <div className="flex flex-row ">
                                <Dropdown dropdownname={['Inverters' , 'Strings', 'WMS','Meters','UPS']} selectedValue={dropdownValue3} onValueChange={handleDropdownChange3} width={`${isSidebarOpen ? 'w-48' : 'w-60'} transition-all duration-300`}/>
                                <Datepicker
                                    onChange={handleDateChange2} selectedDate={dateRange2}/>
                                <Dropdown dropdownname={['Inverters' , 'Strings', 'WMS','Meters','UPS']} selectedValue={dropdownValue4} onValueChange={handleDropdownChange4} width={`${isSidebarOpen ? 'w-48' : 'w-60'} transition-all duration-300`}/>
                                <TreeDropdown selectedValue={dropdownValue1} onChange={handleOnChange2} selectedvalue={value2} width={`${isSidebarOpen ? '200px' : '300px'} `} height='45px'/>
                            </div>
                            <div className="flex flex-row ">
                                <Dropdown dropdownname={['Inverters' , 'Strings', 'WMS','Meters','UPS']} selectedValue={dropdownValue5} onValueChange={handleDropdownChange5} width={`${isSidebarOpen ? 'w-48' : 'w-60'} transition-all duration-300`}/>
                                <Datepicker
                                    onChange={handleDateChange3} selectedDate={dateRange3}/>
                                <Dropdown dropdownname={['Inverters' , 'Strings', 'WMS','Meters','UPS']} selectedValue={dropdownValue6} onValueChange={handleDropdownChange6} width={`${isSidebarOpen ? 'w-48' : 'w-60'} transition-all duration-300`}/>
                                <TreeDropdown selectedValue={dropdownValue1} onChange={handleOnChange3} selectedvalue={value3} width={`${isSidebarOpen ? '200px' : '300px'} `} height='45px'/>
                            </div>
                        </div>
                            <div className="flex flex-row transition-all duration-300">
                                <TreeDropdown selectedValue={dropdownValue1} onChange={handleOnChange4} selectedvalue={value4} width={`${isSidebarOpen ? '291px' : '311px'}`} height='135px'/>
                                    <div className={`bg-gray-200 ${isHovered && isAllFieldsFilled() ? 'cursor-pointer' : 'cursor-not-allowed'} text-gray-400 hover:text-gray-800 text-xl flex justify-center `} onMouseEnter={handleHover} >
                                        <button className={`bg-gray-200 p-4  ${isHovered && isAllFieldsFilled() ? 'cursor-pointer' : 'cursor-not-allowed'} text-xl border border-gray-300`} 
                                            onClick={isAllFieldsFilled() ? handleclick : undefined}><IoArrowForwardSharp />
                                        </button>
                                    </div>
                            </div>
                     
                    </div>

                    <div className={`bg-white ${isVisible ? 'hidden' : ''}`}>
                        <h1>test</h1>
                    </div>
                
            </main>
    )
}

export default QueryModel;

                        