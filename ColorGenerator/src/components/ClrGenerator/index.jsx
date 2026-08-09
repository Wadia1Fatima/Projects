import { useState } from "react"


export default function ClrGenerator(){

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');


    return(
        <div 
            style={
                {
                    display: 'flex',
                    gap: '10px',
                    padding: '30px',
                    width: '100%',
                    heigth: '100%',
                    background: 'color'
                }
            }
        >
            <h1>Generate Random Color</h1>
            <button>HEX color</button>
            <button>RGB color</button>
            <button>Generate Color</button>
        </div>
    )
}




