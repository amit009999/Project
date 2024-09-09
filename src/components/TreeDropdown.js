import React, { useEffect, useState } from 'react';
import { TreeSelect } from 'antd';

const { SHOW_PARENT } = TreeSelect;

const generateTreeData = (selectedValue) => {
  const treeData = [];
// console.log("selectedValue",selectedValue)


    treeData.push({
        title: 'All',
        value: 'All',
        key: 'All',
    });
//  if(selectedValue==='Inverters' || selectedValue==='Strings'){
    
//     for (let i = 1; i <= 12; i++) {
//         const children = [];
//         const parentValue = `ICR${i.toString().padStart(2, '0')}`;
    
//         for (let j = 1; j <= 30; j++) {
//           children.push({
//             title: `${parentValue}-INV${j.toString().padStart(2, '0')}`, // e.g., ICR01-INV01
//             value: `${parentValue}-INV${j.toString().padStart(2, '0')}`,
//             key: `${parentValue}-INV${j.toString().padStart(2, '0')}`,
//           });
//         }
    
//         treeData.push({
//           title: parentValue,
//           value: parentValue,
//           key: parentValue,
//           children,
//         });
//       }
//       return treeData;
//   }
  if(selectedValue==='WMS'){
    const treeData = [
        {
            title: 'All',
            value: 'All',
            key: 'All',
        },
        {
            title: 'ICR02_WMS',
            value: 'ICR02_WMS',
            key: 'ICR02_WMS',
        },
        {
            title: 'ICR06_WMS',
            value: 'ICR06_WMS',
            key: 'ICR06_WMS',
        },
        {
            title: 'ICR09_WMS',
            value: 'ICR09_WMS',
            key: 'ICR09_WMS',
        },
        {
            title: 'ICR11_WMS',
            value: 'ICR11_WMS',
            key: 'ICR11_WMS',
        },
    ]
    return treeData;
  }
  else if(selectedValue==='Meters'){
    const treeData = [
        {
            title: 'All',
            value: 'All',
            key: 'All',
        },
        {
            title: 'ICR02_WMS',
            value: 'ICR02_WMS',
            key: 'ICR02_WMS',
        },
        {
            title: 'ICR06_WMS',
            value: 'ICR06_WMS',
            key: 'ICR06_WMS',
        },
        {
            title: 'ICR09_WMS',
            value: 'ICR09_WMS',
            key: 'ICR09_WMS',
        },
        {
            title: 'ICR11_WMS',
            value: 'ICR11_WMS',
            key: 'ICR11_WMS',
        },
    ]
    return treeData;
  }
  else{
    for (let i = 1; i <= 12; i++) {
      const children = [];
      const parentValue = `ICR${i.toString().padStart(2, '0')}`;
  
      for (let j = 1; j <= 30; j++) {
        children.push({
          title: `${parentValue}-INV${j.toString().padStart(2, '0')}`, // e.g., ICR01-INV01
          value: `${parentValue}-INV${j.toString().padStart(2, '0')}`,
          key: `${parentValue}-INV${j.toString().padStart(2, '0')}`,
        });
      }
  
      treeData.push({
        title: parentValue,
        value: parentValue,
        key: parentValue,
        children,
      });
    }
    return treeData;
  }
};

const App = ({selectedValue,onChange,selectedvalue,height,width}) => {
  // const [value, setValue] = useState(['All']);
  const [treeData, setTreeData] = useState([]);
  // const onChange = (newValue) => {
  //   console.log('onChange ', newValue);
  //   setValue(newValue);
  // };



  const tProps = {
    treeData,
    value:selectedvalue,
    onChange:onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: 'Please select',
    maxTagCount:1,
    style: {
      width: width,
      height:height,
      backgroundColor:'#E5E7EB',
      transition: 'all 300ms ease'
    },
  };

  useEffect(()=>{
    //setValue([])
    setTreeData(generateTreeData(selectedValue));
  },[selectedValue])

  return <TreeSelect {...tProps} />;
};

export default App;
