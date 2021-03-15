import React from 'react';
import './Toggle.css';

const ToggleSwitch = (props) => {
    return (
        <label className = "toggle-switch">
            <input type = "checkbox" checked={props.isToggled} onChange={props.onToggle} />
            <span className = "switch" />
        </label>
    );
}

export default ToggleSwitch;