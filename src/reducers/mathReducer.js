const intialState1={
    result:1,
    lastvalue:[]
};

const mathreducer=(state=intialState1,action)=>{
    switch(action.type){
        case "ADD":
            /* state.result+= action.payload; */
            state={
                ...state,
                result:state.result+action.payload,
                lastvalue:[...state.lastvalue, action.payload]
            }
            break;
        case "SUB":
        /* state.result -= action.payload; */
        state={
            ...state,
            result:state.result - action.payload,
            lastvalue:[...state.lastvalue, action.payload]
        }
        break;
    }
    return state;
};
export default mathreducer;