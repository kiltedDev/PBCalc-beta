import React from 'react';
import Select from './Select'

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    let name = event.target.name
    this.setState({
      [name]: event.target.value
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

    return (
      <form onSubmit={this.handleFormSubmit}>
      <h3>Select Race</h3>
        {errorDiv}
            <Select
              name='strValue'
              className="small-2 columns"
              handlerFunction={this.handleInputChange}
              selectedOption={this.state.strValue}
            />
      </form>
    );
  }
}

export default ReviewForm;
