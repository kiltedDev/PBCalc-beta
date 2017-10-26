import React from 'react';
import Select from './Select';
import statValues from '../constants/statValues';


class ReviewForm extends React.Component {
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
      pointTotal: 0
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    let name = event.target.name;
    let newPointTotal = this.state.pointTotal;
    newPointTotal -= this.state[name].value;
    newPointTotal += parseInt(event.target.value);
    let newStat = statValues.find((stat) =>
      (stat.value === parseInt(event.target.value))
    )
    this.setState({
      [name]: newStat,
      pointTotal: newPointTotal
    })
    debugger
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
    return (
      <form onSubmit={this.handleFormSubmit}>
      <h3>Calculate Stats</h3>
        {errorDiv}
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
          <tr>
            <td>Strength</td>
            <td><Select
              name='strength'
              className="small-2 columns"
              handlerFunction={this.handleInputChange}
              options={statValues}
              selectedOption={this.state.strength.value}
            /></td>
            <td>{this.props.selectedRaceDeets.strength}</td>
            <td>{this.state.strength.name + this.props.selectedRaceDeets.strength}</td>
          </tr>
          <tr>
            <td>Constitution</td>
            <td><Select
              name='constitution'
              className="small-2 columns"
              handlerFunction={this.handleInputChange}
              options={statValues}
              selectedOption={this.state.constitution.value}
            /></td>
            <td>{this.props.selectedRaceDeets.constitution}</td>
            <td></td>
          </tr>
          <tr>
            <td>Dexterity</td>
            <td><Select
              name='dexterity'
              className="small-2 columns"
              handlerFunction={this.handleInputChange}
              options={statValues}
              selectedOption={this.state.dexterity.value}
            /></td>
            <td>{this.props.selectedRaceDeets.dexterity}</td>
            <td></td>
          </tr>
          <tr>
            <td>Intelligence</td>
            <td><Select
              name='intelligence'
              className="small-2 columns"
              handlerFunction={this.handleInputChange}
              options={statValues}
              selectedOption={this.state.intelligence.value}
            /></td>
            <td>{this.props.selectedRaceDeets.intelligence}</td>
            <td></td>
          </tr>
          <tr>
            <td>Wisdom</td>
            <td><Select
              name='wisdom'
              className="small-2 columns"
              handlerFunction={this.handleInputChange}
              options={statValues}
              selectedOption={this.state.wisdom.value}
            /></td>
            <td>{this.props.selectedRaceDeets.wisdom}</td>
            <td></td>
          </tr>
          <tr>
            <td>Charisma</td>
            <td><Select
              name='charisma'
              className="small-2 columns"
              handlerFunction={this.handleInputChange}
              options={statValues}
              selectedOption={this.state.charisma.value}
            /></td>
            <td>{this.props.selectedRaceDeets.charisma}</td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </form>
    );
  }
}

export default ReviewForm;
