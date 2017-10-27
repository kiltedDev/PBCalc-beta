import React from 'react';

const Select = props => {
  let optionElements = props.options.map(option =>{
    return (
      <option key={option.name} value={option.value}>{option.name}</option>
    );
  })

  return (
    <label className="small-2 columns">{props.label}
      <select
        name={props.name} value={props.selectedOption}  onChange={props.handlerFunction}
      >
        <option value=""></option>
        {optionElements}
      </select>
    </label>
  );
}

export default Select;
