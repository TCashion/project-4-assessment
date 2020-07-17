import React from 'react';
import './CircleSelector.css';

function CircleSelector(props) {
    return(
        <div className="CircleSelector">
            <button 
                id="0" 
                onClick={props.handleClick}
                className={props.toggledIndex === 0 ? 'selected' : null}
            >
                {props.toggledIndex === 0 ? 'CIRCLE 1 SELECTED' : 'SELECT CIRCLE 1'}
            </button>
            <button 
                id="1" 
                onClick={props.handleClick}
                className={props.toggledIndex === 1 ? 'selected' : null}
            >
                {props.toggledIndex === 1 ? 'CIRCLE 2 SELECTED' : 'SELECT CIRCLE 2'}
            </button>
            <button 
                id="2" 
                onClick={props.handleClick}
                className={props.toggledIndex === 2 ? 'selected' : null}
            >
                {props.toggledIndex === 2 ? 'CIRCLE 3 SELECTED' : 'SELECT CIRCLE 3'}
            </button>
            <button 
                id="3" 
                onClick={props.handleClick}
                className={props.toggledIndex === 3 ? 'selected' : null}
            >
                {props.toggledIndex === 3 ? 'CIRCLE 4 SELECTED' : 'SELECT CIRCLE 4'}
            </button>
        </div>
    )
}


export default CircleSelector;