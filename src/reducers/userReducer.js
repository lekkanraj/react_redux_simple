const intialState2={
    username:'Guest',
    age:0
};

const userreducer=(state=intialState2,action)=>{
    switch(action.type){
        case "SET_NAME":
            /* state.result+= action.payload; */
            state={
                ...state,
                username:action.payload,
            }
            break;
        case "SET_AGE":
        /* state.result -= action.payload; */
        state={
            ...state,
            age: action.payload,
        }
        break;
    }
    return state;
};

export default userreducer;