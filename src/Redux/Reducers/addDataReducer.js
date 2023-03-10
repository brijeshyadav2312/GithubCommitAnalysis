const STATE = [];

function addDataReducer(state = STATE, action){
    switch(action.type){
        case "ADD_DATA":
            return [...state, action.data];
        default:
            return state;
    }
}

export default addDataReducer;