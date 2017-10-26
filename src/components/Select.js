import React from 'react';
import statValues from '../constants/statValues'

const Select = props => {
  let optionElements = statValues.map(stat =>{
    return (
      <option key={stat.stat} value={stat.value}>{stat.stat}</option>
    );
  })

  return (
    <label className={props.className}>{props.label}
      <select name={props.name} value={props.selectedOption}  onChange={props.handlerFunction}>
        <option value="0"></option>
        {optionElements}
      </select>
    </label>
  );
}

export default Select;
