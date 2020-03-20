

const initialState = [{
    name: '',
    age: '',
    height: '',
    id: ''
}];

function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
        case 'FETCH_SMURF_START':
            return{
                ...state,
            };
        case 'FETCH_SMURF_SUCCESS':
            return{
                ...state,
                name: action.payload.name,
                age: action.payload.age,
                height: action.payload.height,
                id: action.payload.id
            }
        
    }
}

export default reducer;