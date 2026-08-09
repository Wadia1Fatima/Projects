import { useState } from "react"
import './style.css'


export default function ClrGenerator(){

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');


    return(
        <div className="container" style = {{background: 'color'}}>
            <h1>Generate Random Color</h1>
            <div>
                <button>HEX color</button>
                <button>RGB color</button>
                <button>Generate Color</button>
            </div>
        </div>
    )
}




