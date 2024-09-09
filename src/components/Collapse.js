import React, { useEffect, useState } from 'react';
import { Collapse,Space,Button   } from 'antd';
import Datepicker from './Datepicker';
import { useAppContext } from '../redux/Appprovider';

const CollapseComponent = ({title,children})=>{

  const {isSidebarOpen} = useAppContext();

  const items = [
    {
      key: '1',
      label: <h1 className='text-xl font-bold'>{title}</h1>,
      children: children
    },
    
  ];
    const onChange = (key) => {
        console.log(key);
      };


    return(
      <Space direction="vertical">
            <Collapse className={`bg-gray-200 mt-4 transition-all duration-300 ${isSidebarOpen ? 'w-wFit_sidebaropen' : 'w-wFit_sidebarclose' }`}
             items={items} defaultActiveKey={[]} onChange={onChange} />
      </Space>
    )
}

export default CollapseComponent;