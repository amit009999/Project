import React, { useState } from 'react';
import { Table, Button, ConfigProvider,Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import DropdownFilter from './DropdownFilter';
const generateData = () => {
  const data = [];
  for (let i = 1; i <= 100; i++) {
    data.push({
      key: i,
      block: `Block ${i}`,
      inverter: `Inverter ${i}`,
      generation: (Math.random() * 1000).toFixed(2),
      gii: (Math.random() * 10).toFixed(2),
      pr: (Math.random() * 100).toFixed(2),
      yield: (Math.random() * 100).toFixed(2),
    });
  }
  return data;
};

const TodayLiveDataTable = () => {
 const [inputvalue,setinputvalue] = useState()
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [filteredData, setFilteredData] = useState(generateData());

  const dropdownValuechange = (e,setSelectedKeys)=>{
    setSelectedKeys(e)
    //setdropdownValue(e);
  }

  const inputvalueChange = (e)=>{
    setinputvalue(e.target.value)
  }

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys);
    setSearchedColumn(dataIndex);
    if(selectedKeys==='='){
      const filtered = filteredData.filter((item) =>{
        return item[dataIndex] = inputvalue
      });
      setFilteredData(filtered);
    }
    else if(selectedKeys==='>'){
      const filtered = filteredData.filter((item) =>{
        return item[dataIndex] > inputvalue
      });
      setFilteredData(filtered);
    }
    else if(selectedKeys==='<'){
      const filtered = filteredData.filter((item) =>{
        return item[dataIndex] < inputvalue
      });
      setFilteredData(filtered);
    }
    else if(selectedKeys==='>='){
      const filtered = filteredData.filter((item) =>{
        return item[dataIndex] >= inputvalue
      });
      setFilteredData(filtered);
    }
    else if(selectedKeys==='<='){
      const filtered = filteredData.filter((item) =>{
        return item[dataIndex] <= inputvalue
      });
      setFilteredData(filtered);
    }
    else{
      const filtered = filteredData.filter((item) =>{
        return selectedKeys.includes(item[dataIndex])
      });
      setFilteredData(filtered);
    }
    
    
  };
 
  const handleReset = (clearFilters,setSelectedKeys,selectedKeys) => {
    clearFilters();
    //setSearchText('');
    setSelectedKeys('')
    //setdropdownValue([])
    setFilteredData(generateData());
  };

  const getColumnSearchProps=(dataIndex)=>({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters })=> (
        
      <div>
          <div className='h-10 w-44 flex justify-between '>
            <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      defaultHoverBg : 'black',
                      defaultHoverColor : 'white'
                    },
                  },
                }}
            >
                    <Button className='w-10 h-6 ml-1 mt-1  rounded-none' onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}>Search</Button>
                    <Button className='w-10 h-6 mr-1 mt-1 rounded-none' onClick={() => handleReset(clearFilters,setSelectedKeys,selectedKeys)}>Reset</Button>
                </ConfigProvider>
          </div>
          <div>
               <DropdownFilter mode = 'multiple' dropdownname={filteredData.map((item)=>(item[dataIndex]))} selectedValue = {selectedKeys} onchange={(e) => dropdownValuechange(e,setSelectedKeys)} width='100%'/> 
          </div>
      </div>
    ),
  });

  const getNumericColumnSearchProps=(dataIndex)=>({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters })=> (
        
      <div>
          <div className='h-10 w-44 flex justify-between '>
            <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      defaultHoverBg : 'black',
                      defaultHoverColor : 'white'
                    },
                  },
                }}
            >
                    <Button className='w-10 h-6 ml-1 mt-1  rounded-none' onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}>Search</Button>
                    <Button className='w-10 h-6 mr-1 mt-1 rounded-none' onClick={() => handleReset(clearFilters,setSelectedKeys,selectedKeys)}>Reset</Button>
                </ConfigProvider>
          </div>
          <div className='flex justify-between'>
          
               <DropdownFilter mode = 'single' dropdownname={['=','>','<','>=','<=']} selectedValue = {selectedKeys} onchange={(e) => dropdownValuechange(e,setSelectedKeys)} width='65px'/>
               <Input type='number' className='w-24 h-7  rounded-none' value={inputvalue} onChange={(e)=>inputvalueChange(e)} />
          </div>
      </div>
    ),
  });

  const columns = [
    {
      title: 'Block',
      width: 120,
      dataIndex: 'block',
      fixed: 'left',
      align: 'center',
      key: 'block',
      sorter: (a, b) => {
        // Extract the numerical part from the block names for comparison
        const numA = parseInt(a.block.replace('Block ', ''));
        const numB = parseInt(b.block.replace('Block ', ''));
        return numA - numB;
      },
      ...getColumnSearchProps('block'),
    },
    {
      title: 'Inverter',
      width: 100,
      dataIndex: 'inverter',
      fixed: 'left',
      align: 'center',
      key: 'inverter',
      sorter: (a, b) => {
        // Extract the numerical part from the block names for comparison
        const numA = parseInt(a.inverter.replace('Inverter ', ''));
        const numB = parseInt(b.inverter.replace('Inverter ', ''));
        return numA - numB;
      },
      ...getColumnSearchProps('inverter'),
      
    },
    {
        title: "Today's Generation (kWh)",
        width: 100,
        dataIndex: "generation",
        fixed: 'left',
        align: 'center',
        key: "generation",
        sorter: (a, b) => {
          // Extract the numerical part from the block names for comparison
          const numA = parseInt(a.generation.replace('generation', ''));
          const numB = parseInt(b.generation.replace('generation', ''));
          return numA - numB;
        },
        ...getNumericColumnSearchProps('generation'),
      },
      {
        title: 'GII (kWh/m2)',
        width: 100,
        dataIndex: 'gii',
        fixed: 'left',
        align: 'center',
        key: 'gii',
        sorter: (a, b) => {
          // Extract the numerical part from the block names for comparison
          const numA = parseInt(a.gii.replace('gii', ''));
          const numB = parseInt(b.gii.replace('gii', ''));
          return numA - numB;
        },
        ...getNumericColumnSearchProps('gii'),
      },
      {
        title: 'PR (%)',
        width: 100,
        dataIndex: 'pr',
        fixed: 'left',
        align: 'center',
        key: 'pr',
        sorter: (a, b) => {
          // Extract the numerical part from the block names for comparison
          const numA = parseInt(a.pr.replace('pr', ''));
          const numB = parseInt(b.pr.replace('pr', ''));
          return numA - numB;
        },
        ...getNumericColumnSearchProps('pr'),
      },
      {
        title: 'Yield (kWh/kWp)',
        width: 100,
        dataIndex: 'yield',
        fixed: 'left',
        align: 'center',
        key: 'yield',
        sorter: (a, b) => {
          // Extract the numerical part from the block names for comparison
          const numA = parseInt(a.yield.replace('pr', ''));
          const numB = parseInt(b.yield.replace('pr', ''));
          return numA - numB;
        },
        ...getNumericColumnSearchProps('yield'),
      },
    
  ];

  return (
        <div className=''>
            <Table
            columns={columns}
            dataSource={filteredData}
            bordered
            size="middle"
            scroll={{
                x: 1100,
                y: 200,
            }}
            rowSelection={true}
            
             className="custom-bordered-table"
            />
        </div>
  );
}

export default TodayLiveDataTable;
