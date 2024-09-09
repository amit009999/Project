import React, { useEffect, useState } from 'react';
import Collapse from './Collapse'
import PeerComparisonTable from './PeerComparisonTable';


const PeerComparison = ()=>{
  


    return(
      <div>
          <Collapse title={'Peer Comparison'}>
              <PeerComparisonTable />
          </Collapse>
      </div>
    )
}

export default PeerComparison;