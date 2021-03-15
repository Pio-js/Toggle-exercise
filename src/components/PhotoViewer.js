import './PhotoViewer.css';
import ToggleSwitch from './Toggle';
import React, { useState } from "react";
import Photo from './PhotoInput';

export default function PV(){
    const [isToggled, setIsToggled] = useState(false);
    const [color, setColor] = useState('blue');
    const [image, setImage] = useState("https://picsum.photos/300/200");

    function onToggle(){
        setIsToggled(!isToggled);
        const newColor = color === 'blue'? 'grey' : 'blue';
        setColor(newColor);
        const newImg = image === "https://picsum.photos/300/200"? "https://picsum.photos/500/350" : "https://picsum.photos/300/200";
        setImage(newImg);
    }

    console.log(isToggled);

    return (
        <section style = {{backgroundColor: color}}>
            <h1>Photo Viewer</h1>
            <div className = "switch-container">
                <h3>Change the background color and image</h3>
                <ToggleSwitch
                isToggled={isToggled}
                onToggle={onToggle} />
            </div>
            <Photo source={image}/>
        </section>
    );
}