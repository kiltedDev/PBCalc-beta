import React from 'react';
import Select from './Select';
import statValues from '../constants/statValues';

const TableLine = (props) => {

  return (
    <tr>
      <td>{props.name}</td>
      <td><Select
        name={props.name.toLowerCase()}
        className="small-2 columns"
        options={statValues}
        handlerFunction={props.handlerFunction}
        selectedOption={props.attribute.value}
      /></td>
      <td>{props.raceMod}</td>
      <td>{props.attribute.name + props.raceMod}</td>
    </tr>
  )
}

export default TableLine
