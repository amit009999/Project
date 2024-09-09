import React, { useEffect, useState } from 'react';
import { Collapse,Space,Button   } from 'antd';
import TodayLiveDataTable from './TodayLiveDataTable';
import PeerComparison from './PeerComparison';


const TodayLiveData = ()=>{
  const [isTableVisible, setIsTableVisible] = useState(false);
  

  const handleAddTable = () => {
    setIsTableVisible(true);
  };

  const items = [
    {
      key: '1',
      label: <h1 className='text-xl font-bold'>Today Live Data</h1>,
      children: (
        <div>
          {!isTableVisible && (
            <Button type="primary" onClick={handleAddTable} className=''>
              Click to add
            </Button>
          )}
          {isTableVisible && <TodayLiveDataTable />}
        </div>
      )
    },
    
  ];
    const onChange = (key) => {
        console.log(key);
      };


    return(
      <Space direction="vertical">
            <Collapse className='bg-gray-400 w-wFit_sidebarclose'
             items={items} defaultActiveKey={['1']} onChange={onChange} />
        </Space>
    )
}

export default TodayLiveData;