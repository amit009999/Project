import React from 'react';
import {ConfigProvider, Flex, Select } from 'antd';
import { useEffect, useState } from 'react';

const Dropdownoption = ({dropdownname, selectedValue, onValueChange,width}) => {
    

    return(
        <div className=''>
            <ConfigProvider
                theme={{
                    token: {
                        controlHeight:45,
                        colorBgContainer:'#E5E7EB'
                    },
                }}
                >
                <Flex gap={12} vertical>
                    <Flex gap={8}>
                    <Select className={width}
                        placeholder="Outlined"
                        style={{ flex: 1}}
                        options={dropdownname.map(option => ({
                        value: option,
                        label: option,
                        }))}
                        value={selectedValue}
                        onChange={onValueChange}/>
                    </Flex>
                </Flex>
            </ConfigProvider>
        </div>
    )
    
  

}
export default Dropdownoption;
