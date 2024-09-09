import React from 'react';
import {ConfigProvider, Flex, Select } from 'antd';
const MultipleSelectionDropdown = ({ dropdownname, selectedValue, onValueChange ,maxTagCount}) => (
    <div>
        <ConfigProvider
                theme={{
                    token: {
                        controlHeight:45,
                    },
                }}
                >
                <Flex>
                <Select
                    mode="multiple"
                    maxTagCount={maxTagCount}
                    placeholder="Outlined"
                    options={dropdownname.map(option => ({
                    value: option,
                    label: option,
                    }))}
                    value={selectedValue}
                    onChange={onValueChange}
                    style={{ width: '100%' }}
                />
                </Flex>
        </ConfigProvider>
  </div>
);

export default MultipleSelectionDropdown;
