import React from 'react';
import Select from './Select';
import TableLine from './TableLine';
import RaceSelect from './RaceSelect';
import statValues from '../constants/statValues';


class PBCalcForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      strength: {name: 10, value: 0},
      constitution: {name: 10, value: 0},
      dexterity: {name: 10, value: 0},
      intelligence: {name: 10, value: 0},
      wisdom: {name: 10, value: 0},
      charisma: {name: 10, value: 0},
      selectedRace: this.props.raceStats[0],
      selectedStat: '',
      pointTotal: 0
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStatChange = this.handleStatChange.bind(this);
    this.raceSelect = this.raceSelect.bind(this);
  }

  handleInputChange(event) {
    let name = event.target.name;
    let targetValue = parseInt(event.target.value)
    let newPointTotal = this.state.pointTotal;
    newPointTotal -= this.state[name].value;
    newPointTotal += targetValue;
    let newStat = statValues.find((stat) =>
      (stat.value === targetValue)
    );
    this.setState({
      [name]: newStat,
      pointTotal: newPointTotal
    });
  }

  handleStatChange(event) {
    let selectedRace = this.state.selectedRace;
    selectedRace.strength = 0;
    selectedRace.constitution = 0;
    selectedRace.dexterity = 0;
    selectedRace.intelligence = 0;
    selectedRace.wisdom = 0;
    selectedRace.charisma = 0;
    selectedRace[event.target.value] = 2;
    this.setState({
      selectedRace: selectedRace,
      selectedStat: event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)
    });
  }

  raceSelect(event) {
    let newRace = this.props.raceStats.find((race) =>
      (race.name === event.target.value)
    );

    this.setState({
      selectedRace: newRace
    });
  }

  render() {
    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }

    let stats = ["Strength", "Constitution", "Dexterity", "Intelligence", "Wisdom", "Charisma"]

    let tableLines = stats.map((stat) => {
      return(
        <TableLine
        key={stat}
          name={stat}
          attribute={this.state[stat.toLowerCase()]}
          handlerFunction={this.handleInputChange}
          raceMod={this.state.selectedRace[stat.toLowerCase()]}
        />
      )
    })

    return (
      <form>
      <h3>Calculate Stats</h3>
        {errorDiv}
        <RaceSelect
          selectedRace={this.state.selectedRace}
          raceSelect={this.raceSelect}
          handleStatChange={this.handleStatChange}
          raceStats={this.props.raceStats}
          selectedStat={this.state.selectedStat}
        />
        <table>
          <thead>
          <tr>
            <th>Ability</th>
            <th>Base</th>
            <th>Racial</th>
            <th>Total</th>
          </tr>
          </thead>
          <tfoot>
          <tr>
            <td></td>
            <td>Total:</td>
            <td>{this.state.pointTotal}</td>
            <td></td>
          </tr>
          </tfoot>
          <tbody>
            {tableLines}
          </tbody>
        </table>
      </form>
    );
  }
}

export default PBCalcForm;
