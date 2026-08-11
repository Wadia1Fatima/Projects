import { useEffect, useState } from "react"
import './style.css'


export default function ClrGenerator(){

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#ffffff');

    function CreateHexColor(){
        const hexColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        setColor(hexColor);
    }

    function CreateRgbColor(){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        setColor(`rgb(${r}, ${g}, ${b})`);
    }

    function CreateColor(){
        if(typeOfColor === 'hex'){
            CreateHexColor();
        } else {
            CreateRgbColor();
        }
    }

    useEffect(() => {
        if(typeOfColor === 'rgb') CreateRgbColor()
        else CreateHexColor()
    },[typeOfColor])


    return(
        <div className="container" style = {{background: color}}>
            <h1>Generate Random Colour</h1>
            <div className="buttons">
                <button onClick={() => setTypeOfColor('hex')}>HEX colour</button>
                <button onClick={() => setTypeOfColor('rgb')}>RGB colour</button>
                <button onClick={CreateColor}>Generate Colour</button>
            </div>
            <div>
                <h3>{typeOfColor === 'rgb' ? "RGB Colour" : "HEX Colour"}</h3>
                <h3>{color}</h3>
            </div>
        </div>
    )
}




