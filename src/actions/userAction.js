export function setUserName(data){
    return{
        type:"SET_NAME",
        payload:data
    }
}

export function setUserAge(data){
    return{
        type:"SET_AGE",
        payload:data
    }
}