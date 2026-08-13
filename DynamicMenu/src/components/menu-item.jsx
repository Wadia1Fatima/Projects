import { useState } from "react";
import MenuList from "./menu-list";
import {FaMinus, FaPlus} from 'react-icons/fa'
import './style.css'



export default function MenuItem({ item }) {

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

    function handleToggleChildren(getCurrentId){
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentId] : !displayCurrentChildren[getCurrentId]
        })
    }

    console.log(displayCurrentChildren)

    return (
        <li className='menu-item-container'>
            <div className="menu-item-box">
                <p>{item.label}</p>
                {
                    item && item.children && item.children.length
                        ? <span onClick={() => handleToggleChildren(item.id)}>
                            {
                                displayCurrentChildren[item.id] ? <FaMinus /> : <FaPlus />
                            }
                        </span>
                        : null
                }
            </div>
            {
                item && item.children && item.children.length > 0 && displayCurrentChildren[item.id]
                    ? <MenuList list={item.children} />
                    : null
            }
        </li>

    )
}