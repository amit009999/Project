import { Button, DatePicker, Table } from 'antd';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const data = [];


const LosscalculationTable = () => {
    const [tabledata,setdata] = useState([]);
  const loc = useLocation();
  
  const columns = [
    {
      title: 'Inverter',
      width: 120,
      dataIndex: 'inverter',
      fixed: 'left',
      align: 'center',
      key: 'inverter',
    },
    {
      title: 'Actual Generation(kWh)',
      width: 100,
      dataIndex: 'actual generation(kwh)',
      fixed: 'left',
      align: 'center',
      key: 'actual generation(kwh)',
    },
    {
      title: 'CUF(%)',
      key: 'cuf(%)',
      children: [
        {
          title: "AC",
          width: 100,
          key: "ac",
          dataIndex: 'ac',
          align: 'center',
        },
        {
          title: "DC",
          width: 100,
          key: "dc",
          dataIndex: 'dc',
          align: 'center',
        },
      ],
    },
    {
      title: 'PR%',
      width: 100,
      dataIndex: 'pr%',
      align: 'center',
      key: 'pr%',
    },
    {
      title: 'PRtc(%)',
      width: 100,
      dataIndex: 'prtc(%)',
      align: 'center',
      key: 'prtc(%)',
    },
    {
      title: 'GII(kWh/m2)',
      width: 100,
      dataIndex: 'gii(kwh/m2)',
      align: 'center',
      key: 'gii(kwh/m2)',
    },
    {
      title: 'DA(%)',
      key: 'da(%)',
      children: [
        {
          title: "Power",
          dataIndex: 'power',
          width: 100,
          align: 'center',
          key: 'power',
        },
        {
          title: "Irrad",
          dataIndex: 'irrad',
          width: 100,
          align: 'center',
          key: 'irrad',
        },
        {
          title: "Energy",
          dataIndex: 'energy',
          width: 100,
          align: 'center',
          key: 'energy',
        },
      ],
    },
    {
      title: "Planned(kWh)",
      key: 'planned(kwh)',
      children: [
        {
          title: "Internal PV Plant Maintenance",
          dataIndex: 'internal pv plant maintenance',
          width: 100,
          align: 'center',
          key: 'internal pv plant maintenance',
        },
        {
          title: "External Grid Maintenance",
          dataIndex: 'external grid maintenance',
          width: 100,
          align: 'center',
          key: 'external grid maintenance',
        },
      ],
    },
    {
      title: "Unplanned (kWh)",
      key: 'unplanned (kwh)',
      children: [
        {
          title: "Internal PV Plant Incidents",
          dataIndex: 'internal pv plant incidents',
          width: 100,
          align: 'center',
          key: 'internal pv plant incidents',
        },
        {
          title: "External Grid Forced Outage",
          dataIndex: 'external grid forced outage',
          width: 100,
          align: 'center',
          key: 'external grid forced outage',
        },
      ],
    },
    {
      title: "Total Loss (kWh)",
      dataIndex: 'total loss (kwh)',
      width: 100,
      align: 'center',
      key: 'total loss (kwh)',
    },
    {
      title: "Availability (%)",
      dataIndex: 'availability (%)',
      width: 100,
      align: 'center',
      key: 'availability (%)',
    },
    {
      title: "Losses Split (kWh)",
      key: 'losses split (kwh)',
      children: [
        {
          title: "Outage Loss",
          dataIndex: 'outage loss',
          width: 100,
          align: 'center',
          key: 'outage loss',
        },
        {
          title: "Degradation Loss",
          dataIndex: 'degradation loss',
          width: 100,
          align: 'center',
          key: 'degradation loss',
        },
        {
          title: "Temperature Loss",
          dataIndex: 'temperature loss',
          width: 100,
          align: 'center',
          key: 'temperature loss',
        },
        {
          title: "Clipping Loss",
          dataIndex: 'clipping loss',
          width: 100,
          align: 'center',
          key: 'clipping loss',
        },
        {
          title: "Inverter Efficiency Loss",
          dataIndex: 'inverter efficiency loss',
          width: 100,
          align: 'center',
          key: 'inverter efficiency loss',
        },
        {
          title: "Array Mismatch Loss",
          dataIndex: 'array mismatch loss',
          width: 100,
          align: 'center',
          key: 'array mismatch loss',
        },
        {
          title: "DC line Loss",
          dataIndex: 'dc line loss',
          width: 100,
          align: 'center',
          key: 'dc line loss',
        },
        {
          title: "Availability loss",
          dataIndex: 'availability loss',
          width: 100,
          align: 'center',
          key: 'availability loss',
        },
        {
          title: "De-rating loss",
          dataIndex: 'de-rating loss',
          width: 100,
          align: 'center',
          key: 'de-rating loss',
        },
        {
          title: "Curtailment loss",
          dataIndex: 'curtailment loss',
          width: 100,
          align: 'center',
          key: 'curtailment loss',
        },
        {
          title: "Actual Array Loss",
          dataIndex: 'actual array loss',
          width: 100,
          align: 'center',
          key: 'actual array loss',
        },
      ],
    },
    {
      title: "Potential Generation (kWh)",
      dataIndex: 'potential generation (kwh)',
      width: 100,
      fixed:"right",
      align: 'center',
      key: 'potential generation (kwh)',
    },
    {
      title: "EA(%)",
      dataIndex: 'ea(%)',
      width: 100,
      fixed:"right",
      align: 'center',
      key: 'ea(%)',
    },
  ];


  useEffect(()=>{
  },[])

  return (
        <div>
            <Table
            columns={columns}
            // dataSource={}
            bordered
            size="middle"
            scroll={{
                x: 1100,
                y: 200,
            }} className="custom-bordered-table"
            />
        </div>
  );
}

export default LosscalculationTable;
