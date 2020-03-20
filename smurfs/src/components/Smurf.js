import React from 'react';

const Smurf = props => {
    return (
        <div>
            <h3>{props.item.name}</h3>
            <p>{props.item.age}</p>
            <p>{props.item.height}</p>
        </div>
    )
}

export default Smurf;