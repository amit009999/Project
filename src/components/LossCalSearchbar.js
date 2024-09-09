import SingleSelectionDropdownoption from './SingleSelectionDropdown';
import { useEffect, useState } from 'react';
import Datepickercomponent from './Datepicker';
import { IoArrowForwardSharp } from "react-icons/io5";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const invertersName = ['All Inverters']; 
const LossCalSearchbar = ()=>{
    const [dropdownname,setdropdownname] = useState([])
    const [dateRange, setDateRange] = useState([dayjs().subtract(1, 'day').startOf('day').format('DD-MM-YYYY'), dayjs().subtract(1, 'day').endOf('day').format('DD-MM-YYYY')]);
    const [dropdownValue1, setDropdownValue1] = useState('Yesterday');
    const [dropdownValue2, setDropdownValue2] = useState('All Inverters');
    const [apidata, setApidata] = useState([]);

    const getInvertersname=()=>{
        for (let i = 1; i <= 12; i++) {
            const prefix = `ICR${String(i).padStart(2, '0')}-INV`;
            for (let j = 1; j <= 30; j++) {
                invertersName.push(`${prefix}${String(j).padStart(2, '0')}`);
            }
        } 
    }

    const handlequickDropdownChange = (value)=>{
        let range;
        switch (value) {
        case 'Yesterday':
            range = [dayjs().subtract(1, 'day').startOf('day').format('DD-MM-YYYY'), dayjs().subtract(1, 'day').endOf('day').format('DD-MM-YYYY')];
            break;
        case 'Last 3 days':
            range = [dayjs().subtract(3, 'day').startOf('day').format('DD-MM-YYYY'), dayjs().subtract(1, 'day').endOf('day').format('DD-MM-YYYY')];
            break;
        case 'Last 5 days':
            range = [dayjs().subtract(5, 'day').startOf('day').format('DD-MM-YYYY'), dayjs().subtract(1, 'day').endOf('day').format('DD-MM-YYYY')];
            break;
        case 'Last 7 days':
            range = [dayjs().subtract(7, 'day').startOf('day').format('DD-MM-YYYY'), dayjs().subtract(1, 'day').endOf('day').format('DD-MM-YYYY')];
            break;
        case 'Last 15 days':
            range = [dayjs().subtract(15, 'day').startOf('day').format('DD-MM-YYYY'), dayjs().subtract(1, 'day').endOf('day').format('DD-MM-YYYY')];
            break;
    }
        setDropdownValue1(value);
        setDateRange(range);
    }

    const handleDropdownChange = (value) => {
        setDropdownValue2(value)
      };
    const handleDateChange = (values) => {
         const formateddateRange = values.map(date => dayjs(date,'DD-MM-YYYY').format('DD-MM-YYYY')) //['18-08-2024','19-08-2024']
         setDateRange(formateddateRange);
      };
    const handleSubmit = ()=>{
        if(dateRange.length===2 && dropdownValue2){
            
            
            // endDate: "04-07-2024"
            // inverterName:"ICR01-INV02"
            // startDate:"01-07-2024"
            const newData = { startDate:dateRange[0],endDate:dateRange[1], inverterName:dropdownValue2 };
            console.log(newData)
            setApidata(newData);
        }
    }

    useEffect(()=>{
        getInvertersname();
        setdropdownname(invertersName);
    },[]);

    return(
        <div className='h-12 flex flex-row items-center bg-gray-200 border border-gray-300'>
            <div className='w-5/12 font-bold text-xl'>
                <h1>Loss Calculation</h1>
            </div>
            <div className='w-7/12 text-lg flex flex-row'>
                <div className='cursor-pointer border w-1/3'>
                    <SingleSelectionDropdownoption dropdownname={['Yesterday' , 'Last 3 days', 'Last 5 days','Last 7 days','Last 15 days']} selectedValue={dropdownValue1} onValueChange={handlequickDropdownChange}/>
                </div>
                <div className='cursor-pointer border w-1/3' >
                    {<SingleSelectionDropdownoption dropdownname={dropdownname} selectedValue={dropdownValue2} onValueChange={handleDropdownChange} />}
                </div>
                <div className=' flex items-center border flex-1'>
                    <Datepickercomponent selectedDate={dateRange} onChange={handleDateChange}/>
                </div>
                
            </div>
            <div className='p-2.5 cursor-pointer border border-gray-400 text-gray-400 hover:text-black' onClick={handleSubmit}>
                <button><IoArrowForwardSharp /></button>
            </div>
            
        </div>
    )
}

export default LossCalSearchbar;