import React, {useState} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';



const SmurfForm = props => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    const handleChange = event => {
        setNewSmurf({...newSmurf, [event.target.name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(newSmurf);
        axios
        .post("http://localhost:3333/smurfs", newSmurf)
        .then(res => {
            console.log("post success", res);
        })
        .catch(err => console.log(err.response));
        setNewSmurf({
            name: '',
            age: '',
            height: ''
        })
    }


    return (
        <div>
            <h1>Add A New Smuf</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <form onSubmit={event => handleSubmit(event)}>
                        <label>Name</label>
                        <input name='name' type='text' value={newSmurf.name} onChange={event => handleChange(event)}/>
                        <label>Age</label>
                        <input name='age' type='text' value={newSmurf.age} onChange={event => handleChange(event)}/>
                        <label>height</label>
                        <input name='height' type='text' value={newSmurf.height} onChange={event => handleChange(event)}/>
                        <button>Submit</button>
                    </form>
                </div>
            </form>
        </div>
    )
}

export default SmurfForm;