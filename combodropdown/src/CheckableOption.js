import React from 'react'

export default function CheckableOption({ item, updateValue}) {

    function setChecked(target)
    {
        updateValue(target.value, target.checked);
    }

  return (
    <div>
      <input type="checkbox" value={item.label} checked={item.isSelected} onChange={event => {setChecked(event.target)}}></input>
      <label>{item.label}</label>
    </div>
  )
}
