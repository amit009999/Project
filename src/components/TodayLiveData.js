import React, { useEffect, useState } from 'react';
import CollapseComponent from './CollapsewithButton'
import TodayLiveDataTable from './TodayLiveDataTable';


const TodayLiveData = ()=>{
  


    return(
      <div className=''>
          <CollapseComponent title={'Today Live Data'}>
              <TodayLiveDataTable />
          </CollapseComponent>
      </div>
    )
}

export default TodayLiveData;