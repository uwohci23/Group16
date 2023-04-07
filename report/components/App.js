import React from 'react';
import Summary from './Summary';
import DesignPrinciples from './DesignPrinciples';
import NavigationalMap from './NavigationalMap';
import Heuristic from './Heuristic';
import Improvements from './Improvements';

function App() {
  return (
    <div>
      <Summary/>
      <NavigationalMap/>
      <DesignPrinciples/>
      <Heuristic/>
      <Improvements/>
    </div>
    
  );
}

export default App;