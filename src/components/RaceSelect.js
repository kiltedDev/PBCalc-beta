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
    let wildCardHead;

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
      wildCardHead = <th>Select Stat</th>
      wildCardSlot =
      <Select
        name='selectedStat'
        handlerFunction={this.props.handleStatChange}
        options={stats}
        selectedOption={this.state.selectedStat}
        className="attribute"
      />
    }

    return (
      <table className="race-select">
        <thead>
          <tr>
            <th>Ability</th>
            {wildCardHead}
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <Select
              name='selectedRace'
              handlerFunction={this.props.raceSelect}
              options={this.props.raceStats}
              selectedOption={this.props.selectedRace.name}
              className="race"
            />
          </td>
          <td>
            {wildCardSlot}
          </td>
        </tr>
        </tbody>
      </table>
    );
  }
}

export default RaceSelect;
