import React from 'react';
import TextField from './TextField'
import Select from './Select'

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starOptions: ["★","★★","★★★","★★★★","★★★★★"],
      errors: [],
      nameEntry: "",
      starSelected: "",
      textEntry: ""
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      errors: [],
      nameEntry: "",
      starSelected: "",
      textEntry: ""
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (
      this.validateNameChange(this.state.nameEntry) &&
      this.validateStarSelection(this.state.starSelected)
    ) {
      let formPayload = {
        name: this.state.nameEntry,
        content: this.state.textEntry,
        rating: this.state.starSelected.length*20,
      };
      this.props.reviewSubmit(formPayload);
      this.handleClearForm(event)
    }
  }

  handleInputChange(event) {
    let name = event.target.name
    this.setState({ [name]: event.target.value })
  }

  validateNameChange(name) {
    if (name === '' || name === ' ') {
      let newError = { nameEntry: 'Name may not be blank.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.nameEntry
      this.setState({ errors: errorState })
      return true
    }
  }

  validateStarSelection(selection) {
    if (selection === '') {
      let newError = { starSelected: 'You must select a rating.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.starSelected
      this.setState({ errors: errorState })
      return true
    }
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
      <h3>Add A Review</h3>
        {errorDiv}
        <TextField
          name="nameEntry"
          label="Name"
          className="small-10 columns"
          handlerFunction={this.handleInputChange}
          content={this.state.nameEntry}
        />
        <Select
          name='starSelected'
          label='Stars'
          className="small-2 columns"
          handlerFunction={this.handleInputChange}
          options={this.state.starOptions}
          selectedOption={this.state.starSelected}
        />
        <TextField
          name="textEntry"
          className="small-12 columns"
          label="Review Text"
          handlerFunction={this.handleInputChange}
          content={this.state.textEntry}
        />
        <br/>
        <div className="button-group small-12 columns">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default ReviewForm;
