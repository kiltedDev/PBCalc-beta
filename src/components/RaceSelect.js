import React from 'react';
import Select from './Select';

class RaceSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

debugger
  render() {
    let wildCardSlot;

    let stats = [
      {name: "Strength",
      value: "strength"},
      {name: "Constitution",
      value: "constitution"},
      {name: "Dexterity",
      value: "dexterity"},
      {name: "Intelligence",
      value: "intelligence"},
      {name: "Wisdom",
      value: "wisdom"},
      {name: "Charisma",
      value: "charisma"}]

    if (this.props.selectedRace.wild) {
      wildCardSlot =
      <Select
        name='selectedStat'
        handlerFunction={this.props.handleStatChange}
        options={stats}
        selectedOption={this.state.selectedStat}
      />
    }

    return (
      <div className="race-select-box">
        <h2>Select Race</h2>
        <Select
          name=''
          handlerFunction={this.props.raceSelect}
          options={this.props.raceStats}
          selectedOption={this.props.selectedRace.name}
        />
        {wildCardSlot}
      </div>
    );
  }
}

export default RaceSelect;
