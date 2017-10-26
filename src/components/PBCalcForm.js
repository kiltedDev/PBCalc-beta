import React from 'react';
import TextField from './TextField'
import Select from './Select'

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      strValue: 0,
      conValue: 0,
      dexValue: 0,
      intValue: 0,
      wisValue: 0,
      chaValue: 0,
      strSelected: "10",
      conSelected: "10",
      dexSelected: "10",
      intSelected: "10",
      wisSelected: "10",
      chaSelected: "10",
      pointTotal: 0
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStrChange = this.handleStrChange.bind(this);
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      errors: [],
      nameEntry: "",
      textEntry: ""
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (
      this.validateNameChange(this.state.nameEntry) &&
      this.validateStatSelection(this.state.statSelected)
    ) {
      let formPayload = {
        name: this.state.nameEntry,
        content: this.state.textEntry,
        rating: this.state.statSelected.length*20,
      };
      this.props.reviewSubmit(formPayload);
      this.handleClearForm(event)
    }
  }

  handleInputChange(event) {
    let name = event.target.name
    this.setState({
      [name]: event.target.value
      totalPoints: this.state.strValue +  this.state.conValue +  this.state.dexValue +  this.state.intValue +  this.state.wisValue +  this.state.chaValue
    })
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

    debugger

    return (
      <form onSubmit={this.handleFormSubmit}>
      <h3>Calculate Stats</h3>
        {errorDiv}
        <table>
        <tr>
          <th>Ability</th>
          <th>Base</th>
          <th>Racial</th>
          <th>total</th>
        </tr>
        <tr>
          <td>Strength</td>
          <td><Select
            name='strValue'
            className="small-2 columns"
            handlerFunction={this.handleInputChange}
            selectedOption={this.state.strValue}
          /></td>
          <td>{this.props.selectedRaceDeets.strength}</td>
          <td></td>
        </tr>
        <tr>
          <td>Constitution</td>
          <td><Select
            name='conValue'
            className="small-2 columns"
            handlerFunction={this.handleInputChange}
            selectedOption={this.state.conValue}
          /></td>
          <td>{this.props.selectedRaceDeets.constitution}</td>
          <td></td>
        </tr>
        <tr>
          <td>Dexterity</td>
          <td><Select
            name='dexValue'
            className="small-2 columns"
            handlerFunction={this.handleInputChange}
            selectedOption={this.state.dexValue}
          /></td>
          <td>{this.props.selectedRaceDeets.dexterity}</td>
          <td></td>
        </tr>
        <tr>
          <td>Intelligence</td>
          <td><Select
            name='intValue'
            className="small-2 columns"
            handlerFunction={this.handleInputChange}
            selectedOption={this.state.intValue}
          /></td>
          <td>{this.props.selectedRaceDeets.intelligence}</td>
          <td></td>
        </tr>
        <tr>
          <td>Wisdom</td>
          <td><Select
            name='wisValue'
            className="small-2 columns"
            handlerFunction={this.handleInputChange}
            selectedOption={this.state.wisValue}
          /></td>
          <td>{this.props.selectedRaceDeets.wisdom}</td>
          <td></td>
        </tr>
        <tr>
          <td>Charisma</td>
          <td><Select
            name='chaValue'
            className="small-2 columns"
            handlerFunction={this.handleInputChange}
            selectedOption={this.state.chaValue}
          /></td>
          <td>{this.props.selectedRaceDeets.charisma}</td>
          <td></td>
        </tr>
      </table>

        <br/>
        <div className="button-group small-12 columns">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default ReviewForm;
