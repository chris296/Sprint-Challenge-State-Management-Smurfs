import React from 'react';
import {getSmurf} from '../actions';
import { connect } from 'react-redux';
import Smurf from './Smurf';


const SmurfList = props => {

    const fetchSmurf = e => {
        e.preventDefault();
        props.getSmurf();
    }
    console.log('this is props',props);

    return(
        <div>
            {props.smurfs.map(item => (
                <Smurf key={item.id} item={item}/>
            ))}
            <button onClick={fetchSmurf}>Fetch Smurfs</button>
        </div>
    )
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
})

export default connect(mapStateToProps, {getSmurf})(SmurfList);