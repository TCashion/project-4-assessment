import React from 'react';
import './Circles.css';

function Circles(props) {
    return(
        <div className="Circles">
            <div
                className={props.toggledIndex === 0 ? 'selected' : null}
            >1</div>
            <div
                className={props.toggledIndex === 1 ? 'selected' : null}
            >2</div>
            <div
                className={props.toggledIndex === 2 ? 'selected' : null}
            >3</div>
            <div
                className={props.toggledIndex === 3 ? 'selected' : null}
            >4</div>
        </div>
    )
}

export default Circles;