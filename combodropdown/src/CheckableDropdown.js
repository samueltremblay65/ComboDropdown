import React, { useEffect, useState } from 'react'
import './CheckableDropdownStyle.css'
import CheckableOption from './CheckableOption';

export default function CheckableDropdown({items, isOpen, setOpen}) {
    const [itemOptionList, setItemOptionList] = useState();

    const [selectedString, setSelectedString] = useState();

    function generateOptionList()
    {
        const tmpList = [];
        items.forEach(element => {
            tmpList.push(<CheckableOption key={element.label} item={element} updateValue={updateValue}/>);
        });

        setItemOptionList(tmpList);
    }

    useEffect(() => {
        generateOptionList();
        setSelectedString(generateSelected());
    }, []);

    function generateSelected()
    {
        const selectedLabels = [];

        for(var i = 0; i < items.length; i++)
        {
            if(items[i].isSelected)
            {
                selectedLabels.push(items[i]);
            }
        }

        if(selectedLabels.length == 0)
        {
            return "no label selected";
        }
        else
        {

            var valueString = selectedLabels[0].label;
            for(var i = 1; i < selectedLabels.length; i++)
            {
                valueString += ", " + selectedLabels[i].label;
            }
            return valueString;
        }
    }

    function checkOptionsVisible()
    {
        if(isOpen)
        {
            return "block";
        }
        else
        {
            return "none";
        }
    }

    function selectDropdown()
    {
        if(isOpen)
        {
            setOpen(false);
        }
        else
        {
            setOpen(true);
        }
    }

    function updateValue(value, isSelected)
    {
        for(var i = 0; i < items.length; i++)
        {
            if(items[i].label === value)
            {
                items[i].isSelected = isSelected;
            }

            generateOptionList();
            setSelectedString(generateSelected());
        }
    }

  return (
    <div>
        <div className="box checkableDropdownHitbox">
            <div onClick={event => { selectDropdown(event)}} className="noSelect center nowrap">{selectedString}</div>
            <div className="optionsBox" style={{display: checkOptionsVisible()}}>
                <hr></hr>
                {itemOptionList}
            </div>
        </div>
    </div>
  )
}
