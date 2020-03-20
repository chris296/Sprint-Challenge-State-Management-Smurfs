import React from 'react';
import {getSmurf} from '../actions';
import { connect } from 'react-redux';
import Smurf from './Smurf';


const SmurfList = props => {

    props.getSmurf();
    console.log('this is props',props);

    return(
        <div>
            {props.state.map(item => (
                <Smurf key={item.id} item={item}/>
            ))}
        </div>
    )
}

const mapStateToProps = state => ({state});

export default connect(mapStateToProps, {getSmurf})(SmurfList);