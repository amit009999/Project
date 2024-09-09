import React from 'react';
import {ConfigProvider, Flex, Select } from 'antd';
const DropdownFilter = ({ mode,dropdownname,onchange,selectedValue,width}) => (
   
    <div>
        <ConfigProvider
                theme={{
                    token: {
                        controlHeight:30,
                        
                    },
                }}
                >
                <Flex>
                <Select className=' flex flex-col rounded-none'
                    mode={mode}
                    maxTagCount={1}
                    placeholder="Outlined"
                    options={dropdownname.map(option => ({
                    value: option,
                    label: option,
                    }))}
                    value = {selectedValue}
                    onChange= {onchange}
                    style={{height:'28px', width: width }}
                />
                </Flex>
        </ConfigProvider>
  </div>
);

export default DropdownFilter;
