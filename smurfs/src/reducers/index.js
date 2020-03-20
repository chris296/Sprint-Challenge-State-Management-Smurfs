

const initialState = {
    smurfs: []
}

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
                smurfs: action.payload
            }
        default:
            return state;
        
    }
}

export default reducer;