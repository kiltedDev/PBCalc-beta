import React, { Component } from 'react';

import statValues from '../constants/statValues';
import raceStats from '../constants/raceStats';

import PBCalcForm from '../components/PBCalcForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statValues,
      raceStats,
    };
  }


  render() {
    return(
      <div className="row">
        <div className="small-9 columns">
          <h2>Point Buy Calculator</h2>
          <PBCalcForm
          raceStats={raceStats}
          statValues={statValues}
          />
        </div>
      </div>
    )
  }
}

export default App
