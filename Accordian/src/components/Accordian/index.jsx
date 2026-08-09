import React, {useState} from 'react';
import data from './data';
import './styles.css'
// Two Types of Accordian 
//  Single Selection
//  Multiple Selection
 
 export default function Accordian(){

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);
    let buttonText = "Enable MultiSelection";

    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }
    function handleMultiSelection(getCurrentId){
        let copyMulti = [...multiple]
        const findIndexOfCurrentId = copyMulti.indexOf(getCurrentId)

        console.log(findIndexOfCurrentId)
        if(findIndexOfCurrentId === -1) copyMulti.push(getCurrentId)
        else copyMulti.splice(findIndexOfCurrentId, 1)

        setMultiple(copyMulti)
    }

    enableMultiSelection ? buttonText = "Disable MultiSelection" : buttonText = "Enable MultiSelection"

    console.log(selected, multiple);
    return (
        <div className='wrapper'>
            <h1 className="text-black-4xl">Accordian</h1>
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
                {buttonText}
            </button>
            <div className='accordian'>
                {
                    data && data.length > 0 ? 
                    data.map(dataItem => <div className='item'>
                        <div onClick = {
                            enableMultiSelection 
                            ? () => handleMultiSelection (dataItem.id) 
                            : () => handleSingleSelection(dataItem.id)
                          } 
                        className='title'>
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMultiSelection 
                            ? multiple.indexOf(dataItem.id) !== -1 && <div className='content'>{dataItem.answer}</div>
                            : selected === dataItem.id && <div className='content'>{dataItem.answer}</div>
                        }
                        {/* {
                            selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1
                            ? <div className='content'>{dataItem.answer}</div>
                            : null
                        } */}

                    </div>)
                    : <div>No Data Found</div>
                }
            </div>
        </div>
    )
 }





