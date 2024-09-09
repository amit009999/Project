import React from 'react';
import dayjs from 'dayjs';
import {ConfigProvider, DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

const Datepicker = ({ selectedDate, onChange }) => {
    //console.log("dayjs" ,  [dayjs().subtract(1, 'day').startOf('day').format('DD-MM-YYYY'), dayjs().subtract(1, 'day').endOf('day').format('DD-MM-YYYY')])
    const formattedDates = 
         [
            dayjs(selectedDate[0], 'DD-MM-YYYY'),
            dayjs(selectedDate[1], 'DD-MM-YYYY')
          ];
    return (
        <div>
            <ConfigProvider
                theme={{
                    token: {
                        controlHeight:45 
                    },
                }}
                >
                
            <Space direction="vertical" size={12}>
                <RangePicker className='bg-gray-200 rounded-none w-60'
                    format="DD-MMM-YYYY"
                    value={formattedDates}
                    onChange={onChange}
                />
            </Space>
            </ConfigProvider>
        </div>
    );
};

export default Datepicker;


